let elButton = document.querySelector(".header__burger");
let elMenu = document.querySelector(".page__menu");
let elBody = document.querySelector("body")
let elHeader = document.querySelector("#header");
let elHead = document.querySelector(".header");
let elLogo = document.querySelector(".header__logo");
elButton.addEventListener("click", function () {
    elButton.classList.toggle("toggle");
    elMenu.classList.toggle("active");
    elBody.classList.toggle("scroll");
});
window.addEventListener("scroll", function(){
    if(window.pageYOffset > 0){
        elHeader.classList.add("header-active");
        elHead.classList.add("changeColor");
    }
    else{
        elHeader.classList.remove("header-active");
        elHead.classList.remove("changeColor");
    }
})