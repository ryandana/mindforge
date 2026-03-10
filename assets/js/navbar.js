// assets/js/navbar.js

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  menuBtn?.addEventListener("click", function () {
    menu.classList.toggle("hidden");
  });
});
