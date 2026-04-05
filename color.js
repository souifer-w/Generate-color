const btnGeneraite = document.querySelector(".btn-G");
const color = document.querySelector(".color");
const copyColor = document.querySelector(".copyColor");
const bodycolor = document.getElementById("body-color");
let letters = "0123456789ABCDEF";
function generateColor() {
  let colorG = "#";

  for (let i = 0; i < 6; i++) {
    let randomColor = Math.floor(Math.random() * 16);
    colorG += letters[randomColor];
  }
  localStorage.setItem("colorG", colorG);
  localStorage.setItem("backgroundColor", colorG);
  color.textContent = colorG;
  bodycolor.style.background = colorG;
}
window.addEventListener("load", () => {
  const savedColor = localStorage.getItem("colorG");
  const savedBackground = localStorage.getItem("backgroundColor");

  if (savedColor && savedBackground) {
    color.textContent = savedColor;
    bodycolor.style.background = savedBackground;
  }
});
btnGeneraite.addEventListener("click", () => {
  generateColor();
});
let copyTimeout;

copyColor.addEventListener("click", () => {
  navigator.clipboard
    .writeText(color.textContent)
    .then(() => {
      copyColor.textContent = "copied ✓";

      copyTimeout = setTimeout(() => {
        copyColor.textContent = "copy";
      }, 1000);
    })
    .catch(() => {
      alert("Failed to copy!");
    });
});
