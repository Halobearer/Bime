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
		<p class="to">to</p>`

        const selectorInput = document.createElement('div');
        selectorInput.classList.add('selector-input');
        selectorInput.innerHTML = `
        <input type="text" placeholder="Select site to allow" autocomplete="off" style="width: 148px;">
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

document.addEventListener('DOMContentLoaded', function () {
    const activateBimeButton = document.querySelector('.Start');

    activateBimeButton.addEventListener('click', function () {
        activateBime();
    });




    function activateBime() {
        const selectors = document.querySelectorAll('.selector');

        selectors.forEach((selector) => {
            const siteInput = selector.querySelector('input[type="text"]');
            const fromInput = selector.querySelector('input[type="time"]');
            const toInput = selector.querySelector('.To');

            

            const site = siteInput ? siteInput.value : '';
            const fromTime = fromInput ? fromInput.value : '';
            const toTime = toInput ? toInput.value : '';
           
          

            console.log(`Site: ${site}`);
            console.log(`From: ${fromTime}`);
            console.log(`To: ${toTime}`);
           

           
         

            const timer =(startTime, endTime)=> {

                const timeDiff = endTime - startTime;
              
                let remainingTime = Math.floor(timeDiff / 1000);
                console.log(`Countdown: ${remainingTime} seconds`);
              
                const interval = setInterval(() => {
                  remainingTime--;
              
                  if (remainingTime <= 0) {
                    clearInterval(interval);
                    console.log("Countdown completed!");
                    return;
                  }
                  console.log(`Countdown: ${remainingTime} seconds`);
            
                }, 1000);
              }
               


            const timeInputstart = fromTime;
            const timeinputstop = toTime;
            
          
            const startTime = new Date(); 
            const [hours, minutes] = timeInputstart.split(":");
            startTime.setHours(hours);
            startTime.setMinutes(minutes);
          
          
            const endTime = new Date(); 
            const [endhours, endminutes] = timeinputstop.split(":");
            endTime.setHours(endhours)
            endTime.setMinutes(endminutes)
           
        
            
        

        const checker =  setInterval(()=>{
            const currentTime = new Date();
            if(currentTime.getHours() === startTime.getHours() && currentTime.getMinutes() === startTime.getMinutes()){
                clearInterval(checker);
                console.log('i have started countdown....');
                   timer(startTime, endTime)
              } 
              console.log('im checking ....');   
         },1000)


           
    });
    }

});
