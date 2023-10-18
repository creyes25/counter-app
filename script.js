const btnDecrease = document.querySelector(".btn-decrease");
const btnIncrease = document.querySelector(".btn-increase");
const numDisplay = document.querySelector(".num");
const btnSave = document.querySelector(".save");
const results = document.querySelector(".results");
const btnReset = document.querySelector(".reset");
let counter = 0;
let savedVals = [];

function decreaseCounter() {
  counter--;
  numDisplay.innerText = counter;
  backgroundChange();
}

function increaseCounter() {
  counter++;
  numDisplay.textContent = counter;
  backgroundChange();
}

function backgroundChange() {
  if ((counter >= 1) & (counter < 5)) {
    document.body.style.backgroundColor = "rgb(141, 213, 245, 0.5)";
  } else if (counter >= 5) {
    document.body.style.backgroundColor = "rgba(89, 236, 4, 0.15)";
  } else if (counter < 0) {
    document.body.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
  } else if (counter === 0) {
    document.body.style.backgroundColor = "rgb(227, 227, 227, 0.3)";
  }
}

function saveNumber() {
  let currentVal = numDisplay.innerText;
  if (savedVals.includes(currentVal)) return;
  savedVals.push(currentVal);

  results.innerHTML = `Results: ${savedVals.join(", ")}`;
}

function reset() {
  counter = 0;
  numDisplay.textContent = counter;
  results.innerHTML = "Results: ";
  savedVals = [];
  backgroundChange();
}

btnDecrease.addEventListener("click", decreaseCounter);
btnIncrease.addEventListener("click", increaseCounter);
btnSave.addEventListener("click", saveNumber);
btnReset.addEventListener("click", reset);
