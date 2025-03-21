
// Edge Product Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Product Carousel
  const productCarousel = document.querySelector('.carousel-track');
  const productSlides = document.querySelectorAll('.carousel-slide');
  const prevButton = document.querySelector('.carousel-prev');
  const nextButton = document.querySelector('.carousel-next');
  let currentIndex = 0;
  const slideCount = productSlides.length;

  if (productCarousel && slideCount > 0) {
    function updateCarousel() {
      const slideWidth = productSlides[0].offsetWidth;
      productCarousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slideCount;
      updateCarousel();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slideCount) % slideCount;
      updateCarousel();
    }

    // Set up event listeners
    if (nextButton) nextButton.addEventListener('click', nextSlide);
    if (prevButton) prevButton.addEventListener('click', prevSlide);

    // Auto advance slides
    let carouselInterval = setInterval(nextSlide, 5000);

    // Pause auto-advance on hover
    if (productCarousel) {
      productCarousel.addEventListener('mouseenter', () => {
        clearInterval(carouselInterval);
      });
      
      productCarousel.addEventListener('mouseleave', () => {
        carouselInterval = setInterval(nextSlide, 5000);
      });
    }

    // Initialize
    updateCarousel();
    
    // Update on resize
    window.addEventListener('resize', updateCarousel);
  }

  // Features Carousel
  const featuresCarousel = document.querySelector('.features-carousel-track');
  const featureSlides = document.querySelectorAll('.feature-slide');
  const featurePrevButton = document.querySelector('.feature-carousel-prev');
  const featureNextButton = document.querySelector('.feature-carousel-next');
  let featureCurrentIndex = 0;
  const featureSlideCount = featureSlides.length;

  if (featuresCarousel && featureSlideCount > 0) {
    function updateFeaturesCarousel() {
      const isDesktop = window.innerWidth >= 768;
      const slidesToShow = isDesktop ? 2 : 1;
      const slideWidth = featureSlides[0].offsetWidth;
      
      // Ensure we don't go beyond available slides
      const maxIndex = featureSlideCount - slidesToShow;
      if (featureCurrentIndex > maxIndex) featureCurrentIndex = maxIndex;
      
      featuresCarousel.style.transform = `translateX(-${featureCurrentIndex * slideWidth}px)`;
    }

    function nextFeatureSlide() {
      const isDesktop = window.innerWidth >= 768;
      const slidesToShow = isDesktop ? 2 : 1;
      const maxIndex = featureSlideCount - slidesToShow;
      
      if (featureCurrentIndex < maxIndex) {
        featureCurrentIndex++;
      } else {
        featureCurrentIndex = 0;
      }
      
      updateFeaturesCarousel();
    }

    function prevFeatureSlide() {
      const isDesktop = window.innerWidth >= 768;
      const slidesToShow = isDesktop ? 2 : 1;
      const maxIndex = featureSlideCount - slidesToShow;
      
      if (featureCurrentIndex > 0) {
        featureCurrentIndex--;
      } else {
        featureCurrentIndex = maxIndex;
      }
      
      updateFeaturesCarousel();
    }

    // Set up event listeners
    if (featureNextButton) featureNextButton.addEventListener('click', nextFeatureSlide);
    if (featurePrevButton) featurePrevButton.addEventListener('click', prevFeatureSlide);

    // Initialize
    updateFeaturesCarousel();
    
    // Update on resize
    window.addEventListener('resize', updateFeaturesCarousel);
  }

  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });

  // Logo scrolling
  function duplicateLogos() {
    const scrollContainers = document.querySelectorAll('.logo-scroll');
    
    scrollContainers.forEach(container => {
      const scrollInner = container.querySelector('.logo-scroll-inner');
      if (scrollInner) {
        const clone = scrollInner.cloneNode(true);
        container.appendChild(clone);
      }
    });
  }
  
  duplicateLogos();
});
