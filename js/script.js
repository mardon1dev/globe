let button = document.querySelector(".landing-header__burger");
let menu = document.querySelector(".landing-page__menu");
let body = document.querySelector("body")
let header = document.querySelector("#landing-header");
let head = document.querySelector(".landing-header");
let logo = document.querySelector(".landing-header__logo");
button.addEventListener("click", function () {
    button.classList.toggle("toggle");
    menu.classList.toggle("active");
    body.classList.toggle("scroll");
});
window.addEventListener("scroll", function(){
    if(window.pageYOffset > 0){
        header.classList.add("header-active");
        head.classList.add("changeColor");
        logo.innerHTML = "<img src='./images/logo.svg' alt='Logo' width='110' height='36'>";
    }
    else{
        header.classList.remove("header-active");
        head.classList.remove("changeColor");
        logo.innerHTML = "<img src='./images/landing-logo.svg' alt='Logo' width='110' height='36'>"
    }
})


// Hero flight tab
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("hero__tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("hero__tab--tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }