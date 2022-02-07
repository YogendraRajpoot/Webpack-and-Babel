import("./index.css");
import Logo from "./logo.png"

// console.log("Yogendra Rajpoot");
let mainDiv = document.getElementById("root");
let down = document.getElementById("down");
let div2 = document.createElement("div");
div2.classList.add("div2");
let h2 = document.createElement("h2");
h2.textContent = "Notes";
h2.classList.add("notes");
let input = document.createElement("textarea");
input.classList.add("input");
input.placeholder = "Write Notes";
input.cols = "10";
input.rows = "20";
input.maxLength = "2000";
input.required
let btn = document.createElement("button");
btn.id = "btn";
btn.textContent = "ADD";
div2.append(input, btn);
down.append(div2)
let image = document.createElement("img")
image.src = Logo
image.classList="image"
mainDiv.append(image,h2);

btn.addEventListener("click", addFuc);
var rightDiv = document.getElementById("right-div");
function addFuc(event) {
    event.preventDefault();
    let notesDisplay = document.createElement("div");
    notesDisplay.classList = "notesDisplay";
    let para = document.createElement("p");
    notesDisplay.textContent = input.value;
    notesDisplay.append(para);
    rightDiv.append(notesDisplay);
    input.value = "";
}
