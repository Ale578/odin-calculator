let firstOperand = null;
let operator = null;
let secondOperand = null;
let result = null;


// Calculator logic and track values
// Display current number
let displayValue = document.querySelector("#display");
displayValue.textContent = "0";

let numbers = document.querySelectorAll(".number");

numbers.forEach(button => {
    button.addEventListener("click", event => {
        if (displayValue.textContent.length < 14 || operator) {  
            if (displayValue.textContent == "0" || displayValue.textContent == "You wish!") displayValue.textContent = "";
            if (operator && !secondOperand) displayValue.textContent = "";
            if (operator && firstOperand) secondOperand = displayValue.textContent + event.target.textContent;
            if (result == displayValue.textContent && firstOperand == null) displayValue.textContent = "";
            displayValue.textContent = displayValue.textContent + event.target.textContent;
        }
    });
});


    // Save first operand value
let operators = document.querySelectorAll(".operator");

operators.forEach(button => {
    button.addEventListener("click", event => {
        if (!firstOperand) {
           firstOperand = parseFloat(displayValue.textContent);
            console.log(`firstOperand: ${firstOperand}`);
            operator = event.target.textContent;
        } else {
            secondOperand = parseFloat(displayValue.textContent);
            console.log(`secondOperand: ${secondOperand}`);

            if (operator == "/" && secondOperand == 0) {
                displayValue.textContent = "You wish!"
                operator = null;
                firstOperand = null;
                secondOperand = null;
                result = null;
            } else {
                result = operate(firstOperand, operator, secondOperand);
                displayValue.textContent = result; 

                console.log(`result: ${result}`);
                secondOperand = null;
    
                firstOperand = result;
                console.log(`firstOperand: ${firstOperand}`);
                displayValue.textContent = firstOperand;  
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
    if (firstOperand && secondOperand && operator) {
        secondOperand = parseFloat(displayValue.textContent);
        if (operator == "/" && secondOperand == 0) {
            displayValue.textContent = "You wish!";
        } else {
            result = operate(firstOperand, operator, secondOperand);
            displayValue.textContent = result;
        }

        console.log(`secondOperand: ${secondOperand}`);
        console.log(`result: ${result}`);

        operator = null;
        firstOperand = null;
        secondOperand = null;
    } else if (firstOperand && result) {
        secondOperand = parseFloat(displayValue.textContent);
        if (operator == "/" && secondOperand == 0) {
            displayValue.textContent = "You wish!"
            operator = null;
           firstOperand = null;
            secondOperand = null;
            result = null;
        } else {
            result = operate(firstOperand, operator, secondOperand);
            displayValue.textContent = result;
        }
    }
});

// Erase a, secondOperand and operator values when AC button is clicked and set calculator display to 0
let clear = document.querySelector("#clear");
clear.addEventListener("click",() => {
    firstOperand = null;
    operator = null;
    secondOperand = null;
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

function operate (a, operator, b) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
    }
}