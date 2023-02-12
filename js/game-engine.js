"use strict";
import { initSnake } from "./snake.js";
import { prepareGameBoard } from "./gameboard.js";

const gameEngine = (grid, snake) => {
  function endGame() {
    grid.innerHTML = "";
    grid.style.display = "none";
    document.querySelector(".main").classList.remove("main--game");
  }
  snake.head.addEventListener("click", endGame);
};

const initGame = () => {
  const grid = prepareGameBoard();
  const snake = initSnake(grid);
  gameEngine(grid, snake);
};

export { initGame };
