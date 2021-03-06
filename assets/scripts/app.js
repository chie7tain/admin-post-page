
const burger = document.querySelector(".burger");
const nav = document.querySelector(".navigation");
const navLinks = document.querySelectorAll(".navigation .responsive");
// script for responsive navbar

// this function uses transititon to smoothly animate the nav links when the burger is clicked by the user
function animateLinks(navLinks) {
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.3}s`
    }
  })
}
// this function helps to close the nav when the user clicks on any nav link
function toggleNavFromLink(navLinks) {
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      // animate Links
      animateLinks(navLinks);
      burger.classList.toggle("toggle");
    })
  })
}
const navSlide = () => {
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    animateLinks(navLinks);
    burger.classList.toggle("toggle");
  })
  toggleNavFromLink(navLinks);
}
navSlide();