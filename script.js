// Get burger icon and nav links
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

// Add event listener to toggle 'show' class on nav links
burger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});