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

//about container

ScrollReveal().reveal('.about__content .section__header', {
    ...scrollRevealOption,
});

ScrollReveal().reveal('.about__content .section__description', {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal('.about__content .about__btn', {
    ...scrollRevealOption,
    delay: 1000,
});



//services container

ScrollReveal().reveal('.service__card', {
    ...scrollRevealOption,
    interval: 300,
});

//portfolio container

ScrollReveal().reveal('.portfolio__card', {
    duration: 1000,
    interval: 500,
});

//downloadCV
document.getElementById('downloadCV').addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'assets/kena-cv.pdf';
    link.download = 'kena-cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
