const themeToggler = document.querySelector(".web-theme-toggler");

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
  --whitish-grey-color: #e9e9e9;`;

lightColors = convertCssToArray(lightColors);
darkColors = convertCssToArray(darkColors);

function setTheme(arr) {
  arr.forEach(([propertyName, propertyValue]) =>
    document.documentElement.style.setProperty(propertyName, propertyValue)
  );
}

function themeSetter(e) {
  const isDarkMode = e.target.checked;

  isDarkMode ? setTheme(darkColors) : setTheme(lightColors);
}
themeToggler.addEventListener("change", themeSetter);
window.addEventListener("load", themeSetter);
