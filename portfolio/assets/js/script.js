

'use strict';

// sidebar toggle

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () {
  sidebar.classList.toggle("active");
});



// testimonials modal

const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

testimonialsItem.forEach(item => {
  item.addEventListener("click", function () {
    modalContainer.classList.add("active");
    overlay.classList.add("active");

    modalImg.src = item.querySelector("img").src;
    modalImg.alt = item.querySelector("img").alt;
    modalTitle.innerText = item.querySelector("[data-testimonials-title]").innerText;
    modalText.innerText = item.querySelector("[data-testimonials-text]").innerText;
  });
});

modalCloseBtn.addEventListener("click", function () {
  modalContainer.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", function () {
  modalContainer.classList.remove("active");
  overlay.classList.remove("active");
});



// custom select

const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");

select.addEventListener("click", function () {
  select.classList.toggle("open");
});

selectItems.forEach(item => {
  item.addEventListener("click", function () {
    selectValue.innerText = this.innerText;
    select.classList.remove("open");

    const selectedValue = this.innerText.toLowerCase();
    filterFunc(selectedValue);

    // Sync with top button highlight
    lastClickedBtn.classList.remove("active");
    filterBtn.forEach(btn => {
      if (btn.innerText.toLowerCase() === selectedValue) {
        btn.classList.add("active");
        lastClickedBtn = btn;
      }
    });
  });
});



// contact form validation

const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach(input => {
  input.addEventListener("input", function () {
    const allFilled = Array.from(formInputs).every(input => input.value.trim() !== "");
    formBtn.disabled = !allFilled;
  });
});



// page navigation

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach(link => {
  link.addEventListener("click", function () {
    pages.forEach(page => {
      if (link.innerText.toLowerCase() === page.dataset.page) {
        page.classList.add("active");
        link.classList.add("active");
      } else {
        page.classList.remove("active");
        document.querySelector(".navbar-link.active")?.classList.remove("active");
      }
    });
  });
});



// portfolio filtering

const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  filterItems.forEach(item => {
    const category = item.dataset.category.toLowerCase();
    if (selectedValue === "all" || selectedValue === category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

let lastClickedBtn = filterBtn[0];

filterBtn.forEach(btn => {
  btn.addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase();
    filterFunc(selectedValue);

    selectValue.innerText = this.innerText;

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
});
