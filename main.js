// Declare variables and calculate function

const topDisplay = document.querySelector(".display-top");
const botDisplay = document.querySelector(".display-bot");

const numbers = document.querySelectorAll(".btn--num");
const basicOps = document.querySelectorAll(".btn--ops");
const clear = document.querySelector(".btn--clear");
const del = document.querySelector(".btn--del");
const equal = document.querySelector(".btn--equal");
const plusminus = document.querySelector(".btn--plusminus");

let operator = "";
let topNum = 0;
let botNum = 0;

const calculate = (firstNum, operator, secondNum = firstNum) => {
  switch (operator.toString()) {
    case "+":
      return parseInt(firstNum) + parseInt(secondNum);
    case "-":
      return parseInt(firstNum) - parseInt(secondNum);
    case "*":
      return parseInt(firstNum) * parseInt(secondNum);
    case "/":
      return parseInt(firstNum) / parseInt(secondNum);
  }
  // if (operator == "+") {
  //   return parseInt(firstNum) + parseInt(secondNum);
  // }
};

// Buttons to push numbers to bot display

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    const value = number.innerHTML;
    const length = botDisplay.innerHTML.length;
    // console.log(value); // testing during progress

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
  basicop.addEventListener("click", () => {
    // Record current operator into global variable
    const currentOp = basicop.innerHTML;
    operator = currentOp;

    topNum = parseInt(botDisplay.innerHTML);
    console.log(topNum);
    topDisplay.innerHTML = topNum + currentOp;
    botDisplay.innerHTML = "0";
  });
});

// Equal button to operate basic tasks

equal.addEventListener("click", () => {
  botNum = botDisplay.innerHTML;
  const outcome = calculate(topNum, operator, botNum);
  botDisplay.innerHTML = outcome;
  topDisplay.innerHTML = topNum + operator + botNum;
});

// Plus/minus button to work

plusminus.addEventListener("click", (event) => {
  if (botDisplay.innerHTML != 0) {
    botNum = parseInt(botDisplay.innerHTML);
    botDisplay.innerHTML = botNum * -1;
  }
});
