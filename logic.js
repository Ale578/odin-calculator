let a = 3;
let operator = "+";
let b = 6;

let displayValue = document.querySelector("#display");

let numbers = document.querySelectorAll(".number");

// Change number display
numbers.forEach(number => {
    number.addEventListener("click", event => {
        displayValue.textContent = displayValue.textContent + event.target.textContent;
    });
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

// console.log(operate("-", 9, 5));