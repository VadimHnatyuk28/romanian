import getData from "./getData.js";
const postsData = await getData;

function render() {
  let cont = document.querySelector(".root");
  let countOfTopic = postsData.length;
  let numberOfTopic = getRandomInt(0, countOfTopic - 1);
  let numberOfWord = getRandomInt(0, postsData[numberOfTopic].words.length - 1);

  // Rendering of word card
  cont.innerHTML = `
    <div class="content">

        <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
            <h1 >Слово з теми: ${postsData[numberOfTopic].topic}</h1>
            <h1 class="romanian-word">${postsData[numberOfTopic].words[numberOfWord].rom}</h1>
            </div>
            <div class="flip-card-back">
            <h1 >Слово з теми: ${postsData[numberOfTopic].topic}</h1>
            <h1 class="ukrainian-word">${postsData[numberOfTopic].words[numberOfWord].ukr}</h1>
            </div>
        </div>
        </div>
    </div>
    <button type="button" class="nextWord">Next</button> 
    `;
  // Nex word after click on btn
  let nextWord = document.querySelector(".nextWord");
  nextWord.addEventListener("click", function () {
    render();
    console.log(numberOfTopic, numberOfWord);
  });
}

// Here we get random number for rendering random word
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

render();