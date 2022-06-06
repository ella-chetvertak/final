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

// Arrow top

var smoothJumpUp = function() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      window.scrollBy(0,-50);
      setTimeout(smoothJumpUp, 0.1);
  }
}

window.onscroll = function() {
var scrolled = window.pageYOffset || document.documentElement.scrollTop;
if (scrolled > 100) {
  document.getElementById('upbutton').style.opacity = '1';
} else {
  document.getElementById('upbutton').style.opacity = '0';
}
}