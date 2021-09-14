const buttons = document.querySelectorAll('.calc-button');
buttons.forEach((button) => button.addEventListener('click', () => {
    console.log('we did a click on ' + button.getAttribute('data-key'))
    displayUpdate(button.getAttribute('data-key'));
}))

const clear = document.getElementById('clear')
const equals = document.getElementById('equals')
let x = "";
let y = "";
let operation = "";

function add(x, y) {
    return x + y
}

function subtract(x, y) {
    return x - y
}

function multiply(x, y) {
    return x * y
}

function divide(x, y) {
    return x / y
}

const operate = function (operator, x, y) {
    x = Number(x);
    y = Number(y);
    let fn = window[operator]
    return fn(x, y)
}


const displayUpdate = function (input) {
    if (input == 'add' || input == 'multiply' || input == 'divide' || input == 'subtract') {
        operation = input;
    }
    else {
        if (!operation) {
            x += input
        }
        else {
            y += input
        }
    }
    let displayText = `${x} ${operation} ${y}`
    document.getElementById("display").innerHTML = displayText;
}

const clearCalculator = function () {
    x = ''
    y = ''
    operation = ''
    displayText = ''
    document.getElementById("display").innerHTML = displayText;
}

clear.addEventListener('click', clearCalculator)
equals.addEventListener('click', () => {

    if (x && y && operation) {
        if (y == '0' && operation == 'divide') {
            document.getElementById("display").innerHTML = "Can't divide by zero, you fool";
        }
        else {
            let result = Math.round(1e4 * operate(operation, x, y)) / 1e4;
            x = result;
            y = ''
            operation = ''
            document.getElementById("display").innerHTML = result;
            console.log(result);
        }


    }


})



