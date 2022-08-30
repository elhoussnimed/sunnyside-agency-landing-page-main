const menuList = document.querySelector("header nav ul");
const icone = document.querySelector("header nav .mobile-list");

function showMenu() {
  menuList.classList.toggle("list-display");
}

icone.addEventListener("click", showMenu);
