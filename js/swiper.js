let reviews2 = document.querySelector(".reviews__all2")
let swiper2 = new Swiper(reviews2, {
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    641: {
      slidesPerView: 2,
      spaceBetween: 50, 
    }
  }
});