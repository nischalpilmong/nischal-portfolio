const hamburgerBtn = document.querySelector('.hamburger__btn');
const navbar = document.querySelector('.navbar');
const navbarMenu = document.querySelector('.header__nav');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
}




