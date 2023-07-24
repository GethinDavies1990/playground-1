const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
	return parseInt(userInput.value);
}

function createAndWriteLog(operator, resultBeforeCalculation, calcNumber) {
	const calcDescription = `${resultBeforeCalculation} ${operator} ${calcNumber}`;
	outputResult(currentResult, calcDescription);
}

function add() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult += enteredNumber;
	createAndWriteLog('+', initialResult, enteredNumber);
	const logEntry = {
		operation: 'ADD',
		prevResult: initialResult,
		number: enteredNumber,
		result: currentResult
	};
	logEntries.push(logEntry);
	console.log(logEntries);
}

function subtract() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult -= enteredNumber;
	createAndWriteLog('-', initialResult, enteredNumber )
}

function multiply() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult *= enteredNumber;
	createAndWriteLog('*', initialResult, enteredNumber )
}

function divide() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult /= enteredNumber;
	createAndWriteLog('/', initialResult, enteredNumber )
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


