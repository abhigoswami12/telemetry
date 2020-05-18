// hero section background parallax

const parallax = document.getElementById("parallax");
window.addEventListener("scroll", () => {
  let offset = window.scrollY;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
});

// details section button functionality

const aliquam = document.querySelector(".aliquam");
const consequat = document.querySelector(".consequat");
const feugiat = document.querySelector(".feugiat");
const btnAli = document.getElementById("aliquam");
const btnCons = document.getElementById("consequat");
const btnFeu = document.getElementById("feugiat");
const links = document.querySelector(".links");
btnCons.addEventListener("click", displayCons);
btnAli.addEventListener("click", displayAli);
btnFeu.addEventListener("click", displayFeu);

function displayCons(event) {
  consequat.style.display = "block";
  aliquam.style.display = "none";
  feugiat.style.display = "none";
  btnAli.classList.remove("btn-focus");
  btnFeu.classList.remove("btn-focus");
  btnCons.classList.add("btn-focus");
}
function displayAli(event) {
  consequat.style.display = "none";
  aliquam.style.display = "block";
  feugiat.style.display = "none";
  btnAli.classList.add("btn-focus");
  btnFeu.classList.remove("btn-focus");
  btnCons.classList.remove("btn-focus");
}
function displayFeu(event) {
  consequat.style.display = "none";
  aliquam.style.display = "none";
  feugiat.style.display = "block";
  btnAli.classList.remove("btn-focus");
  btnFeu.classList.add("btn-focus");
  btnCons.classList.remove("btn-focus");
}

// add event on header background

const header = document.querySelector(".header");

window.addEventListener("scroll", showHeaaderBackground);

function showHeaaderBackground(event) {
  if (window.scrollY > 530) {
    header.classList.add("header-background");
  } else {
    header.classList.remove("header-background");
  }
}
