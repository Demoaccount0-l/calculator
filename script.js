let numberButtons = document.querySelectorAll(".number");
let operationButtons = document.querySelectorAll(".operation");
let dotButton = document.querySelector(".dot");
let equalButton = document.querySelector(".equals");
let logButton = document.querySelector(".log");
let ACButton = document.querySelector(".AC");
let clearButton = document.querySelector(".clear");
let outDisplay = document.querySelector(".outputDisplay");

let firstOperand = document.querySelector(".firstoperand");
let secondOperand = document.querySelector(".secondoperand");

let operationValue = null;
let operation = false;

numberButtons.forEach(button => {
    button.addEventListener('click', () => appendNumber(button.id))
})

function appendNumber(buttonID) {
    if (firstOperand.textContent === '0') {
        firstOperand.textContent = '';
        firstOperand.textContent += buttonID;
    }
    else if (firstOperand.textContent === "" || operation === false) {
        firstOperand.textContent += buttonID;
    }
    else if (secondOperand.textContent === '' || operation === true) {
        secondOperand.textContent += buttonID;
    }

}

operationButtons.forEach(button => {
    button.addEventListener('click', () => operationSelected(button.id))
})

function operationSelected(buttonID) {
    if (operation === false && firstOperand.textContent !== '') {
        firstOperand.textContent += buttonID;
        operation = true;
        operationValue = buttonID;
    }
}

equalButton.addEventListener('click', evaluateOperation)

function evaluateOperation(e) {
    if (firstOperand.textContent === '' || secondOperand.textContent === '' || operation === false) return

    let firstValue = parseFloat(firstOperand.textContent.slice(0, -1));
    let secondValue = parseFloat(secondOperand.textContent);

    switch (operationValue) {
        case '+':
            firstOperand.textContent = firstValue + secondValue;
            break;
        case '-':
            firstOperand.textContent = firstValue - secondValue;
            break;
        case '*':
            firstOperand.textContent = firstValue * secondValue;
            break;
        case '/':
            divideOperation(firstValue, secondValue);
            break;
        case '%':
            firstOperand.textContent = firstValue % secondValue;
            break;
        default:
            console.log('No operation selected');
            break;
    }
    secondOperand.textContent = '';
    operation = false;
    operationValue = null;
}

function divideOperation(a, b) {
    if (b === 0) {
        firstOperand.textContent =  `Can't divide by zero`;
    }
    else{
        let divideValue =a/b;
        firstOperand.textContent = divideValue.toFixed(3);
    }
}

clearButton.addEventListener('click', () => {
    firstOperand.textContent = '';
    secondOperand.textContent = '';
    operation = false;
    operationValue = null;
})

ACButton.addEventListener('click', () => {
    if (secondOperand.textContent !== '') {
        secondOperand.textContent = secondOperand.textContent.slice(0, -1);
    }
    else {

        firstOperand.textContent = firstOperand.textContent.slice(0, -1);
    }
})

dotButton.addEventListener('click', () => {
    if (secondOperand.textContent === '' || operation === false) {
        if (firstOperand.textContent.includes('.')) return
        if (firstOperand.textContent === '') {
            firstOperand.textContent = '0';
        }
        firstOperand.textContent += '.';
    }
    else {
        if (secondOperand.textContent.includes('.')) return
        if (secondOperand.textContent === '') {
            secondOperand.textContent = '0';
        }
        secondOperand.textContent += '.';
    }


})
