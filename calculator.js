const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.getElementById('clear');

let currentInput = '';
let operator = '';
let previousInput = '';

const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	return numbers.reduce((total, currentItem) => total + currentItem, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((total, currentItem) => total * currentItem, 1);
};

function clearCalc(){
    currentInput = '';
    operator = '';
    previousInput = '';
    display.value = '';
}

clearButton.addEventListener('click', clearCalc);