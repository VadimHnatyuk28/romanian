import getData from "./getData.js";
const postsData = await getData;
let cont = document.querySelector(".root");
let count = 0;

function render() {
  let countOfTopic = postsData.length;

  let correctNumberOfTopic = getRandomInt(0, countOfTopic - 1);
  let correctNumberOfWord = getRandomInt(
    0,
    postsData[correctNumberOfTopic].words.length - 1
  );

  let inCorrectFirstNumberOfTopic = getRandomInt(0, countOfTopic - 1);
  let inCorrectFirstNumberOfWord = getRandomInt(
    0,
    postsData[inCorrectFirstNumberOfTopic].words.length - 1
  );

  let inCorrectSecondNumberOfTopic = getRandomInt(0, countOfTopic - 1);
  let inCorrectSecondNumberOfWord = getRandomInt(
    0,
    postsData[inCorrectSecondNumberOfTopic].words.length - 1
  );

  let trueArray = shuffle([
    postsData[correctNumberOfTopic].words[correctNumberOfWord],
    postsData[inCorrectFirstNumberOfTopic].words[inCorrectFirstNumberOfWord],
    postsData[inCorrectSecondNumberOfTopic].words[inCorrectSecondNumberOfWord],
  ]);

  const [first, second, third] = trueArray;

  cont.style.display = "block";

  cont.innerHTML = `
<div class="content">
    <div class="card">
        <h1 class="card-header" >Слово з теми: <span class="bold">${toUpperFirstLetter(
          postsData[correctNumberOfTopic].topic
        )}</span ></h1>
        <h1 class="romanian-word">${toUpperFirstLetter(
          postsData[correctNumberOfTopic].words[correctNumberOfWord].rom
        )}</h1>
        <button type="text" class="word-btn" data="${
          first.rom
        }">${toUpperFirstLetter(first.ukr)}</button>
        <button type="text" class="word-btn" data="${
          second.rom
        }" >${toUpperFirstLetter(second.ukr)}</button>
        <button type="text" class="word-btn" data="${
          third.rom
        }">${toUpperFirstLetter(third.ukr)}</button>
    </div>
</div>
<h2 class="rating">Ваш рахунок становить ${count} </h2>
    `;

  let btns = document.querySelectorAll(".word-btn");
  btns.forEach((element) => {
    element.addEventListener("click", () => {
      console.log(element.attributes[2].nodeValue);
      let trueWord = document.querySelector(".romanian-word");
      console.log(trueWord.textContent);
      let rate = document.querySelector(".rating");

      if (
        element.attributes[2].nodeValue.toLowerCase() ==
        trueWord.textContent.toLocaleLowerCase()
      ) {
        count++;
        alert("good");
        render();
      } else {
        count--;
        alert("bad");
        rate.textContent = `Ваш рахунок становить ${count} `;
      }
    });
  });
}

function shuffle(arr) {
  var j, temp;
  for (var i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
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

let click = document.querySelector(".burger.navigation.trueFalse");
let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
click.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
  render();
});
