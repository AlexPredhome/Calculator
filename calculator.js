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