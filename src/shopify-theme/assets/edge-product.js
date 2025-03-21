
document.addEventListener('DOMContentLoaded', function() {
  // Product Carousel
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(document.querySelectorAll('.carousel-slide'));
  const prevButton = document.querySelector('.carousel-prev');
  const nextButton = document.querySelector('.carousel-next');
  
  if (!track || !slides.length || !prevButton || !nextButton) return;
  
  let currentIndex = 0;
  const slideWidth = 100; // 100%
  
  // Set the width of the track to accommodate all slides
  track.style.width = `${slides.length * 100}%`;
  
  // Set each slide width
  slides.forEach(slide => {
    slide.style.width = `${100 / slides.length}%`;
  });
  
  function goToSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    
    currentIndex = index;
    track.style.transform = `translateX(-${currentIndex * slideWidth / slides.length}%)`;
  }
  
  prevButton.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
  });
  
  nextButton.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
  });
  
  // Initialize carousel
  goToSlide(0);
  
  // Auto-advance every 5 seconds
  setInterval(() => {
    goToSlide(currentIndex + 1);
  }, 5000);
});
