// Menu Toggle

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const navLinks = Array.from(document.querySelectorAll('.nav-link'));

const landing = document.getElementById('landing');
const homeInner = document.querySelector('.home-inner-content')
const websitesInner = document.querySelector('.projects-inner-content');
const programmingInner = document.querySelector('.programming-inner-content');
const aboutInner = document.querySelector('.about-inner-content');
const contactInner = document.querySelector('.contact-inner-content');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');

    landing.classList.toggle('active');
    homeInner.classList.toggle('active');
    websitesInner.classList.toggle('active');
    programmingInner.classList.toggle('active');
    aboutInner.classList.toggle('active');
    contactInner.classList.toggle('active');


    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', () => {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');

            landing.classList.remove('active');
            homeInner.classList.remove('active');
            websitesInner.classList.remove('active');
            programmingInner.classList.remove('active');
            aboutInner.classList.remove('active');
            contactInner.classList.remove('active');
        })
    }
})
