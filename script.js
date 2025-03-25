document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle functionality
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  
  menuToggle.addEventListener('click', function() {
    // Toggle active classes
    this.classList.toggle('active');
    nav.classList.toggle('active');
    
    // Toggle aria-expanded attribute for accessibility
    const isExpanded = this.classList.contains('active');
    this.setAttribute('aria-expanded', isExpanded);
    
    // Lock body scroll when menu is open
    document.body.style.overflow = isExpanded ? 'hidden' : '';
  });

  // Close menu when clicking on a nav link
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) { // Only for mobile view
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (window.innerWidth <= 768 && 
        !event.target.closest('nav') && 
        !event.target.closest('.menu-toggle') &&
        nav.classList.contains('active')) {
      menuToggle.classList.remove('active');
      nav.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Close menu on window resize if it becomes desktop view
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      menuToggle.classList.remove('active');
      nav.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});