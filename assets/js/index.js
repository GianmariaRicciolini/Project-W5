document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    const header = document.querySelector("header");

    const headerHeight = header.offsetHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition > headerHeight - 50) {
      nav.style.backgroundColor = "#FFFFFF";
    } else {
      nav.style.backgroundColor = "#ffbf18";
    }
  });
});
