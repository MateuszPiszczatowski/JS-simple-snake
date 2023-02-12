"use strict";
import { initGame } from "./game-engine.js";

const playButton = document.querySelector(".play-button");
playButton.addEventListener("click", initGame);
