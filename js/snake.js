"use strict";

const MOVE_MODIFIERS_XY = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] };
const DIRECTION_TRANSFORMS = { up: 0, right: 90, down: 180, left: 270 };

const setGridStyle = (element, row, column) => {
  element.style.gridRowStart = row - 1;
  element.style.gridRowEnd = row;
  element.style.gridColumnStart = column - 1;
  element.style.gridColumnEnd = column;
};

const buildSnakePart = (className, direction, coordsXY, grid) => {
  const snakePart = document.createElement("div");
  snakePart.classList.add(className);
  snakePart.dataset.direction = direction;
  setGridStyle(snakePart, coordsXY[1], coordsXY[0]);
  grid.appendChild(snakePart);
  return snakePart;
};

const initSnakeHead = (grid) => {
  return buildSnakePart("snake-head", "up", [11, 10], grid);
};

const initSnakeTail = (grid) => {
  return buildSnakePart("snake-tail", "up", [11, 12], grid);
};
const initSnakeBody = (grid) => {
  const body = [buildSnakePart("snake-body", "up", [11, 11], grid)];
  return body;
};

const initSnake = (grid) => {
  const snake = {
    head: initSnakeHead(grid),
    tail: initSnakeTail(grid),
    body: initSnakeBody(grid),
  };
  return snake;
};

const getGridCoords = (element) => {
  return [Number(element.style.gridRowEnd), Number(element.style.gridColumnEnd)];
};

const getGridStartCoords = (element) => {
  return [Number(element.style.gridRowStart), Number(element.style.gridColumnStart)];
}; 

const changeCoordsByDirection = (coordsXY, direction) => {
  return [
    coordsXY[0] + MOVE_MODIFIERS_XY[direction][1],
    coordsXY[1] + MOVE_MODIFIERS_XY[direction][0],
  ];
};

const moveSnakePart = (part, direction) => {
  const oldDirection = part.dataset.direction;
  const newCoords = changeCoordsByDirection(getGridCoords(part), oldDirection);
  setGridStyle(part, newCoords[0], newCoords[1]);
  part.dataset.direction = direction;
  part.style.transform = `rotate(${DIRECTION_TRANSFORMS[direction]}deg)`;
  return oldDirection;
};

const moveSnake = (snake, grid, enlongate = false) => {
  let oldDirection = moveSnakePart(snake.head, snake.head.dataset.direction);
  const lastBodyPartCoords = getGridCoords(snake.body[snake.body.length - 1]);
  snake.body.forEach((bodyPart) => {
    oldDirection = moveSnakePart(bodyPart, oldDirection);
  });
  if (enlongate) {
    snake.body.push(buildSnakePart("snake-body", oldDirection, lastBodyPartCoords, grid));
  } else {
    moveSnakePart(snake.tail, oldDirection);
  }
};

export { initSnake, moveSnake, buildSnakePart, getGridCoords, getGridStartCoords, setGridStyle };