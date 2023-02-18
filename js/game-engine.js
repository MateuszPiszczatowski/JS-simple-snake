"use strict";
import { getGridStartCoords, initSnake, moveSnake } from "./snake.js";
import { prepareGameBoard } from "./gameboard.js";
import {checkIfFoodCollision, checkIfWallCollision, handleFoodCollision, handleWallAndSnakeCollision} from "./collision.js";
import { showEndScreen } from "./end-screen.js";

const KEY_CONF = {
  w: "up",
  s: "down",
  a: "left",
  d: "right",
};

const gameEngine = (grid, snake) => {
  const keyPressedEvent = (event) => {
    const pressedKey = event.key.toLowerCase();
    if (Object.hasOwn(KEY_CONF, pressedKey)) {
      snake.head.dataset.direction = KEY_CONF[pressedKey];
    }
  };
  const body = document.querySelector("body");
  body.addEventListener("keydown", keyPressedEvent);
  // const interval = setInterval(moveSnake, 300, snake, grid);
  let elongate = false;
  const interval = setInterval( () => {
    moveSnake(snake, grid, elongate);
    console.log(getGridStartCoords(snake.head));
    if(checkIfWallCollision(getGridStartCoords(snake.head))){ endGame() };
    if(checkIfFoodCollision(snake, food)){elongate = true; handleFoodCollision(food);}
    }, 300);
  function endGame() {
    grid.innerHTML = "";
    grid.style.display = "none";
    document.querySelector(".main").classList.remove("main--game");
    body.removeEventListener("keydown", keyPressedEvent);
    showEndScreen();
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

const getScore = () => {
  return FOOD_COUNTER * 10;
};


export { initGame, getScore };