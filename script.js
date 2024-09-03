document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('.section');
    const links = document.querySelectorAll('nav ul li a');

    // Change navbar background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'linear-gradient(to right, #1d3c6a, #6b8cc8)';
        } else {
            navbar.style.background = 'linear-gradient(to right, #3b5998, #8b9dc3)';
        }
    });

    // Add hover effect to nav links
    links.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.background = 'rgba(255, 255, 255, 0.5)';
            this.style.color = '#000';
        });

        link.addEventListener('mouseout', function() {
            this.style.background = 'transparent';
            this.style.color = '#fff';
        });

        // Navigate to section without scrolling
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - navbar.offsetHeight,
                behavior: 'instant'
            });
        });
    });
});
