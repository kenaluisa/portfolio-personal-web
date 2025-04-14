const navLinks = document.getElementById('nav-links');
const menuBtn = document.getElementById('menu-btn');
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', (e) => {
    navLinks.classList.toggle('open');

    const isOpen = navLinks.classList.contains('open');
    menuBtnIcon.setAttribute(
        'class',
        isOpen ? 'ri-close-line' : 'ri-menu-line');
});

navLinks.addEventListener('click', (e) => {
    navLinks.classList.remove('open');
    menuBtnIcon.setAttribute('class', 'ri-menu-line');
});

const scrollRevealOption = {
    distance: '50px',
    duration: 1000,
    origin: 'bottom',
};


//header container
ScrollReveal().reveal('.header__content h1', {
    ...scrollRevealOption,
});
ScrollReveal().reveal('.header__content h2', {
    ...scrollRevealOption,
});
ScrollReveal().reveal('.header__content .section__description', {
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal('.header__content .header__btn', {
    ...scrollRevealOption,
    delay:1000,
});


