let blocklist = [];
let activelist = [];


const activateBime = (dom, stat, stot) => {


    if (!blocklist.includes(dom)) {
        blocklist.push(dom);
        console.log('Site added to blocklist:', dom);
        console.log(blocklist);
    }


    const timeInputstart = stat;
    const timeinputstop = stot;


    const startTime = new Date();
    const [hours, minutes] = timeInputstart.split(":");
    startTime.setHours(hours);
    startTime.setMinutes(minutes);


    const endTime = new Date();
    const [endhours, endminutes] = timeinputstop.split(":");
    endTime.setHours(endhours)
    endTime.setMinutes(endminutes)


    const checker = setInterval(() => {
        const currentTime = new Date();
        if (currentTime.getHours() === startTime.getHours() && currentTime.getMinutes() === startTime.getMinutes()) {
            clearInterval(checker);
            console.log('i have started countdown....');
            timer(dom, startTime, endTime)
        }
        console.log('domain still free ....');
    }, 1000)

    return;
}


const blockSite = (site) => {

    chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: [1], // Replace '1' with the actual rule ID you want to remove
    }, () => {
        const blockRule = {
            id: 1, // Replace '1' with a unique rule ID (must be an integer)
            priority: 1,
            action: {
                type: 'block',
            },
            condition: {
                urlFilter: site,
            },
        };

        chrome.declarativeNetRequest.updateDynamicRules({
            addRules: [blockRule],
        }, () => {
            if (chrome.runtime.lastError) {
                console.error('Error adding rule:', chrome.runtime.lastError.message);
            } else {
                console.log('Blocking requests to:', site);
            }
        });
    });
};


const timer = (site, startTime, endTime) => {

    const timeDiff = endTime - startTime;
    let remainingTime = Math.floor(timeDiff / 1000);

    console.log(`Countdown:-> ${remainingTime} seconds`);


    const interval = setInterval(() => {
        remainingTime--;


        if (remainingTime <= 0) {
            clearInterval(interval);
            console.log("Countdown completed!");
            blocklist.forEach((doms) => {
                blockSite(doms);
            })
            console.log('Site added to activelist:', site);
            console.log(activelist);
        }

        console.log(`Countdown: ${remainingTime} seconds`);
        return;
    }, 1000)

};


chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    userDomain = message.domain;
    userStartTime = message.starttime
    userStopTime = message.stoptime
    if (message.action === 'startFunction') {
        activateBime(userDomain, userStartTime, userStopTime)
        console.log('i received this from popup.js-->', userDomain, userStartTime, userStopTime)
        sendResponse({userDomain, userStartTime, userStopTime})
        return true;
    }
});

 
