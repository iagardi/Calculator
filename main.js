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
const float = document.querySelector(".btn--float");

const calculator = {
  botNum: "0",
  topNum: "",
  operator: "",
  evaluate() {
    switch (this.operator) {
      case "+":
        return String((Number(this.topNum) + Number(this.botNum))).slice(0, 12);
      case "-":
        return String((Number(this.topNum) - Number(this.botNum))).slice(0, 12);
      case "*":
        return String((Number(this.topNum) * Number(this.botNum))).slice(0, 12);
      case "/":
        return String((Number(this.topNum) / Number(this.botNum))).slice(0, 12);
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
  trim() {

  },
  display() {
    topDisplay.value = this.topNum + " " + this.operator;
    botDisplay.value = this.botNum;
    console.log(typeof this.topNum)
  },
};

// Buttons to record input

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    let value = number.innerHTML;
    const lastDigit = calculator.botNum.charAt(calculator.botNum.length - 1)
    if (calculator.botNum.length < 11) {
      if (lastDigit != 0 || calculator.botNum.length > 1) {
        calculator.botNum += value
      } else {
        calculator.botNum = value
      }
    }
    console.log(calculator.botNum)
    calculator.display();
  });
});

// Clear button

clear.addEventListener("click", () => {
  calculator.topNum = "";
  calculator.botNum = "0";
  calculator.operator = "";
  calculator.display()
});

// Del button - remove last number

del.addEventListener("click", (event) => {
  let current = calculator.botNum;
  calculator.botNum = current.slice(0, -1);
  if (!calculator.botNum) {
    calculator.botNum = "0";
  }
  botDisplay.value = calculator.botNum;
});

// Basic operators

basicOps.forEach((basicop) => {
  basicop.addEventListener("click", () => {
    const currentOp = basicop.innerHTML;
    const lastDigit = calculator.botNum.charAt(calculator.botNum.length - 1)
    if (lastDigit != ".") {
      if (!calculator.topNum) {
        calculator.topNum = calculator.botNum;
        calculator.operator = currentOp;
        calculator.botNum = "0";
        calculator.display()
      } else if (calculator.topNum && (calculator.botNum != "0")) {
        const calc = calculator.evaluate();
        calculator.topNum = calc;
        calculator.botNum = "";
        calculator.operator = currentOp;
        calculator.display()
      } else {
        const calc = calculator.evaluate();
        calculator.botNum = calc;
        calculator.topNum = "";
        calculator.display()
      }
    }
  });
});

// Equal button

equal.addEventListener("click", () => {
  if (calculator.operator) {
    const calc = calculator.evaluate();
    calculator.botNum = calc;
    calculator.topNum = "";
    botDisplay.value = calculator.botNum;
    topDisplay.value = calculator.topNum;
  }

});

// Plus/minus button

plusminus.addEventListener("click", () => {
  if (calculator.botNum != 0 && calculator.botNum) {
    let plusminus = calculator.plusminus();
    calculator.botNum = plusminus;
    botDisplay.value = calculator.botNum;
  }
});

// Percentage button

percent.addEventListener("click", () => {
  if (calculator.topNum && calculator.botNum) {
    const partial = calculator.botNum * (calculator.topNum / 100);
    calculator.botNum = partial;
    calculator.evaluate()
    calculator.display()
  } else {
    calculator.clear();
    calculator.display();
  }
});

// Float button

float.addEventListener("click", () => {
  if (botDisplay.value.indexOf(".") == -1) {
    calculator.botNum += "."
    calculator.display()
  }
})