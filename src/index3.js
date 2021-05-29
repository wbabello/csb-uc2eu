const rainbow = document.querySelectorAll("span");
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

for (let i = 0; i < rainbow.length; i++) {
  rainbow[i].style.color = colors[i % colors.length];
}
