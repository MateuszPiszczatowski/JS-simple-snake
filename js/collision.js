"use strict";
import { getGridCoords, setGridStyle, isSnakeHere } from "./snake.js";
import { getScore, initGame } from "./game-engine.js";
import { initApple, getRandomCoords, checkIfFullCell } from "./fruits.js";

let FOOD_COUNTER = 0;

export function resetCounter() {
  FOOD_COUNTER = 0;
}

function checkIfFoodCollision(snake, food) {
  const snakeHeadCoords = getGridCoords(snake.head);
  const foodCoords = getGridCoords(food);
  if (snakeHeadCoords[0] === foodCoords[0] && snakeHeadCoords[1] === foodCoords[1]) {
    FOOD_COUNTER = FOOD_COUNTER + 1;
    return FOOD_COUNTER;
  } else {
    return 0;
  }
}
function checkSnakeCollision(snake) {
  const snakeHeadCoords = getGridCoords(snake.head);
  return isSnakeHere(snake, snakeHeadCoords, true);
}
function handleFoodCollision(snake) {
  let food = document.querySelector(".apple");
  let newCoordsXY = getRandomCoords();
  while (isSnakeHere(snake, newCoordsXY)) {
    newCoordsXY = getRandomCoords();
  }
  setGridStyle(food, newCoordsXY[1], newCoordsXY[0]);
  return;
}

function checkIfWallCollision(coordsXY) {
  const width = 20;
  const height = 20;
  return coordsXY[0] > width || coordsXY[0] <= 1 || coordsXY[1] > height || coordsXY[1] <= 1;
}

function handleWallAndSnakeCollision() {
  const score = getScore();
  if (confirm("Game over, you looooooser!")) {
    alert("You've scored: " + score + ". Do better this time.");
    initGame();
  } else {
    alert("You've scored: " + score + ".");
  }
}

export {
  FOOD_COUNTER,
  checkIfFoodCollision,
  handleFoodCollision,
  checkIfWallCollision,
  checkSnakeCollision,
  handleWallAndSnakeCollision,
};
