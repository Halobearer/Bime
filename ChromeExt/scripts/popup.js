document.addEventListener('DOMContentLoaded', function () {
    const plusIcon = document.querySelector('.plus-icon');
    const blockList = document.querySelector('.block-list');

    plusIcon.addEventListener('click', function () {
        addInputSection();
    });

    function addInputSection() {
        const selector = document.createElement('div');
        selector.classList.add('selector');

        const selectorText = document.createElement('div');
        selectorText.classList.add('selector-text');
        selectorText.innerHTML = `
        <p class="select-site">select site</p>
		<p class="from">from</p>
		<p class="to">to</p>`;

        const selectorInput = document.createElement('div');
        selectorInput.classList.add('selector-input');
        selectorInput.innerHTML = `
        <input type="text" placeholder="Select site to allow" autocomplete="off">
		<input type="time" autocomplete="off">
		<input type="time" autocomplete="off">`;


        selector.appendChild(selectorText);
        selector.appendChild(selectorInput);
        blockList.appendChild(selector);
    }
})

document.addEventListener('DOMContentLoaded', function () {
    const clockIcon = document.querySelector('.clock-icon');

    clockIcon.addEventListener('click', function () {
        chrome.tabs.create({url: 'extension-page.html'});
    });
});