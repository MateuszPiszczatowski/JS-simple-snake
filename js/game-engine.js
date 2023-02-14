"use strict";
import { initSnake, moveSnake } from "./snake.js";
import { prepareGameBoard } from "./gameboard.js";

const KEY_CONF = {
  w: "up",
  W: "up",
  s: "down",
  S: "down",
  a: "left",
  A: "left",
  d: "right",
  D: "right",
};

const gameEngine = (grid, snake) => {
  const keyPressedEvent = (event) => {
    const pressedKey = event.key;
    if (Object.hasOwn(KEY_CONF, pressedKey)) {
      snake.head.dataset.direction = KEY_CONF[event.key];
    }
  };
  const body = document.querySelector("body");
  body.addEventListener("keydown", keyPressedEvent);
  const interval = setInterval(moveSnake, 300, snake, grid);
  function endGame() {
    grid.innerHTML = "";
    grid.style.display = "none";
    document.querySelector(".main").classList.remove("main--game");
    body.removeEventListener("keydown", keyPressedEvent);
    clearInterval(interval);
  }
  snake.head.addEventListener("click", endGame);
};

const initGame = () => {
  const grid = prepareGameBoard();
  const snake = initSnake(grid);
  setTimeout(() => {
    gameEngine(grid, snake);
  }, 3000);
};

export { initGame };
