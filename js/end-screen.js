"use strict";
import { initGame } from "./game-engine.js";

const showEndScreen = (score = 0) => {
  const endScreen = document.querySelector(".end-screen");
  endScreen.style.display = "block";
  let scoreText = document.querySelector(".score-text");
  if (!scoreText) {
    scoreText = document.createElement("h2");
    scoreText.classList.add("score-text");
    endScreen.prepend(scoreText);
  }
  scoreText.textContent = `Your score: ${score * 100} points`;
  const yesButton = document.querySelector(".play-again-button");
  yesButton.addEventListener("click", initGame);
  const quitButton = document.querySelector(".quit-button");
  quitButton.addEventListener("click", function () {
    window.close();
  });
};

export { showEndScreen };
