let blocklist = [];
let activelist = [];
let callForDisplay = false;

console.log('background i runnng oooooooooooooooooo!!!!!!!!!');


const activateBime = (b_data) => {

    function addToWebSiteList(websitelist, newObj) {
        const index = websitelist.findIndex(obj => obj.domain === newObj.domain);

        if (index !== -1) {
            websitelist.splice(index, 1);
        } else {
            websitelist.push(newObj);
        }
    }

    addToWebSiteList(blocklist, b_data)

    console.log("the blocklist is now ", blocklist);

    const timeInputstart = b_data.startTime;
    const timeinputstop = b_data.stopTime;

    const startTime = new Date();
    const [hours, minutes] = timeInputstart.split(":");
    startTime.setHours(hours);
    startTime.setMinutes(minutes);

    const endTime = new Date();
    const [endhours, endminutes] = timeinputstop.split(":");
    endTime.setHours(endhours);
    endTime.setMinutes(endminutes);


    const blockSite = (site) => {
        const sendBlockRequestToTab = (tabId) => {
            const blockRule = {
                id: 1,
                action: {
                    type: "block",
                },
                condition: {
                    urlFilter: site,
                },
            };

            chrome.declarativeNetRequest.updateDynamicRules(
                {
                    removeRuleIds: [1], // Remove existing rule (if any)
                    addRules: [blockRule], // Add the new block rule as an array
                },
                () => {
                    if (chrome.runtime.lastError) {
                        console.error("Error adding rule:", chrome.runtime.lastError.message);
                    } else {
                        console.log("Blocking requests to:", site, "in tab:", tabId);
                    }
                }
            );
        };

        const blockMatchingTabs = (tabs) => {
            let foundMatchingTab = false;
            tabs.forEach((tab) => {
                const tabUrl = new URL(tab.url);
                if (tabUrl.hostname === site) {
                    sendBlockRequestToTab(tab.id);
                    foundMatchingTab = true;
                }
            });

            if (!foundMatchingTab) {
                console.log("No tab is open with the site as hostname. Listening...");
            }
        };

        const listenForNewTabs = () => {
            chrome.tabs.onCreated.addListener((tab) => {
                const tabUrl = new URL(tab.url);
                if (tabUrl.hostname === site) {
                    sendBlockRequestToTab(tab.id);
                    console.log('sent blocking request to tab id:', tab.id);
                    chrome.runtime.sendMessage(
                        {action: "startdisplay", display: callForDisplay, disdom: doms, theTab: tab.id},
                        (response) => {
                            console.log("response i received from popup display -->", response);
                        }
                    );
                }
            });
        };

        // Get all open tabs and block any matching tabs
        chrome.tabs.query({}, (tabs) => {
            blockMatchingTabs(tabs);
            listenForNewTabs();
        });
    };

    // Call the blockSite function with the desired site to block
    const siteToBlock = "example.com"; // Replace this with the site you want to block
    blockSite(siteToBlock);


    const checker = setInterval(() => {
        const currentTime = new Date();
        if (
            currentTime.getHours() === startTime.getHours() &&
            currentTime.getMinutes() === startTime.getMinutes()
        ) {
            clearInterval(checker);
            console.log("i have started countdown....");


            blocklist.forEach((doms) => {

                blockSite(doms.domain);
                timer(doms.domain, startTime, endTime);

                callForDisplay = true;

            });
            return;
        }
        console.log("domain still free ....");
    }, 1000);

    return;
};


const unblockSite = (site) => {
    const unblockRule = {
        id: 1,
        action: {
            type: "allow",
        },
        condition: {
            urlFilter: site,
        },
    };
    chrome.declarativeNetRequest.updateDynamicRules(
        {
            removeRuleIds: [1],
            addRules: [unblockRule],
        },
        () => {
            if (chrome.runtime.lastError) {
                console.error("Error adding rule:", chrome.runtime.lastError.message);
            } else {
                console.log("Unblocking requests to:", site);
            }
        }
    );
};


const timer = (site, startTime, endTime) => {
    const timeDiff = endTime - startTime;
    let remainingTime = Math.floor(timeDiff / 1000);
    console.log(`Countdown:-> ${remainingTime} seconds`);

    const interval = setInterval(() => {
        remainingTime--;
        if (remainingTime <= 0) {
            clearInterval(interval);

            blocklist.forEach((doms) => {
                unblockSite(doms.domain)
                blocklist.splice(doms, 1)
                callForDisplay = false;
                chrome.runtime.sendMessage(
                    {action: "stopdisplay", display: callForDisplay, disdom: doms},
                    (response) => {
                        console.log("response i received from popup display -->", response);
                    }
                );

            })
            activelist.push(...blocklist);
            console.log("Countdown completed!");
            console.log("Site added to activelist:", site);
            console.log(activelist);
        }
        console.log(`Countdown is: ${remainingTime} seconds`);
        return;
    }, 1000);
};


chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "startFunction") {
        const bimeList = message.bimeObjects
        bimeList.forEach((bimeObject) => {
            console.log('i got this from popup.js -->', bimeObject);
            activateBime(bimeObject);
            sendResponse(bimeObject);
        })
    }
    return true;
});


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "updateWebsiteList") {
        chrome.storage.sync.set({websites: message.websiteList}, () => {
            console.log("Website list saved in chrome.storage:", message.websiteList);
            sendResponse({success: true});
        });
        return true;
    }
});


//code that powers delete icon.
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "removebime") {
        unblockSite(message.hostName)
        console.log('i unblocked site');
        return true;
    }
});


