"use strict";
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
export { initSnake, setGridStyle };
