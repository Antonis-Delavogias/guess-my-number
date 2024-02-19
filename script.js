"use strict";

const buttonCheck = document.querySelector(".check");
const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20; //this is the initial score
let highScore = 1; //default highscore of the user

buttonCheck.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //when no input
  if (!guess) {
    document.querySelector(".message").textContent = "No Number! :(";

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent =
      "Yeeey! Correct Number! (Press Again! to continue playing)";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".highscore").textContent = highScore;
    highScore++;
    buttonCheck.disabled = true;
    document.querySelector("body").style.backgroundColor = "#60b347";

    //when guess is too high
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent =
      "Too high! (Never give up)";
    score--;
    document.querySelector(".score").textContent = score;

    //when guess is too low
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Too low.. (sad face)";
    score--;
    document.querySelector(".score").textContent = score;
  }
  //when the player loses
  if (score === 0) {
    buttonCheck.disabled = true;
    document.querySelector(".message").textContent =
      "You lost. (Press Again! to continue playing)";
    document.querySelector("body").style.backgroundColor = "#b30000";
  }
});
