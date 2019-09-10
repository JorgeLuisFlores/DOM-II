// Your code goes here

const navColor = document.querySelectorAll(".nav-link");
//1
navColor.forEach(anchor => {
  anchor.addEventListener("mouseover", event => {
    event.target.style.background = "red";
  });
});

//2
navColor.forEach(anchor => {
  anchor.addEventListener("mouseleave", event => {
    event.target.style.background = "white";
  });
});

const sizeUp = document.querySelector(".img-content");
//3
sizeUp.addEventListener("mouseover", event => {
  sizeUp.style.transform = "scale(1.5)";
  sizeUp.style.transition = "transform 0.5s";
});

//4
sizeUp.addEventListener("mouseleave", event => {
  sizeUp.style.transform = "scale(1.0)";
  sizeUp.style.transition = "transform 0.5s";
});

//5
window.addEventListener("resize", event => {
  const changeHeader = document.querySelector(".logo-heading");
  changeHeader.textContent = "Fun Bus?";
});

//6
const signUpAlert = document.querySelector(".btn");
signUpAlert.addEventListener("click", event => {
  alert("Our Sign-Up page is currently down!");
});

//7
const introText = document.querySelector(".intro p");
introText.addEventListener("copy", event => {
  event.target.textContent = "Why did you copy that?!";
});

//8
let foot = document.querySelector(".footer");
let footZoom = function(e) {
  e.target.style.fontSize = "3rem";
  e.preventDefault();
};
foot.addEventListener("click", footZoom);

//9
window.addEventListener("load", event => {
  alert("Welcome to fun bus!");
});

//10
const bodyScroll = document.querySelector("body");
const navScroll = document.querySelector(".main-navigation");
bodyScroll.addEventListener("keydown", function() {
  navScroll.style.position = "absolute";
});
