# Feedback

_Right click on the file and click Open Preview or `ctrl/cmd + shift + v` to open preview_

## Goals

1.  Working Calculator:

    - Yes its lots of interesting bits of functionality. You give it inputs you get outputs.
    - A couple of the features aren't working as expected but I look into that at the bottom.

2.  Practice using Git / Github Flow:

    - Close, 2 branches 13 meaningful commits.
    - Your breaking down of each commit is a masterstroke, if it helps you keep it up just aim for a couple more.

3.  Application of what you are learning

    - 110%, minimal design that scales well on different view-ports. A good application of all of different parts we have been using with JS.
    - You want to keep your main.scss file in your styles folder. So your styles are self contained and it is just your css file at the root of the directory.

---

## Specification

1. PSEUDOCODE - done

   - Yes this is great to see. Try breaking it down even more see if that helps?
   - The only thing now is to tidy it up, keep the pseudo code just add it to is own section in your readme.
     - Perhaps it is called "break down" and you basically say you were working on decomposing a problem.

2. README - done

   - Yes it is done, I think it just needs a couple of features.
     - Setup? how do you get it running
     - How do you run your tests?
     - A little bit of spiel about your commit log, how you planned out your commits?

3. 15 commits - close 13

4. EVAL? - done

5. CAN'T EXPLAIN IT, YOU CANT USE IT - done

   - All good in terms of your code it is logical and I can see your thought process as went through the code.

---

## Overall

A solid calculator in terms of functionality. Lots of operations to choose from which is really nice. A good use of a object for your basic operations.

---

## To work on

This is just constructive so you do not have to implement it, its just to tie it up with bows and ribbons.

## Bugs

- / 0 gives you Infinty
- decimal point?
- % not working as expected

## House keeping

- Some of your names are not camelCased e.g plusminus -> plusMinus
- More descriptive names basics? -> calculator

## Dry

There is a couple of places that you repeat logic / can simplify it

Your code

```js
// lines 83 - 107
basicOps.forEach(basicop => {
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
```

Could be

```js
basicOps.forEach(basicOp => {
  basicOp.addEventListener("click", () => {
    const currentOp = basicOp.innerHTML;
    const calc = basics.evaluate();
    if (!basics.topNum) {
      basics.topNum = basics.botNum;
      basics.operator = currentOp;
      basics.botNum = "0";
    } else if (basics.topNum && basics.botNum != "0") {
      basics.topNum = calc;
      basics.operator = currentOp;
      basics.botNum = "0";
    } else {
      basics.botNum = calc;
      basics.topNum = "";
    }

    botDisplay.innerHTML = basics.botNum;
    topDisplay.innerHTML = basics.topNum + " " + basics.operator;
  });
});
```
