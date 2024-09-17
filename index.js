let firstNumber;
let operator;
let lastNumber;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, op, num2) {
    if (op === "+") {
        return add(num1, num2);
    } else if (op === "-") {
        return subtract(num1, num2);
    } else if (op === "*") {
        return multiply(num1, num2);
    } else if (op === "/") {
        return divide(num1, num2);
    }
}

const display = document.querySelector(".display");

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const del = document.querySelector(".delete");

const dot = document.querySelector(".dot").addEventListener("click", () => {
    displayValue += ".";
    display.textContent = displayValue;
});

const clear = document.querySelector(".clear").addEventListener("click", () => {
    displayValue = "";
    display.textContent = displayValue;
});

// declaration of display value
let displayValue = "";

one.addEventListener("click", () => {
    displayValue += 1;
    display.textContent = displayValue;
});

del.addEventListener("click", () => {
    displayValue = displayValue.slice(0, -1);
    display.textContent = displayValue;
});

two.addEventListener("click", () => {
    displayValue += 2;
    display.textContent = displayValue;
})
three.addEventListener("click", () => {
    displayValue += 3;
    display.textContent = displayValue;
});
four.addEventListener("click", () => {
    displayValue += 4;
    display.textContent = displayValue;
});
five.addEventListener("click", () => {
    displayValue += 5;
    display.textContent = displayValue;
});
six.addEventListener("click", () => {
    displayValue += 6;
    display.textContent = displayValue;
});
seven.addEventListener("click", () => {
    displayValue += 7;
    display.textContent = displayValue;
});
eight.addEventListener("click", () => {
    displayValue += 8;
    display.textContent = displayValue;
});
nine.addEventListener("click", () => {
    displayValue += 9;
    display.textContent = displayValue;
});
zero.addEventListener("click", () => {
    displayValue += 0;
    display.textContent = displayValue;
});

const percentageSign = document.querySelector(".percentage").addEventListener("click", () => {
    displayValue += "%";
    display.textContent = displayValue;
});

const divideElement = document.querySelector(".divide").addEventListener("click", () => {
    displayValue += "/";
    display.textContent = displayValue;
});
const addElement = document.querySelector(".add").addEventListener("click", () => {
    displayValue += "+";
    display.textContent = displayValue;
});
const subtractElement = document.querySelector(".subtract").addEventListener("click", () => {
    displayValue += "-";
    display.textContent = displayValue;
});
const multiplyElement = document.querySelector(".multiply").addEventListener("click", () => {
    displayValue += "*";
    display.textContent = displayValue;
});
