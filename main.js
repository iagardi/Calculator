// Declare variables for buttons and display
const botDisplay = document.querySelector(".display-bot");
const topDisplay = document.querySelector(".display-top");

const numbers = document.querySelectorAll(".btn--num");
const basicOps = document.querySelectorAll(".btn--ops");
const clear = document.querySelector(".btn--clear");
const del = document.querySelector(".btn--del");

let operator = "";
let topNum = 0;

// Buttons to push numbers to bot display
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    const value = number.innerHTML;
    const length = botDisplay.innerHTML.length;
    console.log(value); // testing during progress

    if (botDisplay.innerHTML == 0) {
      botDisplay.innerHTML = value;
    } else if (length < 8) {
      botDisplay.innerHTML += value;
    }
  });
});

// Clear button
clear.addEventListener("click", (event) => {
  // Reset both displays
  topDisplay.innerHTML = "0";
  botDisplay.innerHTML = "0";
  // Reset global variables
  operator = "";
  topNum = 0;
});

// Del button - remove last number

del.addEventListener("click", (event) => {
  if (botDisplay.innerHTML != 0) {
    let currentNum = botDisplay.innerHTML;
    botDisplay.innerHTML = currentNum.slice(0, -1);
  }
  if (botDisplay.innerHTML == "") {
    botDisplay.innerHTML = "0";
  }
});

// Basic operators -> accept entry and move value + operator to top display
basicOps.forEach((basicop) => {
  basicop.addEventListener("click", (event) => {
    // Record current operator into global variable
    const currentOp = basicop.innerHTML;
    operator = currentOp;

    const firstNum = botDisplay.innerHTML;
    console.log(firstNum);
    topDisplay.innerHTML = firstNum + currentOp;
    botDisplay.innerHTML = "0";
  });
});
