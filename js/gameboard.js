"use strict";
import { addCurtain, removeCurtain } from "./curtain.js";
const prepareGameBoard = () => {
  const main = document.querySelector(".main");
  const snake = document.querySelectorAll(".welcome");
  snake.forEach((el) => main.removeChild(el));
  const endScreen = document.querySelector(".end-screen");
  endScreen.style.display = "none";
  const button = document.querySelector(".play-button");
  if (button !== null) 
  {
    document.querySelector(".header").removeChild(button);
  }
  setTimeout(removeCurtain, 3000, main, addCurtain(main));
  main.classList.add("main--game");
  const grid = document.querySelector(".main__grid");
  grid.style.display = "grid";
  return grid;
};

export { prepareGameBoard };
