"use strict";
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