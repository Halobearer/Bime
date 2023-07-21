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


const loadLottieAnimation = () => {
    const animationContainer = document.createElement('div');
    animationContainer.id = 'animation-container';
    document.body.appendChild(animationContainer);

    const animationData = require('../animations/404.json');


    const animate = lottie.loadAnimation({
        container: animationContainer,
        animationData: animationData,
        renderer: "svg",
        loop: true,
        autoplay: true
    });
};

document.addEventListener('DOMContentLoaded', function () {
    const websiteMatch = document.querySelector('.host-text');
    const saveButton = document.querySelector('.save-button');
    const inputContainer = document.querySelector('.popup');
    const curvedIcon = document.getElementById('curved-icon');
    const curvedText = document.getElementById('curved-text');
    const editDeleteIcons = document.querySelector('.edit-delete-icons');

    const plusIcon = document.querySelector('.plus-icon')
    const curvedBox = document.querySelector('.curved-box');

    plusIcon.style.display = 'none';

    saveButton.addEventListener('click', function () {
        const selectors = document.querySelectorAll('.popup');
        console.log('selectors->', selectors);

        selectors.forEach((selector) => {
            const hostInput = selector.querySelector('input[type="text"]');
            const FromInput = selector.querySelector('.FromInput');
            const ToInput = selector.querySelector('.ToInput');

            const host = hostInput ? hostInput.value : '';
            const From = FromInput ? FromInput.value : '';
            const To = ToInput ? ToInput.value : '';

            console.log(`Site: ${host}`);
            console.log(`From: ${From}`);
            console.log(`To: ${To}`);
        })

        const hostname = websiteMatch.value;
        const normalizedHostname = normalizeHostname(hostname);
        const icon = getIconForHostname(normalizedHostname);

        if (icon) {
            curvedIcon.style.backgroundImage = `url(${chrome.runtime.getURL(icon)})`;
        }

        curvedText.textContent = normalizedHostname;
        inputContainer.style.display = 'none';
        curvedBox.style.display = 'flex';
        editDeleteIcons.style.display = 'flex';
        plusIcon.style.display = 'block';
    });

    function normalizeHostname(hostname) {
        const prefix = 'www.';
        if (hostname.startsWith(prefix)) {
            return hostname;
        }
        return prefix + hostname;
    }

    function getIconForHostname(hostname) {
        for (let i = 0; i < websiteData.length; i++) {
            if (websiteData[i].hostname === hostname) {
                return websiteData[i].icon;
            }
        }
        return null;
    }

});

document.addEventListener('DOMContentLoaded', function () {
    const plusIcon = document.querySelector('.plus-icon');
    const blockList = document.querySelector('.block-list');

    let isSaveClicked = false;

    plusIcon.addEventListener('click', function () {
        addInputSection();
    });

    function addInputSection() {
        if (!isSaveClicked) {
            return;
        }
    }
})

document.addEventListener('DOMContentLoaded', function () {
    const clockIcon = document.querySelector('.clock-icon');

    clockIcon.addEventListener('click', function () {
        chrome.tabs.create({url: 'extension-page.html'});
    });
});

