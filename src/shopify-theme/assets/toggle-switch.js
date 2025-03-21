
document.addEventListener('DOMContentLoaded', function() {
  // Theme toggle functionality
  const themeToggles = document.querySelectorAll('.theme-toggle .toggle-switch-input');
  
  themeToggles.forEach(toggle => {
    toggle.addEventListener('change', function() {
      const isDarkMode = this.checked;
      
      // Add or remove dark-mode class from body
      if (isDarkMode) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
      }
    });
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      toggle.checked = true;
      document.body.classList.add('dark-mode');
    }
  });
  
  // Product option toggles
  const productToggles = document.querySelectorAll('.product-option-toggle .toggle-switch-input');
  
  productToggles.forEach(toggle => {
    toggle.addEventListener('change', function() {
      const optionId = this.dataset.option;
      const isSelected = this.checked;
      
      // Update hidden input fields or trigger actions based on selection
      if (optionId && isSelected) {
        // Example: update a hidden input with the selected option
        const hiddenInput = document.querySelector(`input[name="properties[${optionId}]"]`);
        if (hiddenInput) {
          hiddenInput.value = 'Yes';
        }
      }
    });
  });
});
