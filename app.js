const mobileMenu = document.querySelector("header nav ul");
const menuIcon = document.querySelector("header nav .mobile-list");

menuIcon.onclick = () => {
  mobileMenu.classList.toggle("list-display");
};
