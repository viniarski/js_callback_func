function add(a, b) {
return a + b;
}

function multiply(a, b) {
return a * b;
}

function myCalculatorFunction(a, b, operationCallback) {
console.log("Doing a calculation using the numbers: ", a, b);
console.log(
    "We might have code that saves the result to a log or a database"
);

return operationCallback(a, b);
}

const result = myCalculatorFunction(1, 2, add);
console.log(result); // Output: 3

const result2 = myCalculatorFunction(2, 3, multiply);
console.log(result2); // Output: 6

// add the two results together
const finalResult = myCalculatorFunction(result, result2, add);
console.log(finalResult); // Output: 9