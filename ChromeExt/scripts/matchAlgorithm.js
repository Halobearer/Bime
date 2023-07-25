const websiteData = [
    {hostname: "www.whatsapp.com", icon: "icons/whatsapp-icon.png"},
    {hostname: "www.facebook.com", icon: "icons/facebook-icon.png"},
    {hostname: "www.youtube.com", icon: "icons/youtube-icon.png"},
    {hostname: "www.google.com", icon: "icons/google-icon.png"},
    {hostname: "www.twitter.com", icon: "icons/twitter-icon.png"},
    {hostname: "www.ebay.com", icon: "icons/ebay-icon.png"},
    {hostname: "www.aliexpress.com", icon: "icons/aliexpress-icon.png"},
    {hostname: "www.instagram.com", icon: "icons/instagram-icon.png"},
    {hostname: "www.baidu.com", icon: "icons/baidu-icon.png"},
    {hostname: "www.wikipedia.org", icon: "icons/wikipedia-icon.png"},
    {hostname: "www.yandex.ru", icon: "icons/yandex-icon.png"},
    {hostname: "www.yahoo.com", icon: "icons/yahoo-icon.png"},
    {hostname: "www.xvideos.com", icon: "icons/xvideos-icon.png"},
    {hostname: "www.pornhub.com", icon: "icons/pornhub-icon.png"},
    {hostname: "www.xnxx.com", icon: "icons/xnxx-icon.png"},
    {hostname: "www.tiktok.com", icon: "icons/tiktok-icon.png"},
    {hostname: "www.amazon.com", icon: "icons/amazon-icon.png"},
    {hostname: "www.yahoo.co.jp", icon: "icons/yahoo-co-icon.png"},
    {hostname: "www.live.com", icon: "icons/outlook-icon.png"},
    {hostname: "www.docomo.ne.jp", icon: "icons/docomo-icon.ico"},
    {hostname: "www.linkedin.com", icon: "icons/linkedin-icon.png"},
    {hostname: "www.openai.com", icon: "icons/openai-icon.png"},
    {hostname: "www.reddit.com", icon: "icons/reddit-icon.png"},
    {hostname: "www.netflix.com", icon: "icons/netflix-icon.png"},
    {hostname: "www.dzen.ru", icon: "icons/dzen-icon.png"},
    {hostname: "www.office.com", icon: "icons/office-icon.png"},
    {hostname: "www.vk.com", icon: "icons/vk-icon.png"},
    {hostname: "www.weather.com", icon: "icons/weather-icon.png"},
    {hostname: "www.bing.com", icon: "icons/bing-icon.png"},
    {hostname: "www.xhamster.com", icon: "icons/xhamster-icon.png"},
    {hostname: "www.naver.com", icon: "icons/naver-icon.png"},
    {hostname: "www.turbopages.org", icon: ""},
    {hostname: "www.semicolon.africa", icon: "icons/semicolon-icon.png"},
    {hostname: "www.chat.openai.com", icon: "icons/chatopenai-icon.png"},
    {hostname: "www.samsung.com", icon: ""},
    {hostname: "www.discord.com", icon: ""},
    {hostname: "www.max.com", icon: ""},
    {hostname: "www.twitch.com", icon: ""},
    {hostname: "www.pinterest.com", icon: "icons/pinterest-icon.png"},
    {hostname: "www.bilibili.com", icon: ""},
    {hostname: "www.microsoft.com", icon: ""},
    {hostname: "www.zoom.us", icon: ""},
    {hostname: "www.duckduckgo.com", icon: ""},
    {hostname: "www.msn.com", icon: ""},
    {hostname: "www.stripchat.com", icon: ""},
    {hostname: "www.fandom.com", icon: ""},
    {hostname: "www.quora.com", icon: ""},
    {hostname: "www.cnn.com", icon: ""},
    {hostname: "www.taboola.com", icon: ""},
    {hostname: "www.udemy.com", icon: ""},
    {hostname: "www.coursera.org", icon: ""},
    {hostname: "www.khanacademy.org", icon: ""},
    {hostname: "www.duolingo.com", icon: ""},
    {hostname: "www.nike.com", icon: ""},
    {hostname: "www.nordstrom.com", icon: ""},
    {hostname: "www.walmart.com", icon: ""},
    {hostname: "www.target.com", icon: ""},
    {hostname: "www.apple.com", icon: ""},
    {hostname: "www.patreon.com", icon: ""},
    {hostname: "www.imgur.com", icon: ""},
    {hostname: "www.nytimes.com", icon: ""},
    {hostname: "www.foxnews.com"},
    {hostname: "www.espn.com", icon: ""},
    {hostname: "www.bbc.com", icon: ""},
    {hostname: "www.cnbc.com", icon: ""},
    {hostname: "www.dominos.com", icon: ""},
    {hostname: "www.fmovies.to", icon: ""},
    {hostname: "www.hulu.com", icon: ""},
    {hostname: "www.disneyplus.com", icon: ""},
    {hostname: "www.justwatch.com", icon: ""}

];
document.addEventListener('DOMContentLoaded', function () {
    const websiteMatch = document.querySelector('.host-text');

    websiteMatch.addEventListener('input', function () {
        const hostname = websiteMatch.value;
        const normalizedHostname = normalizeHostname(hostname);

        for (let i = 0; i < websiteData.length; i++) {
            const websiteHostname = websiteData[i].hostname;
            if (websiteHostname === normalizedHostname) {
                const icon = websiteData[i].icon;
                displayIcon(icon);
                return;
            }
        }

        displayIcon(null);
    });

    function displayIcon(icon) {
        const iconElement = document.getElementById('hostname-icon');
        const defaultIcon = "icons/default-icon.png";

        if (icon) {
            iconElement.style.backgroundImage = `url(${chrome.runtime.getURL(icon)})`;
            iconElement.style.display = 'block';
        } else {
            iconElement.style.backgroundImage = `url(${defaultIcon})`;
        }
    }
});

function normalizeHostname(hostname) {
    const prefix = 'www.';
    if (hostname.startsWith(prefix)) {
        return hostname;
    }
    return prefix + hostname.toLowerCase();
}

// Function to save the website data to local storage
function saveWebsiteData(data) {
    const websites = getWebsiteData();
    websites.push(data);
    localStorage.setItem('websites', JSON.stringify(websites));
}

// Function to retrieve website data from local storage
function getWebsiteData() {
    const websitesJSON = localStorage.getItem('websites');
    return websitesJSON ? JSON.parse(websitesJSON) : [];
}