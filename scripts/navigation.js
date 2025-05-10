document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const primaryNav = document.getElementById('primaryNav');
  
    menuButton.addEventListener('click', function() {
      primaryNav.classList.toggle('show');
    });
  
    // Close menu when a nav item is clicked (for mobile)
    const navItems = document.querySelectorAll('#primaryNav li a');
    navItems.forEach(item => {
      item.addEventListener('click', function() {
        if (window.innerWidth < 768) {
          primaryNav.classList.remove('show');
        }
      });
    });
  });