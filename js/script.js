// mobile navigation
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header-top");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
