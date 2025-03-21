
document.addEventListener('DOMContentLoaded', function() {
  // Product Carousel Functionality
  const carousel = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  const slideWidth = slides[0].clientWidth;
  let currentIndex = 0;
  let maxIndex = slides.length - 1;

  function goToSlide(index) {
    if (index < 0) {
      index = maxIndex;
    } else if (index > maxIndex) {
      index = 0;
    }
    currentIndex = index;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  prevBtn.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
  });

  nextBtn.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
  });

  // Features Carousel Functionality
  const featuresCarousel = document.querySelector('.features-carousel-track');
  const featureSlides = document.querySelectorAll('.feature-slide');
  const featurePrevBtn = document.querySelector('.feature-carousel-prev');
  const featureNextBtn = document.querySelector('.feature-carousel-next');
  let featureCurrentIndex = 0;
  let featureMaxIndex = Math.ceil(featureSlides.length / 2) - 1;

  function goToFeatureSlide(index) {
    if (index < 0) {
      index = featureMaxIndex;
    } else if (index > featureMaxIndex) {
      index = 0;
    }
    featureCurrentIndex = index;
    
    // On mobile, show one slide at a time
    if (window.innerWidth < 768) {
      featuresCarousel.style.transform = `translateX(-${featureCurrentIndex * 100}%)`;
    } else {
      // On desktop, show two slides at a time
      featuresCarousel.style.transform = `translateX(-${featureCurrentIndex * 100}%)`;
    }
  }

  featurePrevBtn.addEventListener('click', () => {
    goToFeatureSlide(featureCurrentIndex - 1);
  });

  featureNextBtn.addEventListener('click', () => {
    goToFeatureSlide(featureCurrentIndex + 1);
  });

  // Handle window resize for responsive carousels
  window.addEventListener('resize', () => {
    // Recalculate feature slides per view
    featureMaxIndex = window.innerWidth < 768 ? featureSlides.length - 1 : Math.ceil(featureSlides.length / 2) - 1;
    goToFeatureSlide(0);
    
    // Reset main carousel
    goToSlide(0);
  });

  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop - 100, // Offset for header
          behavior: 'smooth'
        });
      }
    });
  });

  // Sticky Header
  const header = document.querySelector('.edge-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});
