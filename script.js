


// Scroll Animation
const faders = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.8;
  faders.forEach(fader => {
    const fadeTop = fader.getBoundingClientRect().top;
    if (fadeTop < triggerBottom) {
      fader.classList.add('visible');
    }
  });
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const closeBtn = document.querySelector('.close');
const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
