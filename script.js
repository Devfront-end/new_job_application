
  document.addEventListener('DOMContentLoaded', () => {
    // Toggle mobile navigation menu
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const jobsList = document.querySelectorAll('.job'); // Assume each job has a class 'job'

    searchButton.addEventListener('click', () => {
      const searchTerm = searchInput.value.toLowerCase();

      jobsList.forEach(job => {
        const title = job.querySelector('.job-title').textContent.toLowerCase(); // Assume each job has a title with class 'job-title'
        if (title.includes(searchTerm)) {
          job.style.display = ''; // Show the job if the title includes the search term
        } else {
          job.style.display = 'none'; // Hide the job if the title does not include the search term
        }
      });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.getElementById(this.getAttribute('href').substring(1));
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Social media interaction example
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
      icon.addEventListener('click', () => {
        // Placeholder functionality for social media interaction
        console.log('Social icon clicked:', icon.getAttribute('data-social'));
      });
    });
  });

