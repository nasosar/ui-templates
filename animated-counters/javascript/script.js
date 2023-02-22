let counters = document.querySelectorAll('.counter');
let countInterval = 5000;
let counterBox = document.querySelector('.listbox')


function isInViewport(counterBox) {
    // Get the bounding client rectangle position in the viewport
    let viewCheck = counterBox.getBoundingClientRect();
    
    // Checking part. Here the code checks if it's *fully* visible
    // Edit this part if you just want a partial visibility
    if (
        viewCheck.top >= 0 &&
        viewCheck.left >= 0 &&
        viewCheck.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        viewCheck.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
        return true;
    } else {
        return false;
    }
}

window.addEventListener('scroll', function () {
    if (isInViewport(counterBox)) {
        counters.forEach(counter => {
            
            let startValue = 0;
            let endValue = parseInt(counter.getAttribute('data-val'));
            let duration = Math.floor(countInterval / endValue);

            switch(true) {
                case (counter.innerHTML == endValue):
                break;
                case (counter.innerHTML == 0):                    
                    let triggerCount = setInterval (function () {
                        startValue += 1;
                        counter.textContent = startValue;
                        if (startValue == endValue) {
                            clearInterval(triggerCount);
                        }
                    }, duration);    
                break;                 
            }
        
        });
    } 
}, false);

