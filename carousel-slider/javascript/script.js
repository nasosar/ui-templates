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