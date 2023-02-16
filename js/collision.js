"use strict";
import { getGridCoords } from "./snake.js";
import { initGame } from "./game-engine.js";


function checkIfFoodCollision(snake, apple) {
    const snakeHeadCoords = getGridCoords(snake.head);
    const appleCoords = getGridCoords(apple);
    return snakeHeadCoords === appleCoords;
};

function handleFoodCollision() {
    /* elongate snake */
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