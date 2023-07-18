document.addEventListener('DOMContentLoaded', function () {
    const websiteMatch = document.querySelector('.host-input');

    const websiteData = [
        {hostname: "www.whatsapp.com", icon: "whatsapp-icon.png"},
        {hostname: "www.facebook.com", icon: "facebook-icon.png"},
        {hostname: "www.youtube.com", icon: "youtube-icon.png"},
        {hostname: "www.google.com", icon: "google-icon.png"},
        {hostname: "www.twitter.com", icon: "twitter-icon.png"}
    ];

    websiteMatch.addEventListener('input', function () {
        const hostname = websiteMatch.value;

        for (let i = 0; i < websiteData.length; i++) {
            if (websiteData[i].hostname === hostname) {
                const icon = websiteData[i].icon;
                displayIcon(icon);
                break;
            } else {
                displayIcon(null);
            }
        }
    });

    function displayIcon(icon) {
        const iconElement = document.getElementById('hostname-icon');

        if (icon) {
            iconElement.style.backgroundImage = `url(${icon})`;
            iconElement.style.display = 'block';
        } else {
            iconElement.style.display = 'none';
        }
    }
});
