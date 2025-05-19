// JavaScript
const burgerButton = document.querySelector("#burger");
const closeButton = document.querySelector("#close");
const menu = document.querySelector(".menus");
const search = document.querySelector(".search");
const utilitySection = document.querySelector(".utility-section");
const categoriesList = document.querySelector(".categories-list");
const navbar = document.querySelector(".navbar");

burgerButton.addEventListener("click", () => {
  navbar.classList.add("show");
  menu.classList.add("show");
  search.classList.add("show");
  utilitySection.classList.add("show");
  categoriesList.classList.add("show");
  burgerButton.style.display = "none";
  closeButton.style.display = "block";
});

closeButton.addEventListener("click", () => {
  navbar.classList.remove("show");
  menu.classList.remove("show");
  search.classList.remove("show");
  utilitySection.classList.remove("show");
  categoriesList.classList.remove("show");
  burgerButton.style.display = "block";
  closeButton.style.display = "none";
});