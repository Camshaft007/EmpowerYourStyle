// Select burger and nav-links for mobile menu toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

// Toggle nav-links visibility when burger is clicked
burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});




// Toggle dropdown menus on click for mobile
dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        const dropdown = toggle.nextElementSibling;
        dropdown.classList.toggle('dropdown-active');
    });
});
