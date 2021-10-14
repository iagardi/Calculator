// Declare variables and calculate function

const topDisplay = document.querySelector(".display-top");
const botDisplay = document.querySelector(".display-bot");

const numbers = document.querySelectorAll(".btn--num");
const basicOps = document.querySelectorAll(".btn--ops");
const clear = document.querySelector(".btn--clear");
const del = document.querySelector(".btn--del");
const equal = document.querySelector(".btn--equal");
const plusminus = document.querySelector(".btn--plusminus");
const percent = document.querySelector(".btn--percent");
const numAndOp = document.querySelectorAll(".btn--num, .btn--ops");

const calculator = {
  botNum: "",
  topNum: "",
  operator: "",
  evaluate() {
    switch (this.operator) {
      case "+":
        return Number(this.topNum) + Number(this.botNum);
      case "-":
        return Number(this.topNum) - Number(this.botNum);
      case "*":
        return Number(this.topNum) * Number(this.botNum);
      case "/":
        return Number(this.topNum) / Number(this.botNum);
    }
  },
  plusminus() {
    return this.botNum * -1;
  },
  clear() {
    this.botNum = "";
    this.topNum = "";
    this.operator = "";
  },
  display() {
    topDisplay.value = this.topNum + " " + this.operator;
    botDisplay.value = this.botNum;
  },
};

// Buttons to record input

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    let value = number.innerHTML;
    calculator.botNum ? calculator.botNum += value : calculator.botNum = value
    calculator.display();
  });
});

// Clear button

clear.addEventListener("click", () => {
  calculator.topNum = "";
  calculator.botNum = "";
  calculator.operator = "";
  calculator.display()
});

// Del button - remove last number

del.addEventListener("click", (event) => {
  let current = calculator.botNum;
  calculator.botNum = current.slice(0, -1);
  if (!calculator.botNum) {
    calculator.botNum = "";
  }
  botDisplay.value = calculator.botNum;
});

// Basic operators

basicOps.forEach((basicop) => {
  basicop.addEventListener("click", () => {
    const currentOp = basicop.innerHTML;
    if (!basics.topNum) {
      basics.topNum = basics.botNum;
      basics.operator = currentOp;
      basics.botNum = "0";
      topDisplay.innerHTML = basics.topNum + " " + basics.operator;
      botDisplay.innerHTML = basics.botNum;
    } else if (basics.topNum && basics.botNum != "0") {
      const calc = basics.evaluate();
      basics.topNum = calc;
      basics.botNum = "0";
      basics.operator = currentOp;
      topDisplay.innerHTML = basics.topNum + " " + basics.operator;
      botDisplay.innerHTML = basics.botNum;
    } else {
      const calc = basics.evaluate();
      basics.botNum = calc;
      basics.topNum = "";
      topDisplay.innerHTML = basics.topNum + " " + basics.operator;
      botDisplay.innerHTML = basics.botNum;
    }
  });
});

// Equal button

equal.addEventListener("click", () => {
  const calc = basics.evaluate();
  basics.botNum = calc;
  basics.topNum = "";
  botDisplay.innerHTML = basics.botNum;
  basics.topNum = "";
  topDisplay.innerHTML = basics.topNum;
});

// Plus/minus button

plusminus.addEventListener("click", (event) => {
  if (basics.botNum != 0) {
    let plusminus = basics.plusminus();
    basics.botNum = plusminus;
    botDisplay.innerHTML = basics.botNum;
  }
});

// Percentage button

percent.addEventListener("click", (event) => {
  if (basics.topNum && basics.botNum) {
    let partial = basics.botNum * (basics.topNum / 100);
    basics.botNum = partial;
    topDisplay.innerHTML = basics.topNum + " " + basics.operator;
    botDisplay.innerHTML = basics.botNum;
  } else {
    basics.clear();
    basics.display();
  }
});

// Float button