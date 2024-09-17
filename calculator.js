// Math Functions

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
    if (b === 0) {
        return "Oops.";
    }
    return a / b;
}

function modulo(a, b) {
    if (b === 0) {
        return a;
    }
    return a % b;
}

// INPUT VARIABLES
let firstUserNumber = null;
let secondUserNumber = null;
let operator = null;
let displayNumber = 0;
let result = null;
let readyForInput = true;