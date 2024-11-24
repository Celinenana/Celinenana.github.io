// Get all navigation links
const navLinks = document.querySelectorAll('.nav-link');
const contentContainers = document.querySelectorAll('.content-container');

// Add click event to each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all content containers
        contentContainers.forEach(content => content.classList.remove('active'));
        
        // Add active class to the clicked section
        const targetId = this.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});

// Show the first section by default
document.getElementById('about').classList.add('active');
