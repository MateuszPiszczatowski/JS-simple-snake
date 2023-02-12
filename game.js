"use strict";
window.onload = () => {
  const addCurtain = (main) => {
    const curtain = document.createElement("div");
    curtain.classList.add("curtain");
    main.appendChild(curtain);
    return curtain;
  };

  const removeCurtain = (main, curtain) => {
    main.removeChild(curtain);
  };

  const prepareGameBoard = () => {
    const main = document.querySelector(".main");
    setTimeout(removeCurtain, 3000, main, addCurtain(main));
    main.classList.add("main--game");
    const grid = document.querySelector(".main__grid");
    grid.style.display = "grid";
    return grid;
  };

  const setGridStyle = (element, row, column) => {
    element.style.gridRowStart = row - 1;
    element.style.gridRowEnd = row;
    element.style.gridColumnStart = column - 1;
    element.style.gridColumnEnd = column;
  };

  const initSnakeHead = () => {
    const head = document.createElement("div");
    head.classList.add("snake-head");
    setGridStyle(head, 10, 11);
    return head;
  };
  const initSnakeTail = () => {
    const tail = document.createElement("div");
    tail.classList.add("snake-tail");
    setGridStyle(tail, 12, 11);
    return tail;
  };
  const initSnakeBody = () => {
    const body = [];
    body.push(document.createElement("div"));
    body[0].classList.add("snake-body");
    setGridStyle(body[0], 11, 11);
    return body;
  };

  const initSnake = (grid) => {
    const snake = {
      head: initSnakeHead(),
      tail: initSnakeTail(),
      body: initSnakeBody(),
    };
    grid.appendChild(snake.head);
    grid.appendChild(snake.tail);
    grid.appendChild(snake.body[0]);
    return snake;
  };
  const gameEngine = (grid, snake) => {
    function endGame() {
      grid.innerHTML = "";
      grid.style.display = "none";
      document.querySelector(".main").classList.remove("main--game");
    }
    snake.head.addEventListener("click", endGame);
  };

  const initGame = () => {
    const grid = prepareGameBoard();
    const snake = initSnake(grid);
    gameEngine(grid, snake);
  };

  const playButton = document.querySelector(".play-button");
  playButton.addEventListener("click", initGame);
};
