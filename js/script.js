const hamburgerMenu = document.getElementById("hamburger-menu");
const overlay = document.getElementById("overlay");
const mobileMenu = document.getElementById("mobile-menu");
const openIcon = document.getElementById("open-icon");
const closeIcon = document.getElementById("close-icon");
const mobileMenuItems = document.getElementsByClassName("mobile-menu-item");

hamburgerMenu.addEventListener("click", function () {
  openIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
  overlay.classList.toggle("overlay");
  mobileMenu.classList.toggle("translate-x-full");
  mobileMenu.classList.toggle("translate-x-0");
  document.body.classList.toggle("overflow-hidden");

  [...mobileMenuItems].forEach((item) => {
    item.classList.toggle("translate-x-full");
  });
});
