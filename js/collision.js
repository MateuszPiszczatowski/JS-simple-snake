"use strict";
import { getGridCoords, changeCoordsByDirection, buildSnakePart } from "./snake.js";
import { getScore, initGame } from "./game-engine.js";

let FOOD_COUNTER = 0;

function checkIfFoodCollision(snake, food = ["apple", "orange", "pear", "cherries"]) {
    const snakeHeadCoords = getGridCoords(snake.head);
    const foodCoords = getGridCoords(food);
    if (snakeHeadCoords === foodCoords) {
        return FOOD_COUNTER = FOOD_COUNTER + 1;
    }
    else {
        return 0;
    }
};

function handleFoodCollision(snake, food, grid) {
    const direction = snake.head.dataset.direction;
    const foodCoords = getGridCoords(food);
    const newSnakeHeadCoords = changeCoordsByDirection(foodCoords, direction);
    const newSnakeHead = buildSnakePart("snake-head", direction, newSnakeHeadCoords, grid);
    const newBodyPart = buildSnakePart("snake-body", direction, foodCoords, grid);
    return snake;
};

function checkIfWallCollision(snake, grid){
    const snakeHeadCoords = getGridCoords(snake.head);
    const width = grid.offsetWidth;
    const height = grid.offsetHeight;
    return snakeHeadCoords[0] >= width || snakeHeadCoords[0] <= width
        || snakeHeadCoords[1] >= height || snakeHeadCoords[1] <= height;
};

function handleWallCollision(){
    const score = getScore();
    if (confirm("Game over, you looooooser!")) {
        alert("You've scored: " + score + ". Do better this time.")
        initGame();
    }
    else {
        alert("You've scored: " + score + ".");
    };
};

function checkSnakeCollision(snake){
    const snakeHeadCoords = getGridCoords(snake.head);
    const snakeTailCoords = getGridCoords(snake.tail);
    const snakeBodyCoords = getGridCoords(snake.body);

}