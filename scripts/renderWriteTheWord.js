import getData from "./getData.js";
const postsData = await getData;
let count = 0;
let cont = document.querySelector(".root");

function render() {
  let countOfTopic = postsData.length;
  let numberOfTopic = getRandomInt(0, countOfTopic - 1);
  let numberOfWord = getRandomInt(0, postsData[numberOfTopic].words.length - 1);

  cont.style.display = "block";

  cont.innerHTML = `
<div class="content">
    <div class="card">
        <h1 class="card-header" >Слово з теми: ${toUpperFirstLetter(
          postsData[numberOfTopic].topic
        )}</h1>
        <h1 class="romanian-word">${toUpperFirstLetter(
          postsData[numberOfTopic].words[numberOfWord].rom
        )}</h1>
        <input type="text" class="inp-word" data-ukr="${
          postsData[numberOfTopic].words[numberOfWord].ukr
        }"/>
    </div>
</div>
<button class="submit">asd</button>
<input type="submit" value="Podskazka" class="writeSubmitHint" style="display:none">
<h2 class="rating">У вас ${count} балів</h2>

    `;
  let btn = document.querySelector(".submit");
  let inp = document.querySelector(".inp-word");
  btn.addEventListener("click", () => {
    if (
      inp.attributes[2].textContent.toLocaleLowerCase() ==
      inp.value.toLocaleLowerCase()
    ) {
      count++;
      alert("good");
      render();
    } else {
      alert("нажаль ні, скористайтесь пісдказкою");
      let writeSubmitHint = document.querySelector(".writeSubmitHint");
      writeSubmitHint.style.display = "inline";
      writeSubmitHint.addEventListener("click", () => {
        alert(inp.attributes[2].textContent);
        render();
      });
    }
  });
}

let mainBtn = document.querySelector(".write");
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
