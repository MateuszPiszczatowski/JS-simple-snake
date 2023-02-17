"use strict";

import { setGridStyle } from "./snake";



const initApple = () => {
    const apple = document.createElement("div");
    apple.classList.add("apple");
    setGridStyle(apple, 10, 10);
    return apple;
  };
  function randomApple(squares){ 
    do{ 
    appleIndex =Math.floor(Math.random() * squares.length) 
    }while(squares[appleIndex].classList.contains("snake")) 
    squares[appleIndex].classList.add("apple") 
    } 
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
}
const initCherries = () => {
    const cherries = document.createElement("div")
    cherries.classList.add("cherries")
    setGridStyle(cherries, 10, 10);
    return cherries
}