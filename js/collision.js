"use strict";
import { getGridCoords } from "./snake.js";
import { initGame } from "./game-engine.js";


function checkIfFoodCollision(snake, food = ["apple", "orange", "pear", "cherries"]) {
    const snakeHeadCoords = getGridCoords(snake.head);
    const foodCoords = getGridCoords(food);
    return snakeHeadCoords === foodCoords;
};

function handleFoodCollision(snake, food, grid) {
    const direction = snake.head.dataset.direction;
    const foodCoords = getGridCoords(food);
    const newSnakeHeadCoords = changeCoordsByDirection(foodCoords, direction);
    const newSnakeHead = buildSnakePart("snake-head", direction, newSnakeHeadCoords, grid);
    const newBodyPart = buildSnakePart("snake-body", direction, foodCoords, grid);
    return snake;
};

function checkIfWallCollision(grid){
    const snakeHeadCoords = getGridCoords(snake.head);
    const width = grid.offsetWidth;
    const height = grid.offsetHeight;
    return snakeHeadCoords[0] >= width || snakeHeadCoords[0] <= width
        || snakeHeadCoords[1] >= height || snakeHeadCoords[1] <= height;
};

function handleWallCollision(){
    if (confirm("Game over, you looooooser!")) {initGame()}
    else {
        /* displayScore() */
    };
};

function checkSnakeCollision(snake){
    const snakeHeadCoords = getGridCoords(snake.head);
    const snakeTailCoords = getGridCoords(snake.tail);
    const snakeBodyCoords = getGridCoords(snake.body);

}