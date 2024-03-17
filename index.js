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

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";
newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";
let myBody = document.querySelector("body");
myBody.prepend(newBtn);

let para = document.querySelector(".paragraph");
para.classList.add("my");

console.log(para);
