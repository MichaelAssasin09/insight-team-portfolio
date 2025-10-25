// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
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
const cardWidth = cards[0].offsetWidth + 48; // Including margin

document.querySelector('.next').addEventListener('click', function() {
    if (currentIndex < totalCards + 2) {
        currentIndex++;
        slider.style.transform = `translateX(-${currentIndex * cardWidth * 0.65}px)`;
    }
});

document.querySelector('.prev').addEventListener('click', function() {
    if (currentIndex > 0) {
        currentIndex--;
        slider.style.transform = `translateX(-${currentIndex * cardWidth * 0.65}px)`;
    }
});

// Show more for affiliated
document.querySelector('.show-more-btn').addEventListener('click', function() {
    const hiddenItems = document.querySelectorAll('.affiliated-item.hidden');
    hiddenItems.forEach(item => {
        item.style.display = item.style.display === 'block' ? 'none' : 'block';
    });

});

