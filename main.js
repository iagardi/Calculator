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

const basics = {
  botNum: "0",
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
    this.botNum = "0";
    this.topNum = "";
    this.operator = "";
  },
  display() {
    topDisplay.innerHTML = this.topNum + " " + this.operator;
    botDisplay.innerHTML = this.botNum.substr(0, 8);
  },
};

// Buttons to record input

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    let value = number.innerHTML;

    if (!basics.botNum || basics.botNum == "0") {
      basics.botNum = value;
    } else if (basics.botNum.length < 8) {
      basics.botNum += value;
    }
    basics.display();
  });
});

// Clear button

clear.addEventListener("click", (event) => {
  basics.topNum = "";
  basics.botNum = "0";
  basics.operator = "";
  topDisplay.innerHTML = basics.topNum;
  botDisplay.innerHTML = basics.botNum;
});

// Del button - remove last number

del.addEventListener("click", (event) => {
  let current = basics.botNum;
  basics.botNum = current.slice(0, -1);
  if (!basics.botNum) {
    basics.botNum = "0";
  }
  botDisplay.innerHTML = basics.botNum;
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
