const menuBtn = document.querySelector('.mobile-menuBtn');
const menuNav = document.querySelector('.header .nav');

menuNav.classList.add('inactive');

function toggleClass2() {
    if (!menuNav.classList.contains('menuActive')) {
        menuBtn.onclick = function() {
            menuNav.classList.remove('menuActive');
            setTimeout(() => {
                menuNav.classList.add('inactive');
            },200);
            toggleClass1();
        }
    }
}

function toggleClass1() {
    menuBtn.onclick = function parte1() {
        menuNav.classList.remove('inactive'); 
        setTimeout(() => {
            menuNav.classList.add('menuActive');
        },200);
        toggleClass2();
    }
}
toggleClass1();

$(menuBtn).on('clickout',function(event){
    if(!menuNav.contains(event.target)) {
        menuNav.classList.remove('menuActive');
        setTimeout(() => {
            menuNav.classList.add('inactive');
        }, 200);
        toggleClass1();
    }
});
    