"use strict";

const buttonCheck = document.querySelector(".check");
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

let score = 20; //this is the initial score

buttonCheck.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent = "No Number! :(";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Yeeey! Correct Number!";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent =
      "Too high! (Never give up)";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Too low.. (sad face)";
    score--;
    document.querySelector(".score").textContent = score;
  }

  //disabling the check button if the score is under 0
  if (score <= 0) {
    buttonCheck.disabled = true;
    document.querySelector(".message").textContent =
      "You lost. Press the 'Again' button to continue playing! =)";
  }
});
