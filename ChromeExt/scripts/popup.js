document.addEventListener('DOMContentLoaded', function () {
    const clockIcon = document.querySelector('.clock-icon');

    clockIcon.addEventListener('click', function () {
        chrome.tabs.create({url: 'extension-page.html'});
    });
});