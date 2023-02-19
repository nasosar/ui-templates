let controls = document.querySelector('.titlelist');
let arrowDown = document.querySelector('#downarrow');
let arrowUp = document.querySelector('#uparrow');
const item1 = document.querySelector('#item1');

// controls.forEach (control => {
//     control.addEventListener( 'click', () => {
//         console.log('i work')
//         toggleitems.classList.toggle('.activeitem');
//     })
// })

    

function classToggle() {
    controls.classList.toggle("titlelist-active");
    item1.classList.toggle("activeitem");
    arrowDown.classList.toggle("ocultitem");
    arrowUp.classList.toggle("activeitem");
}