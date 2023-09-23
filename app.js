const closeButton = document.getElementById("close-button");
const iconMenu = document.getElementById("icon-menu");
const links = document.querySelector(".links");

iconMenu.addEventListener("click", () => {
  links.classList.add("show-menu");
});

closeButton.addEventListener("click", () => {
  links.classList.remove("show-menu");
});
