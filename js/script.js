const mobileToggle = document.querySelector('#menu-toggle');
const navToggle = document.querySelector('#nav-toggle');


mobileToggle.onclick = function(){
    mobileToggle.classList.toggle('header__menu_active');
    navToggle.classList.toggle('mobile-nav_active');
}