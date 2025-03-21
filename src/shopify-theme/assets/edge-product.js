
// Edge Product Page JS
document.addEventListener('DOMContentLoaded', function() {
  // Handle smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // 80px offset for header
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Add scroll event for header
  const header = document.querySelector('.edge-header');
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 20) {
      header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.07)';
      header.style.backgroundColor = 'rgba(248, 246, 243, 0.95)';
    } else {
      header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
      header.style.backgroundColor = 'rgba(248, 246, 243, 0.8)';
    }
    
    lastScrollTop = scrollTop;
  });
  
  // Handle sticky CTA visibility
  const stickyCta = document.querySelector('.sticky-button');
  const preorderSection = document.getElementById('preorder');
  
  if (stickyCta && preorderSection) {
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      const preorderPosition = preorderSection.offsetTop;
      
      // Show when scrolled past hero section
      if (scrollPosition > 300) {
        stickyCta.style.opacity = '1';
        stickyCta.style.transform = 'translateY(0)';
      } else {
        stickyCta.style.opacity = '0';
        stickyCta.style.transform = 'translateY(20px)';
      }
      
      // Hide when near the preorder section
      if (scrollPosition + windowHeight > preorderPosition - 200) {
        stickyCta.style.opacity = '0';
        stickyCta.style.transform = 'translateY(20px)';
      }
    });
  }
});
