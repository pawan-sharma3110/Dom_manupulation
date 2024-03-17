let h2 = document.querySelector("h2");
console.log(h2);
h2.innerText = h2.innerText + " from Apna College Student";

let boxes = document.querySelectorAll(".box");
let index = 0;

for (box of boxes) {
  box.innerText = `Hello World ${index}`;
  index++;
  console.log(box);
}
