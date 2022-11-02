const menuBtn = document.querySelector('.mobile-menuBtn');
const headerContainer = document.querySelector('.header .container');
const menuNav = document.querySelector('.header .nav');

menuNav.classList.add('inactive');

function parte2() {
    console.log('olá');
    if (!menuNav.classList.contains('menuActive')) {
        menuBtn.onclick = function() {
            menuNav.classList.remove('menuActive');
            setTimeout(() => {
                menuNav.classList.add('inactive');
            },200);
            parte1();
        }
    }
}

function parte1() {
    menuBtn.onclick = function parte1() {
        menuNav.classList.remove('inactive');
        
        setTimeout(() => {
            menuNav.classList.add('menuActive');
        },200);
        parte2();
    }
}
parte1();

$(menuBtn).on('clickout',function(event){
    if(!menuNav.contains(event.target)) {
        menuNav.classList.remove('menuActive');
        setTimeout(() => {
            menuNav.classList.add('inactive');
        }, 200);
        parte1();
    }
});
    