// let categoryToggleBtn = document.querySelector(".category_toggle_btn");
// let category = document.querySelector(".category");
// let arrowBtn = document.querySelector("fa-angle-down", "fa-angle-up");

// categoryToggleBtn.addEventListener("click", () => {
//   category.classList.toggle("categoryOpen");
// });

// categoryToggleBtn.addEventListener("click", () => {
//   categoryToggleBtn.classList.toggle("angle_up");
// });
// let categoryToggleBtn = document.querySelector(".category");
// let CategorieIcon = document.querySelector(".fa-angle-down");

// categoryToggleBtn.addEventListenert("click", function () {
//   CategorieIcon.classList.toggle("rotate_icon");
// });

// let categoryToogleBtn = document.querySelector(".category");
// let CategoriesIcon = document.querySelector(".CategoriesIcon");

// categoryToogleBtn.addEventListener("click", () => {
//   CategoriesIcon.classList.toggle("rotate_icon");
// });

let navOpenBtn = document.querySelector(".bar_icon");
let navCloseBtn = document.querySelector(".nav_removeBtn");
let navLink = document.querySelector(".navlink");

navOpenBtn.addEventListener("click", () => {
  navLink.classList.add("navopen_close_btn");
});

navCloseBtn.addEventListener("click", () => {
  navLink.classList.remove("navopen_close_btn");
});

let contactWrapper = document.querySelector(".contact_wrapper");
let contactWrapperDown = document.querySelector(".icon_rotate");
let rotate90deg = document.querySelector(".contact_wrapperDown");

contactWrapperDown.addEventListener("click", function () {
  contactWrapper.classList.toggle("contactWrapper1");
});

contactWrapperDown.addEventListener("click", function () {
  rotate90deg.classList.toggle("rotate90deg");
});

let barIcon = document.querySelector(".bar_icon");
let navBar = document.querySelector(".navlink");
let navRemove = document.querySelector(".navHide");

barIcon.addEventListener("click", () => {
  navBar.classList.add("right-10px");
});

navRemove.addEventListener("click", () => {
  navBar.classList.remove("right-10px");
});
navRemove.addEventListener("mouseover", () => {
  navRemove.classList.add("navHideRotate360deg");
});
navRemove.addEventListener("mouseleave", () => {
  navRemove.classList.add("navHideRotate90deg");
});
