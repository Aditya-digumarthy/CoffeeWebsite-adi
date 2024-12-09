const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

// Toggle the menu and blur effect
menuOpenButton.addEventListener("click", () => { 
    document.body.classList.toggle("show-mobile-menu"); 
});

menuCloseButton.addEventListener("click", () => { 
    document.body.classList.toggle("show-mobile-menu"); 
});

// for swipper
const swiper = new Swiper('.slider-wrapper', {
    
    loop: true,
    grabCusror: true,
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

    //Resposive Breakpoint 

    breakpoints:{
        0: {
            slidesPerView: 1
        },

        768: {
            slidesPerView: 2
        },

        1024: {
            slidesPerView: 3
        }
    }
  
  });