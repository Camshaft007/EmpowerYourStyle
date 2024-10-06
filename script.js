// Select the burger menu and navigation links
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

// Toggle the visibility of the nav-links when the burger is clicked
burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active'); // Add or remove the "nav-active" class
});