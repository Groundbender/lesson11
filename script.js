const btn = document.querySelector("#btn");
const text = document.querySelector("#text");
const square = document.querySelector("#square");
const range = document.querySelector("#range");
const circle = document.querySelector("#circle");

btn.addEventListener("click", function () {
  square.style.backgroundColor = text.value;
});

document.querySelector("#e_btn").style = "display: none";

range.addEventListener("input", function () {
  document.querySelector("#range-span").textContent = range.value;
  circle.style.width = Number(range.value) + "%";
  circle.style.height = Number(range.value) + "%";
});
