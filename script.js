window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Portfolio filter
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        portfolioItems.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Scroll to top button
const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

// Contact form validation
const contactForm = document.querySelector('.contact-form form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = contactForm.querySelector('input[name="name"]');
    const email = contactForm.querySelector('input[name="email"]');
    const message = contactForm.querySelector('textarea[name="message"]');

    if (name.value && email.value && message.value) {
        alert('Message sent successfully!');
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Scroll Reveal
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

sr.reveal('.hero-text', { delay: 200, origin: 'top' });
sr.reveal('.about-img, .contact-info', { origin: 'left' });
sr.reveal('.about-text, .contact-form', { origin: 'right' });
sr.reveal('.section-title', { delay: 100, origin: 'top' });
sr.reveal('.skills-grid, .education-grid, .projects-grid, .videos-grid', { delay: 200, origin: 'bottom', interval: 100 });
sr.reveal('.timeline-item', { origin: 'bottom', interval: 200 });
sr.reveal('.portfolio-filter', { delay: 200, origin: 'top' });
sr.reveal('.portfolio-item', { delay: 200, origin: 'bottom', interval: 100 });
sr.reveal('footer', { delay: 200, origin: 'bottom' });

// Lightbox
const portfolioGrid = document.querySelector('.portfolio-grid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.querySelector('.close-lightbox');

if (portfolioGrid) {
    portfolioGrid.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            lightbox.style.display = 'block';
            lightboxImg.src = e.target.src;
        }
    });
}

if(closeLightbox) {
    closeLightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
}

if(lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
}


// Mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks_items = navLinks.querySelectorAll('a');
    navLinks_items.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}