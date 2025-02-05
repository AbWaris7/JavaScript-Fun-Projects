"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".number").textContent = secretNumber;

const clickFunction = function () {
  const guess = document.querySelector(".guess").value;
  document.querySelector(".message").textContent = "Correct Number";

  // when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No Number";

    // when palyer win the game
  } else if (guess == secretNumber) {
    document.querySelector(".message").textContent = "Correct Number";
    document.body.style.backgroundColor = "#50b347";
    document.querySelector(".number").style.width = "30rem";

    // when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High";
      score -= 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You are lost the game";
      document.querySelector(".score").textContent = 0;
    }
    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low";
      score -= 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You are lost";
      document.querySelector(".score").textContent = 0;
    }
  }
};
document.querySelector(".check").addEventListener("click", clickFunction);
