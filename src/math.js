function add(num1, num2) {
	if (isNaN(num1)) {
		throw new Error(`${num1} is not a number!`)
	}
	if (isNaN(num2)) {
		throw new Error(`${num2} is not a number!`)
	}
	var value = num1 + num2
	return value
}
function subtract(num1, num2) {
	if (isNaN(num1)) {
		throw new Error(`${num1} is not a number!`)
	}
	if (isNaN(num2)) {
		throw new Error(`${num2} is not a number!`)
	}
	var value = num1 - num2
	return value
}
function multiply(num1, num2) {
	if (isNaN(num1)) {
		throw new Error(`${num1} is not a number!`)
	}
	if (isNaN(num2)) {
		throw new Error(`${num2} is not a number!`)
	}
	var value = num1 * num2
	return value
}
function divide(num1, num2) {
	if (isNaN(num1)) {
		throw new Error(`${num1} is not a number!`)
	}
	if (isNaN(num2)) {
		throw new Error(`${num2} is not a number!`)
	}
	var value = num1 / num2
	return value
}
module.exports = {
	add : add,
	subtract : subtract,
	multiply : multiply,
	divide : divide
}