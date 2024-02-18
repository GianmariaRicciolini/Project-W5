document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    const input = document.querySelector(".nav");
    const hero = document.querySelector(".hero");

    const scrollPosition = window.scrollY;

    if (scrollPosition > hero.scrollHeight - 80) {
      nav.style.backgroundColor = "#FFFFFF";
      input.style.backgroundColor = "#1a8917";
    } else {
      nav.style.backgroundColor = "#ffbf18";
      input.style.backgroundColor = "black";
    }
  });
});
