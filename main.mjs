import { darkColors, lightColors, svgColors } from "./colors.mjs";

const navbar = document.querySelector("nav");
const heroSection = document.querySelector("#hero");
const themeToggler = document.querySelector(".web-theme-toggler");
const takeATourEmbed = document.querySelector(".youtube-group embed");
const commaEmbeds = document.querySelectorAll(
  ".carausel-card-body > .icon-container > embed"
);
const carauselCards = document.querySelectorAll(".carausel-card");
const carauselNavigation = document.querySelector(".carausel-navigation");
const arrowRight = document.querySelectorAll(".project-card-body > a > embed");

// sticky navbar
function stickyNav(entries) {
  const [entry] = entries;
  !entry.isIntersecting
    ? navbar.classList.add("sticky-nav")
    : navbar.classList.remove("sticky-nav");
}
const navObserver = new IntersectionObserver(stickyNav, {
  root: null,
  rootMargin: `-${navbar.getBoundingClientRect().height}px`,
  threshold: 0,
});
navObserver.observe(heroSection);

//////// CARAUSEL ///////
const TRANSLATE_PERCENTAGE = 100;
const INITIAL_TRANSLATE = window.innerWidth >= 992 ? 100 : 0;
// const TRANSLATE_PERCENTAGE = window.innerWidth >= 992 ? 105 : 130;

let currSlide = 0;
let maxLength = carauselCards.length;
let prevDot = 0;

carauselCards.forEach((_, i) => {
  carauselNavigation.insertAdjacentHTML(
    "beforeend",
    `<span class="carausel-dot p-1 rounded-5" data-slide=${i}>`
  );
});
const goToSlide = function () {
  carauselNavigation.children[prevDot].classList.remove("curr-active-slide");
  carauselNavigation.children[currSlide].classList.add("curr-active-slide");
  prevDot = currSlide;
  carauselCards.forEach((card, i) => {
    card.style.transform = `translateX(${
      TRANSLATE_PERCENTAGE * (i - currSlide) + INITIAL_TRANSLATE
    }%)`;
  });
};
goToSlide(currSlide);

function prevSlide() {
  if (currSlide === 0) currSlide = maxLength - 1;
  else currSlide--;
  goToSlide(currSlide);
}
function nextSlide() {
  if (currSlide === maxLength - 1) currSlide = 0;
  else currSlide++;
  goToSlide(currSlide);
}

window.addEventListener("keydown", function (e) {
  e.key.toLowerCase() === "arrowleft" && prevSlide(currSlide);
  e.key.toLowerCase() === "arrowright" && nextSlide();
});

carauselNavigation.addEventListener("click", function (e) {
  if (e.target.tagName !== "SPAN") return;
  currSlide = e.target.dataset.slide;
  goToSlide();
});

setInterval(function () {
  nextSlide();
}, 2000);

//////// theme change /////////

function fillSvgColor(embed, color, isFill, isStroke) {
  embed.getSVGDocument().firstChild.childNodes.forEach((node) => {
    if (node.tagName?.toLowerCase() === "path") {
      isFill && node.setAttribute("fill", color);
      if (node.getAttribute("stroke"))
        isStroke && node.setAttribute("stroke", color);
    }
  });
}

function setSVGFillColor(colors) {
  commaEmbeds.forEach((embed) =>
    fillSvgColor(embed, colors.invertedComma, true, false)
  );
  fillSvgColor(takeATourEmbed, colors.takeATour, true, false);
  arrowRight.forEach((embed) =>
    fillSvgColor(embed, colors.arrowRight, false, true)
  );
}

function setTheme(arr, colors) {
  arr.forEach(([propertyName, propertyValue]) =>
    document.documentElement.style.setProperty(propertyName, propertyValue)
  );
  setSVGFillColor(colors);
}

function themeSetter(e) {
  const isDarkMode = e.target.checked;

  isDarkMode
    ? setTheme(darkColors, svgColors.dark)
    : setTheme(lightColors, svgColors.light);
}
themeToggler.addEventListener("change", themeSetter);
window.addEventListener("load", themeSetter);
