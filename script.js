"use strict";

const buttonCheck = document.querySelector(".check");
const buttonAgain = document.querySelector(".again");
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20; //this is the initial score
let highScore = 0; //default highscore of the user

buttonCheck.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //when no input
  if (!guess) {
    document.querySelector(".message").textContent = "No Number! :(";

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent =
      "Yeeey! Correct Number! (Press Again! to continue playing)";
    document.querySelector(".number").textContent = secretNumber;
    buttonCheck.disabled = true;
    document.querySelector("body").style.backgroundColor = "#60b347";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber
          ? "Too high! (Never give up)"
          : "Too low.. (sad face)";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      buttonCheck.disabled = true;
      document.querySelector(".message").textContent =
        "You lost. (Press Again! to continue playing)";
      document.querySelector("body").style.backgroundColor = "#b30000";
      document.querySelector(".number").textContent = secretNumber;
    }
  }

  //again button
  buttonAgain.addEventListener("click", function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector(".number").textContent = secretNumber;
    buttonCheck.disabled = false;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector("body").style.background = "#222";
    document.querySelector(".guess").value = "";
  });
});
