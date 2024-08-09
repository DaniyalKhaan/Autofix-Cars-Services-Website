'use-strict';


// Navbar toogler for mobile screens

const navbar = document.querySelector("[data-navbar]");

const navToggler = document.querySelector("[data-nav-toggler]");

navToggler.addEventListener("click", () => {
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");

})