// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) { 
      e.preventDefault(); 
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start' 
      });
    }
  });
});

// hamburger
const hamburger = document.querySelector('.hamburger');
const sideNav = document.querySelector('.side-nav');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    sideNav.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Klik overlay untuk menutup
overlay.addEventListener('click', () => {
    hamburger.classList.remove('active');
    sideNav.classList.remove('active');
    overlay.classList.remove('active');
});

// Animasi fade-in saat scroll
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Amati semua elemen dengan class 'card'
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        observer.observe(card);
    });

});

document.addEventListener('DOMContentLoaded', function() {
    const showMoreBtn = document.getElementById('show-more-btn');
    const hiddenCards = document.querySelectorAll('.activity-card.hidden');
    let isExpanded = false;
    showMoreBtn.addEventListener('click', function() {
        hiddenCards.forEach(card => {
            card.classList.toggle('hidden');
        });
        isExpanded = !isExpanded;
        showMoreBtn.textContent = isExpanded ? 'Show Less' : 'Show More';
    });
});