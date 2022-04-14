const hamburgerBtn = document.querySelector('.hamburger__btn');
const navbar = document.querySelector('.navbar');


hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
});

window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
}