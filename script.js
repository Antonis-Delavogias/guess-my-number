"use strict";

const buttonCheck = document.querySelector(".check");
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

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
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Too low.. (sad face)";
  }
});
