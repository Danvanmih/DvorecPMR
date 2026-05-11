// Боковое меню

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

menuToggle.addEventListener("click", () => {

    sidebar.classList.toggle("show");
    sidebar.classList.toggle("hidden");

});

// Выпадающее меню

const dropdownBtn = document.querySelector(".dropdown-btn");
const submenu = document.querySelector(".submenu");

dropdownBtn.addEventListener("click", () => {

    submenu.classList.toggle("active");

});

// Подменю

const subDropdownBtn = document.querySelector(".dropdown-sub-btn");
const submenuSecond = document.querySelector(".submenu-second");

subDropdownBtn.addEventListener("click", () => {

    submenuSecond.classList.toggle("active");

});
