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

(() => {
    const slider = document.getElementById('member-slider');
    const prevBtn = document.querySelector('.slider-btn-prev');
    const nextBtn = document.querySelector('.slider-btn-next');
    const cards = slider.querySelectorAll('.member-card');

    const gap = 20;
    const cardWidth = cards[0].offsetWidth;
    const slideWidth = cardWidth + gap;

    let visibleCards = window.innerWidth <= 768 ? 1 : 3;

    // Calculate total width and max translateX (negative value)
    function getMaxTranslateX() {
        const totalWidth = cards.length * slideWidth - gap; // total width minus last gap
        const visibleWidth = visibleCards * slideWidth - gap;
        return Math.min(0, visibleWidth - totalWidth); // negative or zero
    }

    let currentTranslateX = 0;
    let maxTranslateX = getMaxTranslateX();

    function updateButtons() {
        prevBtn.disabled = currentTranslateX === 0;
        nextBtn.disabled = currentTranslateX <= maxTranslateX;
        prevBtn.style.opacity = prevBtn.disabled ? '0.3' : '1';
        nextBtn.style.opacity = nextBtn.disabled ? '0.3' : '1';
        prevBtn.style.cursor = prevBtn.disabled ? 'default' : 'pointer';
        nextBtn.style.cursor = nextBtn.disabled ? 'default' : 'pointer';
    }

    function moveSlider(newTranslateX) {
        currentTranslateX = Math.min(0, Math.max(maxTranslateX, newTranslateX));
        slider.style.transform = `translateX(${currentTranslateX}px)`;
        updateButtons();
    }

    prevBtn.addEventListener('click', () => {
        moveSlider(currentTranslateX + slideWidth);
    });

    nextBtn.addEventListener('click', () => {
        moveSlider(currentTranslateX - slideWidth);
    });

    window.addEventListener('resize', () => {
        const newVisibleCards = window.innerWidth <= 768 ? 1 : 3;
        if (newVisibleCards !== visibleCards) {
            visibleCards = newVisibleCards;
            maxTranslateX = getMaxTranslateX();
            moveSlider(0);
        }
    });

    // Add touch event listeners for mobile swipe support
    if (visibleCards === 1) {
        let startX = 0;
        let isDragging = false;

        slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });

        slider.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            // Optional: visual feedback for swipe could be added here
        });

        slider.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            isDragging = false;
            const endX = e.changedTouches[0].clientX;
            const deltaX = endX - startX;

            const swipeThreshold = cardWidth / 3; // minimum swipe distance

            if (deltaX > swipeThreshold) {
                // swipe right - move slider right (prev)
                moveSlider(currentTranslateX + slideWidth);
            } else if (deltaX < -swipeThreshold) {
                // swipe left - move slider left (next)
                moveSlider(currentTranslateX - slideWidth);
            }
            // else no movement for small swipe
        });
    }

    // Initialize slider
    moveSlider(0);
})();

// Show more for affiliated businesses
document.querySelector('.show-more-btn').addEventListener('click', function() {
    const hiddenItems = document.querySelectorAll('.affiliated-item.hidden');
    const isHidden = hiddenItems.length > 0;
    hiddenItems.forEach(item => {
        if (isHidden) {
            // Show item by removing hidden class
            item.classList.remove('hidden');
        } else {
            // Hide item by adding hidden class
            item.classList.add('hidden');
        }
    });
    this.textContent = isHidden ? 'Show Less' : 'Show More';
});
