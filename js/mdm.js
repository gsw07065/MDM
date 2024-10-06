let header = document.querySelector("header");
let navBg = document.querySelector(".nav_Bg");
let navLi = document.querySelectorAll(".nav>li")

navLi.forEach(function(v,k){
  v.onmouseenter = function(){
    header.classList.add("on");
    navBg.classList.add("on");
    header.querySelector(".logo a").classList.add("on");
  };
  v.onmouseleave = function(){
    header.classList.remove("on");
    navBg.classList.remove("on");header.querySelector(".logo a").classList.remove("on");
  };
});


//s1 스와이퍼
  const slide = document.querySelectorAll(".s1 .swiper-slide");
  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");
  let swiperLi = document.querySelectorAll(".mySwiper2 .swiper-wrapper .swiper-slide");

/*   progressContent.onclick=function(){
    if(bool){
      swiper.autoplay.stop();
    }else{
      swiper.autoplay.start();
    }
    bool = !bool;
    console.log(bool);
  }; */

  setTimeout(function(){
    slide[0].querySelector(".bg img").classList.add("on");
  },1000);

  var swiper = new Swiper(".mySwiper2", {
    effect: "fade",
    //speed: 1000,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      },
      slideChange: function(){
        console.log(this.realIndex);
        for(let i=0; i<3; i++){
          swiperLi[i].querySelector(".bg img").classList.remove("on");
        }
        swiperLi[this.realIndex].querySelector(".bg img").classList.add("on");
      }
    }
  });



//s4 스와이퍼
var galleryMainThumb = new Swiper(".mySwiper .swiper-container", {
  slidesPerView: "auto",
  speed: 500,
  loop: true,
  spaceBetween: 400,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
var galleryMain = new Swiper(".mySwiper1 .swiper-container", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 500,
  loop: true,
  effect: "fade",
  pagination: {
    el: ".section .main4 .mySwiper1 .swiper-container .paginate",
    clickable: true,
  },
  navigation: {
    nextEl: ".mySwiper1 .next",
    prevEl: ".mySwiper1 .prev",
  },
});
const nextButton = document.querySelector(".mySwiper1 .next");
const prevButton = document.querySelector(".mySwiper1 .prev");

nextButton.addEventListener("click", function () {
  galleryMainThumb.slideNext();
});

prevButton.addEventListener("click", () => {
  galleryMainThumb.slidePrev();
});





//제이쿼리 gsap s1

const ani1 = gsap.timeline();
    ani1.from(".s1 .text p img",{
      x: -180,
      scale:1.4,
      duration: 1,
      delay:1.5,
    }).from(".s1 .text h2",{
      opacity:0,
      duration: 1
    },"<1");
