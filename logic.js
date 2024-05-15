let a;
let operator;
let b;
let result;

let displayValue = document.querySelector("#display");
displayValue.textContent = "0";

// Calculator logic and track values
// Change number display
let numbers = document.querySelectorAll(".number");

numbers.forEach(button => {
    button.addEventListener("click", event => {
        if (displayValue.textContent == "0") displayValue.textContent = "";
        if (operator) displayValue.textContent = "";
        displayValue.textContent = displayValue.textContent + event.target.textContent;
    });
})

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

let equal = document.querySelector("#equal");

equal.addEventListener("click", event => {
    if (!b) {
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