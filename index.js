//  Declarations of global variables
let firstNumber = null;
let operator = null;
let secondNumber = null;
let result = null;
let hasCalculated;
let dotUsed = false;

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

//  Dot / Decimal point
const dot = document.querySelector(".dot"); 

const handleDotInput = () => {  //  Function for handling dot input
    if (!dotUsed) {
        displayValue += ".";
        display.textContent = displayValue;
        dotUsed = true
    }
};

dot.addEventListener("click", () => {  //  Click event for dot button
    handleDotInput();
    dot.blur();
});

//  Capturing Clear button and listening to it's event by click
const clear = document.querySelector(".clear");

const handleClearInput = () => {  //  Function for handling clear inputs
    displayValue = "";
    display.textContent = "";
    firstNumber = null;
    secondNumber = null;
    operator = null;
    result = null;
    hasCalculated = false;
    dotUsed = false;
};

clear.addEventListener("click", () => {  //  Click event for clear
    handleClearInput();
    clear.blur();
});

document.addEventListener("keydown", (event) => {  //  Keydown event for clear
    if (event.key === "Escape") {
        event.preventDefault();
        handleClearInput();
        document.activeElement.blur();
    }
});

//  Declaration of display value variable
let displayValue = "";

//  Number buttons and other buttons
function handleOneInput() {
    displayValue += 1;
    display.textContent = displayValue;
    one.blur();
}
one.addEventListener("click", handleOneInput);

function handleDelInput() {
    displayValue = display.textContent.slice(0, -1);
    display.textContent = displayValue;
    del.blur();
}

del.addEventListener("click", handleDelInput);
document.addEventListener("keydown", (event) => {
    if (event.key === "Backspace") {
        event.preventDefault();
        handleDelInput();
        document.activeElement.blur();
    }
});

function handleTwoInput() {
    displayValue += 2;
    display.textContent = displayValue;
    two.blur();
}

two.addEventListener("click", handleTwoInput);

function handleThreeInput() {
    displayValue += 3;
    display.textContent = displayValue;
    three.blur();
}

three.addEventListener("click", handleThreeInput);

function handleFourInput() {
    displayValue += 4;
    display.textContent = displayValue;
    four.blur();
}
four.addEventListener("click", handleFourInput);

function handleFiveInput() {
    displayValue += 5;
    display.textContent = displayValue;
    five.blur();
}
five.addEventListener("click", handleFiveInput);

function handleSixInput() {
    displayValue += 6;
    display.textContent = displayValue;
    six.blur();
}
six.addEventListener("click", handleSixInput);

function handleSevenInput() {
    displayValue += 7;
    display.textContent = displayValue;
    seven.blur();
}
seven.addEventListener("click", handleSevenInput);

function handleEightInput() {
    displayValue += 8;
    display.textContent = displayValue;
    eight.blur();
}
eight.addEventListener("click", handleEightInput);


function handleNineInput() {
    displayValue += 9;
    display.textContent = displayValue;
    nine.blur();
}
nine.addEventListener("click", handleNineInput);

function handleZeroInput() {
    displayValue += 0;
    display.textContent = displayValue;
    zero.blur();
}
zero.addEventListener("click", handleZeroInput);

//  Percentage
const percentageSign = document.querySelector(".percentage");

function handlePercentInput() {
    if (displayValue) {
        displayValue = (parseFloat(displayValue) / 100).toString();
        display.textContent = displayValue;

        if (!operator) {
            firstNumber = displayValue;
        } else {
            secondNumber = displayValue;
        }
    }
}
percentageSign.addEventListener("click", handlePercentInput);

//  Operators
const divideElement = document.querySelector(".divide");

//  addEvent for divide element

function handleDivideInput() {
    displayValue += "/";
    operator = "/";
    display.textContent = displayValue;
}

divideElement.addEventListener("click", handleDivideInput);
document.addEventListener("keydown", (event) => {
    if (event.key === "/") {
        event.preventDefault();
        handleDivideInput();
        document.activeElement.blur();   
    }
});

// Captured the addElement
const addElement = document.querySelector(".add"); 

function handleAddInput() {
    displayValue += "+";
    operator = "+";
    display.textContent = displayValue;
}

// addEvent for add element
addElement.addEventListener("click", handleAddInput);
document.addEventListener("keydown", (event) => {
    if (event.key === "+") {
        event.preventDefault();
        handleAddInput();
        document.activeElement.blur();
    }
});

const subtractElement = document.querySelector(".subtract"); 

function handleSubtractInput() {
    displayValue += "-";
    operator = "-";
    display.textContent = displayValue;
}

subtractElement.addEventListener("click", handleSubtractInput)  //  Click event for subtract button
document.addEventListener("keydown", (event) => {
    if (event.key === "-") {
        event.preventDefault();
        handleSubtractInput();
        document.activeElement.blur();
    }
});

const multiplyElement = document.querySelector(".multiply");

function handleMultiplyInput() {
    displayValue += "*";
    operator = "*";
    display.textContent = displayValue;
}

// addEvent for multiply element
multiplyElement.addEventListener("click", handleMultiplyInput);
document.addEventListener("keydown", (event) => {
    if (event.key === "*") {
        event.preventDefault();
        handleMultiplyInput();
        document.activeElement.blur();
    }
});

//  All operators elements
const opButtons = document.querySelectorAll(".op");

    opButtons.forEach(button => {  //  All buttons for storing values in a variable and update display
        button.addEventListener("click", () => {
            if (!hasCalculated && firstNumber === null) {
                firstNumber = display.textContent;
            };
            operator = button.textContent;
            displayValue = "";
            display.textContent = operator; // optionally showing the operator
            dotUsed = false;
            button.blur();
        });
    });  

const keys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Backspace", ".", "Escape", "+", "-", "/", "*", "%", "Enter"];
const opKeys = ["+", "-", "/", "*"];
document.addEventListener("keydown", (event) => {
    if (keys.includes(event.key)) {
        event.preventDefault();

        if (event.key >= "0" && event.key <= "9") {
            displayValue += event.key;
            display.textContent = displayValue;
            document.activeElement.blur();
        } 
        else if (opKeys.includes(event.key)) {
            firstNumber = displayValue;
            operator = event.key;
            displayValue = "";
            display.textContent = operator;
            dotUsed = false;
            document.activeElement.blur();
        } 
        else if (event.key === "%") {
            handlePercentInput();
            document.activeElement.blur();
        }
        else if (event.key === "." && !dotUsed) {
            displayValue += event.key;
            display.textContent = displayValue;
            dotUsed = true;
        }
        else if (event.key === "Enter") {
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
        
            if (String(result).includes(".")) {
                dotUsed = true;
            } else {
                dotUsed = false;
            }
            document.activeElement.blur();
        }
    }
}});



//  Capture "Equals" element
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

    if (String(result).includes(".")) {
        dotUsed = true;
    } else {
        dotUsed = false;
    }
}});