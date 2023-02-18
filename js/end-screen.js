"use strict";
import { initGame } from "./game-engine.js";

const showEndScreen = () => {
    const endScreen = document.querySelector(".end-screen");
    endScreen.style.display = "block";
    const yesButton = document.querySelector(".play-again-button");
    yesButton.addEventListener("click", initGame);
    const quitButton = document.querySelector(".quit-button");
    quitButton.addEventListener("click", function() { window.close() }); 
  };

  export { showEndScreen };
