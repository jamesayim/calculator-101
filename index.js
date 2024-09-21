// declarations of global variables
let firstNumber = "";
let operator = "";
let secondNumber = "";
let result;
let shouldDisplay = false;

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

// querying the display element
const display = document.querySelector(".display");

// querying the number elements
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

// dot
const dot = document.querySelector(".dot").addEventListener("click", () => {
    displayValue += ".";
    display.textContent = displayValue;
});

// clear
const clear = document.querySelector(".clear").addEventListener("click", () => {
    displayValue = "";
    display.textContent = displayValue;
});

// declaration of display value and display result
let displayValue = "";
let displayResult;

// numbers
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

//percentage
const percentageSign = document.querySelector(".percentage").addEventListener("click", () => {
    displayValue += "%";
    display.textContent = displayValue;
});

//operators
const divideElement = document.querySelector(".divide"); 
// addEvent for divide element
divideElement.addEventListener("click", () => {
    displayValue += "/";
    operator = displayValue;
    display.textContent = displayValue;
});

const addElement = document.querySelector(".add"); 
// addEvent for add element
addElement.addEventListener("click", () => {
    displayValue += "+";
    operator = displayValue;
    display.textContent = displayValue;
});

const subtractElement = document.querySelector(".subtract"); 
// addEvent for subtract element
subtractElement.addEventListener("click", () => {
    displayValue += "-";
    operator = displayValue;
    display.textContent = displayValue;
});

const multiplyElement = document.querySelector(".multiply"); 
// addEvent for multiply element
multiplyElement.addEventListener("click", () => {
    displayValue += "*";
    operator = displayValue;
    display.textContent = displayValue;
});

// all operators elements
const opButtons = document.querySelectorAll(".op");

// all buttons for storing values in a variable and update display
opButtons.forEach(button => {
    button.addEventListener("click", () => {
        const fnContent = display.textContent;
        const opContent = display.textContent;
        firstNumber = fnContent.slice(0, -1);
        operator = opContent.slice(-1);
        displayValue = "";
    });
});

// Querying the "equals to" element
const equalElement = document.querySelector(".equal");

// Add event listener on equal button
equalElement.addEventListener("click", () => {
    // Capture the content of the display as the second number
    secondNumber = display.textContent;

    //  Converting numbers strings to actual numbers
    let fNumber = Number(firstNumber);
    let sNumber = Number(secondNumber);

    //  Call the operate function store the result
    result = operate(fNumber, operator, sNumber);

    // Update the display with the result 
    display.textContent = result;

    // Use the result as the first number for next calculation
    firstNumber = result.toString();
    operator = "";
    displayValue = "";
});
