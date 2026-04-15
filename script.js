// ===== HAMBURGER MENU =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    navLink.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ===== PORTFOLIO FILTER =====
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filter = button.getAttribute('data-filter');
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// ===== SCROLL REVEAL =====
if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal({
        reset: false,
        distance: '30px',
        duration: 600,
        delay: 100,
        easing: 'ease-in-out'
    });
    ScrollReveal().reveal('.hero-content', { origin: 'bottom' });
    ScrollReveal().reveal('.about-content', { origin: 'left' });
    ScrollReveal().reveal('.skill-card', { interval: 100 });
    ScrollReveal().reveal('.portfolio-item', { interval: 100 });
    ScrollReveal().reveal('.timeline-content', { origin: 'left' });
}

// ===== SMOOTH SCROLL NAVIGATION =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== FORM SUBMISSION =====
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// ===== TYPEWRITER EFFECT =====
document.addEventListener("DOMContentLoaded", function() {
    if (document.querySelector('.auto-type')) {
        new Typed('.auto-type', {
            strings: ['Photographer', 'Cinematographer', 'Video Editor', 'Designer'],
            typeSpeed: 80,
            backSpeed: 50,
            loop: true,
            backDelay: 1500,
            showCursor: true,
            cursorChar: '|'
        });
    }
});

// ===== HERO PARALLAX EFFECT =====
function parallax(e) {
    document.querySelectorAll('.hero-content > *').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}
