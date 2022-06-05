// Burger

let burger = document.querySelector("#burger");
let header = document.querySelector("#header");
burger.onclick = function() {
    header.classList.toggle("menu-open");
}

// Carousel

$(document).ready(function() {
    $('.carousel').slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 376,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });     
});
