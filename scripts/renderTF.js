import getData from "./getData.js";
const postsData = await getData;
let cont = document.querySelector(".root");

function render() {
  cont.style.display = "block";

  cont.innerHTML = `
<div class="content">
    <div class="card">
        <h1 class="card-header" >Слово з теми:</h1>
        <h1 class="romanian-word">asd</h1>
        <button type="text" class="word-btn">subm</button>
        <button type="text" class="word-btn">subm</button>
        <button type="text" class="word-btn">subm</button>
    </div>
</div>
    `;
}

let mainBtn = document.querySelector(".trueFalse");
mainBtn.addEventListener("click", function () {
  cont.style.display = "none";
  render();
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function toUpperFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

render();
