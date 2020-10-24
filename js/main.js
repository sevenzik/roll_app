let cubeNum = 0;
const rollBtn = document.getElementById("roll");
const rollSum = document.querySelector(".sum");
const addBtn = document.querySelector(".dice.add");

function roll() {
  const diceAll = [...document.querySelectorAll(".dice:not(.add)")];
  let all = 0;
  diceAll.forEach(dice => {
    if (!dice.classList.contains("rolling")) {
      let i = 0;
      const interval = setInterval(function () {
        if (i <= 60) {
          dice.innerText = getRandomNum();
        } else {
          clearInterval(interval);
          const n = getRandomNum();
          dice.innerText = n;
          all += n;
          rollSum.innerText = "Sum: " + all
        }
        i++;
      }, 20);
    }
  })
}

function add() {
  const newDice = document.createElement("div");
  newDice.classList.add("dice");
  newDice.innerText = "1";
  addBtn.parentNode.insertBefore(newDice, addBtn);
  newDice.addEventListener('click', () => {
    newDice.remove();
    cubeNum -= 1;
  })
  cubeNum += 1;
}

function getRandomNum() {
  return Math.floor(Math.random() * 6) + 1;
}

rollBtn.addEventListener("click", () => roll());
addBtn.addEventListener("click", () => add());
