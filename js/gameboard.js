"use strict";
import { addCurtain, removeCurtain } from "./curtain.js";
const prepareGameBoard = () => {
  const main = document.querySelector(".main");
  setTimeout(removeCurtain, 3000, main, addCurtain(main));
  main.classList.add("main--game");
  const grid = document.querySelector(".main__grid");
  grid.style.display = "grid";
  return grid;
};

export { prepareGameBoard };
