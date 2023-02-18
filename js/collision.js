"use strict";
import { getGridCoords } from "./snake.js";
import { getScore, initGame } from "./game-engine.js";
import { initApple, getRandomCoords, checkIfFullCell } from "./fruits.js"

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

function handleFoodCollision(snake) {
    let food = document.getElementsByClassName("apple");
    food.remove();
    let newCoordsXY = getRandomCoords();
    while(checkIfFullCell(snake, newCoordsXY)) { 
        newCoordsXY = getRandomCoords(); }
    initApple(newCoordsXY);
    return ;
};

function checkIfWallCollision(coordsXY){
    const width = 20;
    const height = 20;
    return coordsXY[0] > width || coordsXY[0] <= 1
        || coordsXY[1] > height || coordsXY[1] <= 1;
};

function handleWallAndSnakeCollision(){
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
    return snakeBodyCoords.includes(snakeHeadCoords) || snakeHeadCoords === snakeTailCoords;

}
export { FOOD_COUNTER, checkIfFoodCollision, handleFoodCollision, checkIfWallCollision, checkSnakeCollision, handleWallAndSnakeCollision }