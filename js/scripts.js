// Burger

let burger = document.querySelector("#burger");
let header = document.querySelector("#header");
burger.onclick = function() {
    header.classList.toggle("menu-open");
}