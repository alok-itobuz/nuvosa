const themeToggler = document.querySelector(".web-theme-toggler");

themeToggler.addEventListener("change", function (e) {
  const isDarkMode = e.target.checked;

  if (isDarkMode) {
  } else {
    document.documentElement.style.getPropertyValue("");
  }
});
