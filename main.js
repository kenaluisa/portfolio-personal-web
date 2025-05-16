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


//button contact 
document.addEventListener('DOMContentLoaded', function() {
    const contactButtons = document.querySelectorAll('[href="#contact"]');
    const footer = document.getElementById('footer');

    contactButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            if (footer) {
                const targetPosition = footer.offsetTop;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 1500; // Duração em milissegundos
                let startTime = null;

                function scrollStep(timestamp) {
                    if (!startTime) startTime = timestamp;
                    const progress = timestamp - startTime;
                    const scrollPercentage = Math.min(progress / duration, 1); // Garante que não ultrapasse 1
                    window.scrollTo(0, startPosition + distance * scrollPercentage);

                    if (scrollPercentage < 1) {
                        window.requestAnimationFrame(scrollStep);
                    }
                }

                window.requestAnimationFrame(scrollStep);
            }
        });
    });
});

//cambiar color de fondo

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const nav = document.querySelector('nav');
    const navBar = document.querySelector('.nav__bar');
    const navLogo = document.querySelector('.nav__logo');
    const navLinks = document.querySelectorAll('.nav__links a');
    const sectionHeaders = document.querySelectorAll('.section__header');
    const sectionDescriptions = document.querySelectorAll('.section__description');
    const serviceCards = document.querySelectorAll('.service__card');
    const portfolioCards = document.querySelectorAll('.portfolio__card');
    const portfolioBanner = document.querySelector('.portfolio__banner');
    const portfolioBannerCards = document.querySelectorAll('.portfolio__banner__card');
    const contactLogo = document.querySelector('.contact__container .logo');
    const contactSocialsLinks = document.querySelectorAll('.contact__socials a');
    const footer = document.querySelector('.footer');
    const buttons = document.querySelectorAll('.btn');
    const logoWhite = document.querySelector('.logo'); // Seu logo branco

    // Defina as cores do tema escuro
    const darkThemeColors = {
        bodyBg: '#333',
        navBg: '#444',
        text: '#f4f4f4',
        linkHover: '#FFA500',
        btnBg: 'linear-gradient(to bottom right, #581845, #2C3E50)', // Inverte o gradiente
        logoBg: 'linear-gradient(to bottom right,  #581845, #2C3E50)', // Inverte o gradiente
        cardBg: '#444',
        contactSocialBg: 'rgba(255, 255, 255, 0.1)',
        contactSocialHoverBg: '#333',
        contactSocialHoverColor: '#FFA500',
    };

    // Função para aplicar o tema escuro
    function enableDarkMode() {
        body.style.backgroundImage = `linear-gradient(to bottom right, #556270, #1A1A1A)`; // Adapte o gradiente escuro
        //nav.style.backgroundImage = `linear-gradient(to bottom right, #556270, #1A1A1A)`; // Adapte o gradiente escuro
        
        if (navLogo) navLogo.style.backgroundImage = darkThemeColors.logoBg;
        navLinks.forEach(link => {
            link.style.color = darkThemeColors.text;
        });
        sectionHeaders.forEach(header => header.style.color = darkThemeColors.text);
        sectionDescriptions.forEach(desc => desc.style.color = darkThemeColors.text);
        serviceCards.forEach(card => card.style.backgroundImage = darkThemeColors.btnBg);
        portfolioCards.forEach(card => card.style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.5)');
        if (portfolioBanner) portfolioBanner.style.backgroundImage = darkThemeColors.btnBg;
        portfolioBannerCards.forEach(card => card.style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.5)');
        if (contactLogo) contactLogo.style.backgroundImage = darkThemeColors.logoBg;
        contactSocialsLinks.forEach(link => {
            link.style.backgroundColor = darkThemeColors.contactSocialBg;
            link.style.color = darkThemeColors.text;
        });
        if (footer) footer.style.backgroundColor = '#222';
        buttons.forEach(button => button.style.backgroundImage = darkThemeColors.btnBg);
        if (logoWhite) logoWhite.style.backgroundImage = darkThemeColors.logoBg;

        localStorage.setItem('theme', 'dark');
        if (themeToggle) {
            themeToggle.innerHTML = '<i class="ri-sun-line"></i>'; // Mostrar ícone de sol para voltar ao claro
        }
    }

    // Função para aplicar o tema claro
    function enableLightMode() {
        body.style.backgroundImage = `var(--gradient-color2)`;
        //nav.style.backgroundImage = `var(--gradient-color2)`;
        if (navLogo) navLogo.style.backgroundImage = getComputedStyle(document.documentElement).getPropertyValue('--gradient-color1');
        navLinks.forEach(link => {
            link.style.color = getComputedStyle(document.documentElement).getPropertyValue('--white');
        });
        sectionHeaders.forEach(header => header.style.color = getComputedStyle(document.documentElement).getPropertyValue('--white'));
        sectionDescriptions.forEach(desc => desc.style.color = getComputedStyle(document.documentElement).getPropertyValue('--white'));
        serviceCards.forEach(card => card.style.backgroundImage = getComputedStyle(document.documentElement).getPropertyValue('--gradient-color1'));
        portfolioCards.forEach(card => card.style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.2)');
        if (portfolioBanner) portfolioBanner.style.backgroundImage = getComputedStyle(document.documentElement).getPropertyValue('--gradient-color1');
        portfolioBannerCards.forEach(card => card.style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.2)');
        if (contactLogo) contactLogo.style.backgroundImage = getComputedStyle(document.documentElement).getPropertyValue('--gradient-color1');
        contactSocialsLinks.forEach(link => {
            link.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            link.style.color = getComputedStyle(document.documentElement).getPropertyValue('--white');
        });
        if (footer) footer.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
        buttons.forEach(button => button.style.backgroundImage = getComputedStyle(document.documentElement).getPropertyValue('--gradient-color1'));
        if (logoWhite) logoWhite.style.backgroundImage = getComputedStyle(document.documentElement).getPropertyValue('--gradient-color1');

        localStorage.setItem('theme', 'light');
        if (themeToggle) {
            themeToggle.innerHTML = '<i class="ri-moon-line"></i>'; // Mostrar ícone de lua para o tema escuro
        }
    }

    // Verifica se há um tema salvo no localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        enableDarkMode();
    } else {
        enableLightMode(); // Define o tema claro como padrão
    }

    // Adiciona um ouvinte de evento ao botão de alternância
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            if (localStorage.getItem('theme') === 'light') {
                enableDarkMode();
            } else {
                enableLightMode();
            }
        });
    }
});