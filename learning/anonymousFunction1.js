const add = function(a, b) {
	return a + b
}

const multiply = function(a, b) {
	return a * b
}

const printResult = function(a, b, operation = add) {
	console.log(operation(a, b))
}

printResult(5, 7)
printResult(5, 7, add)
printResult(5, 7, multiply)
printResult(5, 7, (a, b) => (a ** b))
