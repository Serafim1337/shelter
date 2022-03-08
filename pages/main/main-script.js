const burgerMenu = document.querySelector(".burger-menu");
const dropdownMenu = document.querySelector(".dropdown-menu");
const menuBlock = document.querySelector(".menu-block");
const inPageLinks = document.querySelectorAll(".in-page-link");

burgerMenu.addEventListener("click", burgerMenuHandler);
for (let link of inPageLinks) {
  link.addEventListener("click", burgerMenuHandler);
}

function burgerMenuHandler() {
  burgerMenu.classList.toggle("cross");
  dropdownMenu.classList.toggle("active-dropdown");
  menuBlock.classList.toggle("active-menu-block");
  document.body.classList.toggle("lock");
}
