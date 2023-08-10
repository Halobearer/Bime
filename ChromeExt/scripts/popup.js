const generateHTML404 = (pageName) => {
  return `<div id="clouds">
  <div class="cloud x1"></div>
  <div class="cloud x1_5"></div>
  <div class="cloud x2"></div>
  <div class="cloud x3"></div>
  <div class="cloud x4"></div>
  <div class="cloud x5"></div>
</div>
<div class='c'>
  <div class='_404'>404</div>
  <hr>
  <div class='_1'>GET BACK TO WORK</div>
  <div class='_2'>STUDYING > ${pageName}</div>
</div> `
}








const generateStyles = () => {
    return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
  body {
    background: #33cc99;
    color: #fff;
    font-family: "Open Sans", sans-serif;
    max-height: 700px;
    overflow: hidden;
  }
  .c {
    text-align: center;
    display: block;
    position: relative;
    width: 80%;
    margin: 100px auto;
  }
  ._404 {
    font-size: 220px;
    position: relative;
    display: inline-block;
    z-index: 2;
    height: 250px;
    letter-spacing: 15px;
  }
  ._1 {
    text-align: center;
    display: block;
    position: relative;
    letter-spacing: 12px;
    font-size: 4em;
    line-height: 80%;
  }
  ._2 {
    text-align: center;
    display: block;
    position: relative;
    font-size: 20px;
  }
  .text {
    font-size: 70px;
    text-align: center;
    position: relative;
    display: inline-block;
    margin: 19px 0px 0px 0px;
    /* top: 256.301px; */
    z-index: 3;
    width: 100%;
    line-height: 1.2em;
    display: inline-block;
  }
  
 
  .right {
    float: right;
    width: 60%;
  }
  
  hr {
    padding: 0;
    border: none;
    border-top: 5px solid #fff;
    color: #fff;
    text-align: center;
    margin: 0px auto;
    width: 420px;
    height: 10px;
    z-index: -10;
  }
  
  hr:after {
    display: inline-block;
    position: relative;
    top: -0.75em;
    font-size: 2em;
    padding: 0 0.2em;
    background: #33cc99;
  }
  
  .cloud {
    width: 350px;
    height: 120px;
  
    background: #fff;
    background: linear-gradient(top, #fff 100%);
    background: -webkit-linear-gradient(top, #fff 100%);
    background: -moz-linear-gradient(top, #fff 100%);
    background: -ms-linear-gradient(top, #fff 100%);
    background: -o-linear-gradient(top, #fff 100%);
  
    border-radius: 100px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
  
    position: absolute;
    margin: 120px auto 20px;
    z-index: -1;
    transition: ease 1s;
  }
  
  .cloud:after,
  .cloud:before {
    content: "";
    position: absolute;
    background: #fff;
    z-index: -1;
  }
  
  .cloud:after {
    width: 100px;
    height: 100px;
    top: -50px;
    left: 50px;
  
    border-radius: 100px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
  }
  
  .cloud:before {
    width: 180px;
    height: 180px;
    top: -90px;
    right: 50px;
  
    border-radius: 200px;
    -webkit-border-radius: 200px;
    -moz-border-radius: 200px;
  }
  
  .x1 {
    top: -50px;
    left: 100px;
    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    transform: scale(0.3);
    opacity: 0.9;
    -webkit-animation: moveclouds 15s linear infinite;
    -moz-animation: moveclouds 15s linear infinite;
    -o-animation: moveclouds 15s linear infinite;
  }
  
  .x1_5 {
    top: -80px;
    left: 250px;
    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    transform: scale(0.3);
    -webkit-animation: moveclouds 17s linear infinite;
    -moz-animation: moveclouds 17s linear infinite;
    -o-animation: moveclouds 17s linear infinite;
  }
  
  .x2 {
    left: 250px;
    top: 30px;
    -webkit-transform: scale(0.6);
    -moz-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 0.6;
    -webkit-animation: moveclouds 25s linear infinite;
    -moz-animation: moveclouds 25s linear infinite;
    -o-animation: moveclouds 25s linear infinite;
  }
  
  .x3 {
    left: 250px;
    bottom: -70px;
  
    -webkit-transform: scale(0.6);
    -moz-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 0.8;
  
    -webkit-animation: moveclouds 25s linear infinite;
    -moz-animation: moveclouds 25s linear infinite;
    -o-animation: moveclouds 25s linear infinite;
  }
  
  .x4 {
    left: 470px;
    botttom: 20px;
  
    -webkit-transform: scale(0.75);
    -moz-transform: scale(0.75);
    transform: scale(0.75);
    opacity: 0.75;
  
    -webkit-animation: moveclouds 18s linear infinite;
    -moz-animation: moveclouds 18s linear infinite;
    -o-animation: moveclouds 18s linear infinite;
  }
  
  .x5 {
    left: 200px;
    top: 300px;
  
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    transform: scale(0.5);
    opacity: 0.8;
  
    -webkit-animation: moveclouds 20s linear infinite;
    -moz-animation: moveclouds 20s linear infinite;
    -o-animation: moveclouds 20s linear infinite;
  }
  
  @-webkit-keyframes moveclouds {
    0% {
      margin-left: 1000px;
    }
    100% {
      margin-left: -1000px;
    }
  }
  @-moz-keyframes moveclouds {
    0% {
      margin-left: 1000px;
    }
    100% {
      margin-left: -1000px;
    }
  }
  @-o-keyframes moveclouds {
    0% {
      margin-left: 1000px;
    }
    100% {
      margin-left: -1000px;
    }
  }
   </style>`
}
// const loadLottieAnimation = () => {
//     const animationContainer = document.createElement('div');
//     animationContainer.id = 'animation-container';
//     document.body.appendChild(
//         animationContainer);
//
//     const animationData = require('../animations/404.json');
//
//
//     const animate = lottie.loadAnimation({
//         container: animationContainer,
//         animationData: animationData,
//         renderer: "svg",
//         loop: true,
//         autoplay: true
//     });
// };

let websiteList = [];

document.addEventListener('DOMContentLoaded', () => {
    const websiteMatch = document.querySelector('.host-text');
    const saveButton = document.querySelector('.save-button');
    const hostIcon = document.getElementById('hostname-icon');


    saveButton.addEventListener('click', () => {
        const hostname = websiteMatch.value;
        const normalizedHostname = normalizeHostname(hostname);
        const icon = getIconForHostname(normalizedHostname);
        const startTime = document.getElementById('from-input').value;
        const stopTime = document.getElementById('to-input').value;
        const fromInput = document.getElementById('from-input');
        const toInput = document.getElementById('to-input');

        websiteMatch.addEventListener('input', removeErrorMessage);
        fromInput.addEventListener('input', removeErrorMessage);
        toInput.addEventListener('input', removeErrorMessage);

        if (!hostname || !startTime || !stopTime) {
            displayErrorMessage("Please fill all the input fields!");
            return;
        }
        removeErrorMessage();


        function addToWebSiteList(websitelist, newObj) {
          const index = websitelist.findIndex(obj => obj.domain === newObj.domain);
          
          if (index !== -1) {
            // Object with similar domain found, remove it
            websitelist.splice(index, 1);
          } else {
            // Push the new object into websitelist only if no similar object found
            websitelist.push(newObj);
          }
        }

        const websiteObject = {
            domain: normalizedHostname,
            startTime: startTime,
            stopTime: stopTime
        };

          addToWebSiteList(websiteList, websiteObject);
          console.log('this is popup weblist-->', websiteList)

        

        chrome.runtime.sendMessage({
            action: 'startFunction',
            bimeObjects: websiteList
            }, (response) => {
             console.log('response i received from background --> ', response);
        })
       
        appendHostnameEntry(normalizedHostname, getIconForHostname(normalizedHostname));
        websiteMatch.value = '';
        document.getElementById('from-input').value = '';
        document.getElementById('to-input').value = '';

    

        chrome.runtime.sendMessage({action: "updateWebsiteList", websiteList}, (response) => {
            console.log(" update Response from background.js:", response);
        });

        saveWebsiteListToStorage();
    });

    function displayErrorMessage(message) {
        const errorMessageElement = document.createElement('div');
        errorMessageElement.classList.add('error-message');
        errorMessageElement.innerText = message;

        const bottomSection = document.querySelector('.bottom-section');
        bottomSection.appendChild(errorMessageElement);

        setTimeout(() => {
            errorMessageElement.remove();
        }, 2000);
        saveButton.classList.add('disabled-button');
        saveButton.disabled = true;
    }

    function removeErrorMessage() {
        const errorMessageElement = document.querySelector('.error-message');
        if (errorMessageElement) {
            errorMessageElement.remove();
        }

        saveButton.classList.remove('disabled-button');
        saveButton.disabled = false;
    }

    function saveWebsiteListToStorage() {
        localStorage.setItem('websites', JSON.stringify(websiteList));
    }

    function normalizeHostname(hostname) {
        const prefix = 'www.';
        const host = hostname.toLowerCase();
        if (host.startsWith(prefix)) {
            return host;
        }
        return prefix + host;
    }

    function getIconForHostname(hostname) {
        for (let i = 0; i < websiteData.length; i++) {
            if (websiteData[i].hostname === hostname) {
                return websiteData[i].icon;
            }
        }
        return null;
    }

    const storedWebsites = JSON.parse(localStorage.getItem('websites'));
    if (Array.isArray(storedWebsites)) {
        websiteList = storedWebsites;
        storedWebsites.forEach((website) => {
            appendHostnameEntry(website.domain, getIconForHostname(website.domain));
        });
    }

    const clockIcon = document.querySelector('.clock-icon');
    clockIcon.addEventListener('click', () => {
        chrome.tabs.create({url: 'extension-page.html'});
    });


    function appendHostnameEntry(hostname, icon) {
        const displayedHostnames = document.getElementById('displayed-hostnames');

        const entryContainer = document.createElement('div');
        entryContainer.classList.add('entry-container');

        const iconElement = document.createElement('img');
        iconElement.src = icon || 'icons/default-icon.png';
        iconElement.alt = hostname + ' icon';
        entryContainer.appendChild(iconElement);

        const hostnameElement = document.createElement('span');
        hostnameElement.innerText = hostname;
        entryContainer.appendChild(hostnameElement);

        const editIconElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        editIconElement.innerHTML = '<use xlink:href="icons/svg/icons.svg#edit-icon"></use>'
        editIconElement.alt = 'Edit';
        editIconElement.classList.add('edit-icon');
        editIconElement.addEventListener('click', () => {

        });
        entryContainer.appendChild(editIconElement);



        const deleteIconElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        deleteIconElement.innerHTML = '<use xlink:href="icons/svg/icons.svg#delete-icon"></use>'
        editIconElement.alt = 'Delete';
        deleteIconElement.classList.add('delete-icon');
        deleteIconElement.addEventListener('click', () => {


            const index = websiteList.findIndex((website) => website.domain === hostname);
            

            chrome.runtime.sendMessage({
                action: 'removebime',
                hostName: websiteList[index].domain
                }, (response) => {
                 console.log('deleting from bacground-blocklist', response);
            })

            if (index !== -1) {
                websiteList.splice(index, 1);
                saveWebsiteListToStorage();
            }
            entryContainer.remove();
        });
        entryContainer.appendChild(deleteIconElement);

        displayedHostnames.appendChild(entryContainer);
    }


});





  // chrome.tabs.onCreated.addListener(function (tab) {
    
  //     console.log('New tab created:', tab.url);
  //   });





  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    async function getMatchingTab() {
        const tabs = await chrome.tabs.query({
          url: [
            `*://${message.disdom.domain}/*`
          ],
        });
      
        tabs.forEach((tab) => {
          console.log( 'this is the first overriden tab ->>',tab.url); 
          // chrome.tabs.update({url:'../404.html'})// Print the URL of each matched tab
        });
      }
      
    if (message.action === "startdisplay") {
        getMatchingTab()
        chrome.tabs.query({ url: `*://${message.disdom.domain}/* `}, (tabs) => {
              if (tabs.some((tab) => tab.url.includes(message.disdom.domain))) {
                if (tabs.length === 0) {
                  alert(`The website you are trying to block is not open.`);
                  return;
                }
                const activeTab = tabs[0];
                const activeTabId = activeTab.id;
                console.log('first tab id from block',activeTabId)
                inject404Page(activeTabId)
                    // alert(`${urlToBlockFormatted} is currently blocked`);
                    // setBlocked(true);
        }})

        const inject404Page = (tabId) => {
          /*eslint-disable no-undef */
          chrome.scripting.executeScript(
            {
              target: { tabId: tabId },
              func: () => {
                document.body.innerHTML = generateHTML404();
                document.head.innerHTML = generateStyles();
              },
            },
            () => {
              if (chrome.runtime.lastError) {
                console.error("Script injection failed:", chrome.runtime.lastError);
              } else {
                console.log("Script injected successfully");
              }
            }
          );
          setBlocked(true);
    };

    const generateHTML404 =()=>{
      return(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Error Page</title>
          <link rel="stylesheet" href="styles.css">
      </head>
      <body>
          <div class="error-container">
              <h1>Oops! This website is BLOCKED by SENIORMAN</h1>
              <p>We apologize for the inconvenience, but it seems there was an error processing your request.</p>
              <p>Please try again later or contact THE EXTENSION BOYS for assistance.</p>
              <button class="back-btn">Go Back</button>
          </div>
      </body>
      </html>
      
         
      `)
    }
  
   const generateStyles = () => {
      return (`
      <style>
      
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #00000;
    }
    
    .error-container {
        text-align: center;
        background-color: #00000;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        padding: 30px;
        border-radius: 5px;
        max-width: 400px;
    }
    
    h1 {
        color: #f44336;
        font-size: 28px;
        margin-bottom: 10px;
    }
    
    p {
        font-size: 16px;
        line-height: 1.6;
        margin-bottom: 15px;
    }
    
    .back-btn {
        background-color: #4CAF50;
        color: #fff;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;
    }
    
    .back-btn:hover {
        background-color: #45a049;
    }
    
      </style>`
      )
  
    };

        sendResponse({success: true});   
        return true;
    
}});


 



    async function getMatchingTabs() {
        const tabs = await chrome.tabs.query({
          url: [
            "chrome-extension://ogdnckgcfdomnomannmjjcpnpfhfpfll/*"
          ],
        });
      
        tabs.forEach((tab) => {
          console.log( 'this is the overriden tab ->>',tab.url); // Print the URL of each matched tab
        });
      }



    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.action === "stopdisplay") {
            const theDomain = message.disdom.domain
            console.log('site to be unblocked:-->', message.disdom.domain);
            // chrome.tabs.update({url:theDomain})
            getMatchingTabs();
            sendResponse({ success: true });
            return true;
        }
    });
    

   
        


   

// switch (window.location.hostname) {
//     case
//     "www.youtube.com":
//         document.head.innerHTML = generateStyles();
//         document.body.innerHTML = generateHTML404("YOUTUBE");
//         break;
//     case
//     "www.facebook.com":
//         document.head.innerHTML = generateStyles();
//         document.body.innerHTML = generateHTML404("FACEBOOK");
//         break;
//     case
//     "www.netflix.com":
//         document.head.innerHTML = generateStyles();
//         document.body.innerHTML = generateHTML404("NETFLIX");
//         break;
//     case
//     "www.roblox.com":
//         document.head.innerHTML = generateStyles();
//         document.body.innerHTML = generateHTML404("ROBLOX");
//         break;
//     case
//     "discord.com":
//         document.head.innerHTML = generateStyles();
//         document.body.innerHTML = generateHTML404("DISCORD");
//         break;
//         break;
//     case
//     "www.spotify.com":
//         document.head.innerHTML = generateStyles();
//         document.body.innerHTML = generateHTML404("SPOTIFY");
//         break;
// }
// }

