const themeToggler = document.querySelector(".web-theme-toggler");
const takeATourEmbed = document.querySelector(".youtube-group embed");
const commaEmbeds = document.querySelectorAll(
  ".carausel-card-body > .icon-container > embed"
);
const carauselCards = document.querySelectorAll(".carausel-card");
const carauselNavigation = document.querySelector(".carausel-navigation");
const arrowRight = document.querySelectorAll(".project-card-body > a > embed");
console.log(arrowRight);

// carausel
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

//////// theme change
function convertCssToArray(str) {
  let arr = str.split("\n").join("").split(";");
  arr.forEach((a, i) => {
    arr[i] = a.trim().split(":");
    arr[i][0] = arr[i][0]?.trim();
    arr[i][1] = arr[i][1]?.trim();
  });
  arr = arr.filter((a) => a.length === 2 && !!a[0]?.length && !!a[1]?.length);

  return arr;
}
let darkColors = `
--actual-black-less-opacity-color: #c6c4c466;
  --white-color: #313137;
  --black-color: #e6e6e6;
  --blakish-color: #e3e3e3;
  --dark-blue-color: #a79d46;
  --light-blue-color: #bdae0d;
  --light-yellow-color: #3a5763;
  --dark-yellow-color: #0b3d42;
  --very-light-grey-color: #424141;
  --medium-grey-color: #bbb5b5;
  --deep-grey-color: #cbc2c2;
  --nav-creative-team-plus-bg-color: #00fe11;
  --logo-dot-color: #bc4247;
  --optimise-circle-1-bg-color: #c2ddc8;
  --optimise-circle-2-bg-color: #dbbac6;
  --optimise-circle-3-bg-color: #e1e1d9;
  --optimise-circle-4-bg-color: #e6e6d9;
  --optimise-card-bg-number-color: #4b4b4b;
  --optimise-bg-circle-color: #393931a0;
  --blog-card-icon1-bg-color: #a6c1c1;
  --blog-card-icon2-bg-color: #c1a6c1;
  --blog-card-icon3-bg-color: #c1c1a6;
  --aboutus-number-description-color: #beb3b3;
  --about-us-number-red-dot-color: #38a2c1;
  --about-us-number-green-dot-color: #c138a2;
  --about-us-card1-bg-color: #cadce7;
  --about-us-card2-bg-color: #e7cad3;
  --about-us-card3-bg-color: #d7d7db;
  --about-us-number-border-color: #a3a3a3;
  --check-speed-input-bg-color: #2c2a2a;
  --check-input-text-color: #999292;
  --member-card-bg-color: #e0e0e0;
  --member-card-description-color: #5c5d5d;
  --contact-border-color: #7f7f7f;
  --contact-description-color: #8f8f8f;
  --contact-input-border-color: #a3a3a3;
  --copy-right-border-color: #d3d3d3;
  --whitish-grey-color: #b9b9b9;
  `;
let lightColors = `--actual-black-color: #000;
  --actual-black-less-opacity-color: #00000040;
  --white-color: #fff;
  --black-color: #212528;
  --blakish-color: #021605;
  --dark-blue-color: #717ae0;
  --light-blue-color: #6f77f1;
  --light-yellow-color: #f7c745;
  --dark-yellow-color: #fad725;
  --very-light-grey-color: #fafafa;
  --medium-grey-color: #727272;
  --deep-grey-color: #828282;
  --white-color: #fff;
  --nav-creative-team-plus-bg-color: #dcddff;
  --logo-dot-color: #bc424e;
  --optimise-circle-1-bg-color: #f9ebf0;
  --optimise-circle-2-bg-color: #ebf9f3;
  --optimise-circle-3-bg-color: #ebf8fe;
  --optimise-circle-4-bg-color: #f2f3fa;
  --optimise-card-bg-number-color: #fafaff;
  --optimise-bg-circle-color: #f5fdff;
  --blog-card-icon1-bg-color: #ffe8df;
  --blog-card-icon2-bg-color: #e3ffdf;
  --blog-card-icon3-bg-color: #fff8df;
  --aboutus-number-description-color: #6f6f6f;
  --about-us-number-red-dot-color: #d1563b;
  --about-us-number-green-dot-color: #3bd165;
  --about-us-card1-bg-color: #f9e4dc;
  --about-us-card2-bg-color: #d6f0d2;
  --about-us-card3-bg-color: #fef5d4;
  --about-us-number-border-color: #e1e1e1;
  --check-speed-input-bg-color: #dfdfdf;
  --check-input-text-color: #b6b6b6;
  --member-card-bg-color: #efefef;
  --member-card-description-color: #a3a2a2;
  --contact-border-color: #300808;
  --contact-description-color: #909090;
  --contact-input-border-color: #d0c3c9;
  --copy-right-border-color: #eae5e5;
  --whitish-grey-color: #e9e9e9;
  `;

const svgColors = {
  light: {
    takeATour: "#212528",
    invertedComma: "#f4f4f4",
    arrowRight: "#212528",
  },
  dark: {
    takeATour: "#fff",
    invertedComma: "#474242",
    arrowRight: "#d5d9d4",
  },
};

lightColors = convertCssToArray(lightColors);
darkColors = convertCssToArray(darkColors);

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

//////////
