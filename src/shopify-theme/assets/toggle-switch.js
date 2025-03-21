
document.addEventListener('DOMContentLoaded', function() {
  // Handle toggle switches
  const toggleSwitches = document.querySelectorAll('.toggle-switch-input');
  
  toggleSwitches.forEach(toggle => {
    toggle.addEventListener('change', function() {
      // Dispatch a custom event that can be captured by other scripts
      const event = new CustomEvent('toggle-switch-change', {
        detail: {
          id: this.id,
          checked: this.checked
        }
      });
      document.dispatchEvent(event);
    });
  });
});
