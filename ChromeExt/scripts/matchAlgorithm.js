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
    {hostname: "www.openai.com", icon: ""},
    {hostname: "www.reddit.com", icon: ""},
    {hostname: "www.netflix.com", icon: ""},
    {hostname: "www.dzen.ru", icon: ""},
    {hostname: "www.office.com", icon: ""},
    {hostname: "www.vk.com", icon: ""},
    {hostname: "www.weather.com", icon: ""},
    {hostname: "www.bing.com", icon: ""},
    {hostname: "www.xhamster.com", icon: ""},
    {hostname: "www.naver.com", icon: ""},
    {hostname: "www.turbopages.com", icon: ""},

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
    return prefix + hostname;

}



