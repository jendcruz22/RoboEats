// VARIABLES
const menu_bars = document.querySelector(".menu_bars");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

//This method waits and listens for a click event upon which the mobileMenu function is called
menu_bars.addEventListener("click", mobileMenu); 

// Function to display the mobileMenu when the menu bars are clicked
function mobileMenu() {
    menu_bars.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// If the menu bars are clicked again i.e. after they were clicked to open the mobile Menu, this event listener will call the closeMenu function
navLink.forEach(n => n.addEventListener("click", closeMenu));

// This function removes the active class from both the nav-menu and the menu bars which makes our mobile menu close.
function closeMenu() {
    menu_bars.classList.remove("active");
    navMenu.classList.remove("active");
}