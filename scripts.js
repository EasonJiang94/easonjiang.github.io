// Example JavaScript for interactive components (e.g., a simple scroll-to-section feature)
document.querySelectorAll('nav#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});