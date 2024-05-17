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
        if (displayValue.textContent == "0" || displayValue.textContent == "You wish!") displayValue.textContent = "";
        if (operator && !b) displayValue.textContent = "";
        if (operator && a) b = displayValue.textContent + event.target.textContent;
        if (result == displayValue.textContent && a == null) displayValue.textContent = "";
        displayValue.textContent = displayValue.textContent + event.target.textContent;
    });
});

    // Save first operand value
let operators = document.querySelectorAll(".operator");

operators.forEach(button => {
    button.addEventListener("click", event => {
        if (!a) {
            a = parseFloat(displayValue.textContent);
            console.log(`a: ${a}`);
            operator = event.target.textContent;
        } else {
            b = parseFloat(displayValue.textContent);
            console.log(`b: ${b}`);

            if (operator == "/" && b == 0) {
                displayValue.textContent = "You wish!"
                operator = null;
                a = null;
                b = null;
                result = null;
            } else {
                result = operate(operator, a, b);
                displayValue.textContent = result;     
                console.log(`result: ${result}`);
                b = null;
    
                a = result;
                console.log(`a: ${a}`);
                displayValue.textContent = a;  
                operator = event.target.textContent;
            }

        }
        console.log(operator);
    });
});

    // Save second operand value and calculate operation with a, the operator and b
    // Display result
let equal = document.querySelector("#equal");

equal.addEventListener("click", () => {
    if (a && b && operator) {
        b = parseFloat(b);
        if (operator == "/" && b == 0) {
            displayValue.textContent = "You wish!";
        } else {
            result = operate(operator, a, b);
            displayValue.textContent = result;
        }


        console.log(`b: ${b}`);
        console.log(`result: ${result}`);

        operator = null;
        a = null;
        b = null;
    } else if (a && result) {
        b = parseFloat(displayValue.textContent);
        if (operator == "/" && b == 0) {
            displayValue.textContent = "You wish!"
            operator = null;
            a = null;
            b = null;
            result = null;
        } else {
            result = operate(operator, a, b);
            displayValue.textContent = result;     

        }
    }
});

// Erase a, b and operator values when AC button is clicked and set calculator display to 0
let clear = document.querySelector("#clear");
clear.addEventListener("click",() => {
    a = null;
    operator = null;
    b = null;
    result = null;
    displayValue.textContent = "0";
});

// Change the displayed numbers sign
let sign = document.querySelector("#sign");
sign.addEventListener("click", () => {
    if (displayValue.textContent > 0) {
        displayValue.textContent = parseFloat("-" + displayValue.textContent);
    } else if (displayValue.textContent < 0) {
        displayValue.textContent = displayValue.textContent.replace("-", "");
    }
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