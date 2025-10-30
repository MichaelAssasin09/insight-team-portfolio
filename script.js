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


// See more for vision mission
document.querySelector('.see-more-btn').addEventListener('click', function() {
    const hiddenMission = document.querySelector('.hidden-mission');
    hiddenMission.style.display = hiddenMission.style.display === 'block' ? 'none' : 'block';
    window.scrollTo({
        top: document.querySelector('#vision-mission').offsetTop,
        behavior: 'smooth'
    });
});

// Slider for members
let currentIndex = 0;
const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.member-card');
const totalCards = cards.length;
const cardWidth = cards[0].offsetWidth + 16; // Including margin

document.querySelector('.next').addEventListener('click', function() {
    if (currentIndex < totalCards) {
        currentIndex++;
        slider.style.transform = `translateX(-${currentIndex * cardWidth * 1.26}px)`;
    }
});

document.querySelector('.prev').addEventListener('click', function() {
    if (currentIndex > 0) {
        currentIndex--;
        slider.style.transform = `translateX(-${currentIndex * cardWidth * 1.26}px)`;
    }
});

// Show more for affiliated
document.querySelector('.show-more-btn').addEventListener('click', function() {
    const hiddenItems = document.querySelectorAll('.affiliated-item.hidden');
    hiddenItems.forEach(item => {
        item.style.display = item.style.display === 'block' ? 'none' : 'block';
    });
});

const params = new URLSearchParams(window.location.search);
    const section = params.get('scroll');

    if (section) {
      setTimeout(() => {
        const target = document.getElementById(section);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }, 400);
    }