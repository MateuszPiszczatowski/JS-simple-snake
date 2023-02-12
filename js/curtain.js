"use strict";
const addCurtain = (main) => {
  const curtain = document.createElement("div");
  curtain.classList.add("curtain");
  main.appendChild(curtain);
  return curtain;
};

const removeCurtain = (main, curtain) => {
  main.removeChild(curtain);
};
export { addCurtain, removeCurtain };
