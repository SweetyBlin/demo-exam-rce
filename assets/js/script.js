const btn = document.querySelector(".burger__line");
const menu = document.querySelector(".header__menu");

btn.addEventListener("click", () => {
    btn.classList.toggle("animate");
    menu.classList.toggle("animate");
});