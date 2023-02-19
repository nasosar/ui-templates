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

const slideCarousel3 = document.getElementById("slide3");
const img3 = document.querySelectorAll("#slide3 img");
const buttons = document.querySelectorAll('.btn3');

let idy = 0;
let idyClickLeft = 0;
let idyClickRight = 0;
let myinterval = null;
let idyInterval = 0;

function carousel3() { // Automatic carousel run: this function works exaclty like the on in the first example
    idy++;

    if (idy > img3.length - 1) {
        idy = 0;
    }

    slideCarousel3.style.transform = ` translateX(${- idy * 400}px) `;
}

function intervalTriggerl() {
    idyInterval = 0;
    myinterval = setInterval(carousel3, 2000);
    console.log('idyinterval is ' + idyInterval + ', interval start');
}

intervalTriggerl();

function clickCarousel() {
   //console.log("img lenght " +img3.length + ', idy = ' +idy + ', idyLeft = ' +idyClickLeft + ', idyRight = ' +idyClickRight);
    if (idy > img3.length - 1) {
        idy = 0;
    }

    if (idy < 0) {
        idy = img3.length - 1;
    }

    if (leftBtn = true) { // left direction works okay
        slideCarousel3.style.transform = ` translateX(${- idy * 400}px) `;
        
    } else { /*if right is true */     
            slideCarousel3.style.transform = ` translateX(${idy * 400}px) `;
    
    }

  
}


buttons.forEach (button => {
    button.addEventListener( 'click', () => {
        idy = Math.abs(idy);

        const leftBtn = button.classList.contains('btnleft');

        clearInterval(myinterval);
        idyInterval = ++idyInterval;
        
        if (leftBtn) {
            idyClickLeft = idy-- -2;
        } else {
            idyClickRight = idy++ +2;
        }
        
        clickCarousel();

        if (idyInterval <= 1) { // this variable limit prevents the intervaled to be triggered more than once & and mess up the rythm of the slide
            setTimeout(intervalTriggerl, 5000);
        }
    })
})

