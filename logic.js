let a;
let operator;
let b;
let result;


// Calculator logic and track values
// Display current number

let displayValue = document.querySelector("#display");
displayValue.textContent = "0";

let numbers = document.querySelectorAll(".number");

numbers.forEach(button => {
    button.addEventListener("click", event => {
        if (displayValue.textContent == "0") displayValue.textContent = "";
        if (operator) displayValue.textContent = "";
        displayValue.textContent = displayValue.textContent + event.target.textContent;
    });
})

// Save first operand value
let operators = document.querySelectorAll(".operator");

operators.forEach(button => {
    button.addEventListener("click", event => {

        operator = event.target.textContent;

        if (!a) {
            a = parseFloat(displayValue.textContent);
        }

        console.log(`a: ${a}`);
        console.log(operator);
    });
})

// Save second operand value and calculate operation with a, the operator and b
// Display result
let equal = document.querySelector("#equal");

equal.addEventListener("click", () => {
    if (!b && a) {
        b = parseFloat(displayValue.textContent);
        result = operate(operator, a, b);
        displayValue.textContent = result;

        console.log(`b: ${b}`)
        console.log(`result: ${result}`);

        operator = null;
        a = null;
        b = null;

    }
})

// Erase a, b and operator values when AC button is clicked and set calculator display to 0
let clear = document.querySelector("#clear");
clear.addEventListener("click",() => {
    a = null;
    operator = null;
    b = null;
    displayValue.textContent = "0";
});

function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operate (operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}