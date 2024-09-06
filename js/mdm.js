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