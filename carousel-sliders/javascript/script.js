//FIRST CAROUSEL: AUTO SLIDE

const slideCarousel1 = document.getElementById("slide1");
const img = document.querySelectorAll("#slide1 img");

let idx = 0;

function carousel1() {
    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    }

    slideCarousel1.style.transform = ` translateX(${- idx * 400}px) `;
}

setInterval(carousel1, 1800);

//SECOND CAROUSEL: CLICK TO SLIDE

const controls = document.querySelectorAll('.control');

let currentItem = 0;
const items = document.querySelectorAll('.img-crousel2');
const maxItems = items.length;

controls.forEach(control => {
    control.addEventListener('click', () => {

        const isLeft = control.classList.contains('arrow-left');

        if (isLeft) {
            currentItem -= 1;
        } else {
            currentItem += 1;
        }

        if (currentItem >= maxItems) {
            currentItem = 0;
        }

        if (currentItem < 0) {
            currentItem = maxItems -1;
        }

        items.forEach(item =>
            item.classList.remove('current-img'));

        items[currentItem].scrollIntoView({inline: "center", behavior: "smooth", block: "nearest"});

        items[currentItem].classList.add('current-img');

        console.log ('control', isLeft, currentItem);
    });
});


//THIRD CAROUSEL: AUTO AND CLICK SLIDE 
const carouselBox = document.querySelector('.carousel3'); // this will allow to make a more dinamic carousel, getting the width if the carousel has relative units
const slideCarousel3 = document.getElementById("slide3");
const img3 = document.querySelectorAll("#slide3 img");
const buttons = document.querySelectorAll('.btn3');

let idy = 0; // counter for automatic carousel
let idyClickLeft = 0; // counter for left click
let idyClickRight = 0; // conunter for right click
let idyInterval = 0; // counter for restart intervalTrigger
let myinterval = null; // will become the function to setIntervall

function autoCarousel3() { // Automatic carousel run: this function works exaclty like the on in the first example
    idy++;

    if (idy > img3.length - 1) {
        idy = 0;
    }

    slideCarousel3.style.transform = ` translateX(${- idy * carouselBox.offsetWidth}px) `;
}


function intervalTriggerl() { // Triggers the automatic carousel slider, will do it on load and when the click function calls it
    idyInterval = 0;
    myinterval = setInterval(autoCarousel3, 2000);
}


buttons.forEach (button => {
    button.addEventListener( 'click', () => {

        idy = Math.abs(idy); // makes the counter idy value always postive
        const leftBtn = button.classList.contains('btnleft'); // identifies if left button was clicked 

        clearInterval(myinterval); // stops auto slide so it doesn't overlap with the intentional scrolling of pictures
        idyInterval = ++idyInterval; // increments interval counter so it can't be triggered more than once later
        
        if (leftBtn) {
            idyClickLeft = idy-- -2;
        } else {
            idyClickRight = idy++ +2;
        }
        
        clickCarousel(); // triggers click function to define if next or previouse picture will be scrolled

        if (idyInterval <= 1) { // this variable limit prevents the intervaled to be triggered more than once & and mess up the rythm of the slide
            setTimeout(intervalTriggerl, 5000);
        }

    })
})


function clickCarousel() {
   
    if (idy > img3.length - 1) { // if you get to the last picture, it will reset the counter so it goes back to first picture
        idy = 0;
    } else if (idy < 0) { // if you get to the first picture, it will max the counter so you go to the last picture
        idy = img3.length - 1;
    }


    if (leftBtn = true) { // if left button is clicked, next image
        slideCarousel3.style.transform = ` translateX(${- idy * carouselBox.offsetWidth}px) `;
        
    } else { // if left button is clicked, previous image
            slideCarousel3.style.transform = ` translateX(${idy * carouselBox.offsetWidth}px) `;
    
    }  
}