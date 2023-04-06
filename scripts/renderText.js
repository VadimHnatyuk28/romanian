async function getData() {
  const response = await fetch("text.json");
  const data = await response.json();
  return data;
}

const postsData = await getData();
let count = 0;
let cont = document.querySelector(".root");
let countOfTexts = postsData.length;

function render() {
  cont.style.display = "block";
  cont.innerHTML = `<div class="word-content"><div>`;
  postsData.forEach((element) => {
    console.log(element);
    let card = `<div class="text-card">
        <h1>${toUpperFirstLetter(element.title)}</h1>
        <h2>Amount of sentences ${element.sentence.length}</h2>
        <button class="text-btn"data-number=${postsData.indexOf(
          element
        )}>Open</button>
      </div>`;
    document.querySelector(".word-content").innerHTML += card;
  });

  let textBtns = document.querySelectorAll(".text-btn");
  textBtns.forEach((element) => {
    element.addEventListener("click", () => {
      console.log(element.attributes[1].nodeValue);
      cont.style.display = "none";
      renderCurrentText(element.attributes[1].nodeValue);
    });
  });
}

function toUpperFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

let mainBtn = document.querySelector(".text");
mainBtn.addEventListener("click", function () {
  cont.style.display = "none";
  render();
});

function renderCurrentText(number) {
  let countOfSentence = 1;
  cont.style.display = "block";
  cont.innerHTML = `<h1>${toUpperFirstLetter(postsData[number].title)}</h1>`;
  cont.innerHTML += `<div class="text-container"></div>`;
  let textCont = document.querySelector(".text-container");
  postsData[number].sentence.forEach((element) => {
    textCont.innerHTML += `<p class="text-current-sentence">${countOfSentence} ${element}</p>`;
    countOfSentence++;
  });
  cont.innerHTML += `<input type="button" value="Submit" class="subm" />
  </form>`;

  let subm = document.querySelector(".subm");
  let inps = document.querySelectorAll(".input_value");

  subm.addEventListener("click", (e) => {
    inps.forEach((element) => {
      console.log(element.attributes[2].nodeValue);
      console.log(element.attributes[3].nodeValue);
      if (element.attributes[3].nodeValue == element.value) {
        element.className = "input_value true";
        element.readOnly = true;
      } else {
        element.className = "input_value false";
      }
    });
  });
}

let click = document.querySelector(".burger.navigation.text");
let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
click.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
  render();
});
