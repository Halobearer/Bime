document.addEventListener('DOMContentLoaded', function () {
    const websiteMatch = document.querySelector('.host-input');

    const websiteData = [
        {hostname: "www.whatsapp.com", icon: "icons/whatsapp-icon.png"},
        {hostname: "www.facebook.com", icon: "icons/facebook-icon.png"},
        {hostname: "www.youtube.com", icon: "icons/youtube-icon.png"},
        {hostname: "www.google.com", icon: "icons/google-icon.png"},
        {hostname: "www.twitter.com", icon: "icons/twitter-icon.png"}
    ];

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

    function normalizeHostname(hostname) {
        const prefix = 'www.';
        if (hostname.startsWith(prefix)) {
            return hostname;
        }
        return prefix + hostname;
    }

    function displayIcon(icon) {
        const iconElement = document.getElementById('hostname-icon');

        if (icon) {
            iconElement.style.backgroundImage = `url(${chrome.runtime.getURL(icon)})`;
            iconElement.style.display = 'block';
        } else {
            iconElement.style.display = 'none';
        }
    }
});
