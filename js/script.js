const menuBtn = document.querySelector('.mobile-menuBtn');
const headerContainer = document.querySelector('.header .container');
const menuNav = document.querySelector('.header .nav');

menuBtn.onclick = function() {
    menuNav.classList.toggle('menuActive');
}

$(menuBtn).on('clickout',function(event){
    if(!menuNav.contains(event.target)) {
        menuNav.classList.remove('menuActive');
    }
});
    