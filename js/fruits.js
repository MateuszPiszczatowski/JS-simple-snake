"use strict";

import { setGridStyle } from "./snake.js";

function getRandomCoords(){
    return [Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1]
}

function checkIfFullCell(snake, coordsXY){
    const snakeHeadCoords = getGridCoords(snake.head);
    const snakeTailCoords = getGridCoords(snake.tail);
    const snakeBodyCoords = getGridCoords(snake.body);
    return snakeBodyCoords.includes(coordsXY) 
    || coordsXY === snakeHeadCoords
    || coordsXY === snakeTailCoords;
}

const initApple = (coordsXY) => {
    const apple = document.createElement("div");
    apple.classList.add("apple");
    setGridStyle(apple, coordsXY[0], coordsXY[1]);
    return apple;
  };
/*
function randomApple(squares){
    let coordX = Math.floor(Math.random() * 20) + 1;
    let coordY = Math.floor(Math.random() * 20) + 1;
    do { 
        let appleCoords = [coordX, coordY]; 
    } while(squares[appleIndex].classList.contains("snake")); 
    squares[appleIndex].classList.add("apple") 
    };
 
const initOrange = () => {
    const orange = document.createElement("div");
    orange.classList.add("orange");
    setGridStyle(orange, 10, 10);
    return orange;
    };

const initPear = () => {
    const pear = document.createElement("div");
    pear.classList.add("pear");
    setGridStyle(pear, 10, 10);
    return pear
};

const initCherries = () => {
    const cherries = document.createElement("div")
    cherries.classList.add("cherries")
    setGridStyle(cherries, 10, 10);
    return cherries
};
*/

export { initApple, checkIfFullCell, getRandomCoords }