//  Declarations of global variables
let firstNumber = null;
let operator = null;
let secondNumber = null;
let result = null;
let hasCalculated;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

//  Operation function
function operate(num1, op, num2 = 0) {
    switch (op) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "/":
            return num2 !== 0 ? divide(num1, num2) : "Error";
        case "%":
            return num1 / 100;
        case "*":
            return multiply(num1, num2);
        default:
            return "Error";
    }
}

//  Querying the display element
const display = document.querySelector(".display");

//  Querying the number elements
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

//  Decimal point
const dot = document.querySelector(".dot").addEventListener("click", () => {
    displayValue += ".";
    display.textContent = displayValue;
});

//  Capturing clear button and listening to it's event by click
const clear = document.querySelector(".clear").addEventListener("click", () => {
    displayValue = "";
    display.textContent = "";
    firstNumber = null;
    secondNumber = null;
    operator = null;
    result = null;
    hasCalculated = false;
});

//  Declaration of display value variable
let displayValue = "";

//  Numbers
one.addEventListener("click", () => {
    displayValue += 1;
    display.textContent = displayValue;
});

del.addEventListener("click", () => {
    displayValue = display.textContent.slice(0, -1);
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

//  Percentage
const percentageSign = document.querySelector(".percentage").addEventListener("click", () => {
    if (displayValue !== "") {
        let currenNumber = parseFloat(displayValue);
        result = currenNumber / 100;
        display.textContent = result;
        firstNumber = result;
        operator = "%";
    }
});

//  Operators
const divideElement = document.querySelector(".divide");

//  addEvent for divide element
divideElement.addEventListener("click", () => {
    displayValue += "/";
    operator = "/";
    display.textContent = displayValue;
});

// Captured the addElement
const addElement = document.querySelector(".add"); 

// addEvent for add element
addElement.addEventListener("click", () => {
    displayValue += "+";
    operator = "+";
    display.textContent = displayValue;
});

const subtractElement = document.querySelector(".subtract"); 
// addEvent for subtract element
subtractElement.addEventListener("click", () => {
    displayValue += "-";
    operator = "-";
    display.textContent = displayValue;
});

const multiplyElement = document.querySelector(".multiply");

// addEvent for multiply element
multiplyElement.addEventListener("click", () => {
    displayValue += "*";
    operator = "*";
    display.textContent = displayValue;
});

//  All operators elements
const opButtons = document.querySelectorAll(".op");

//  All buttons for storing values in a variable and update display
opButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (!hasCalculated && firstNumber === null) {
            firstNumber = display.textContent;
        };
        operator = button.textContent;
        displayValue = "";
        display.textContent = operator; // optionally showing the operator
    });
});

//  Querying the "equals to" element
const equalElement = document.querySelector(".equal");

//  Add event listener on equal button
equalElement.addEventListener("click", () => {
    if (operator !== null && firstNumber !== null && displayValue !== "") {
        if (operator === "%") {
            result = displayValue;
    } else {
        secondNumber = displayValue; //  Capture the content of the display as the second number
        let fNumber = parseFloat(firstNumber); //  Converting numbers strings to actual numbers
        let sNumber = parseFloat(secondNumber);
        
        result = operate(fNumber, operator, sNumber);
    }

    //  Update the display with the result 
    display.textContent = result;
    displayValue = result;
    firstNumber = result;
    operator = null;
    secondNumber = null;
    hasCalculated = true;
}});