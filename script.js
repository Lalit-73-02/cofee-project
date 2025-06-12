const navLinks =document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton =document.querySelector("#menu-open-button");
const menucloseButton =document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});
//close menu when button is close in click
menucloseButton.addEventListener("click", () =>menuOpenButton.click());

//close menu when the nav link is click
navLinks.forEach(link => {
  link.addEventListener("click", () => menuOpenButton.click());
});

//initialize swiper popular slider library in js
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //breakpoint
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      },
    }
  });