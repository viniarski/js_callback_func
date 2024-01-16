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
      console.error("Cannot divide by zero!");
      return NaN;
    }
    return a / b;
  }
  
  function isEqual(a, b) {
    return a === b;
  }
  
  function isGreater(a, b) {
    return a > b;
  }
  
  function myCalculatorFunction(a, b, operationCallback) {
    console.log("Doing a calculation using the numbers: ", a, b);
    console.log("We might have code that saves the result to a log or a database");
  
    return operationCallback(a, b);
  }
  
  const result = myCalculatorFunction(1, 2, add);
  console.log("Addition Result:", result); // Output: 3
  
  const result2 = myCalculatorFunction(2, 3, multiply);
  console.log("Multiplication Result:", result2); // Output: 6
  
  const result3 = myCalculatorFunction(10, 2, divide);
  console.log("Division Result:", result3); // Output: 5
  
  const result4 = myCalculatorFunction(5, 3, subtract);
  console.log("Subtraction Result:", result4); // Output: 2
  
  const isEqualResult = myCalculatorFunction(5, 5, isEqual);
  console.log("Equality Check Result:", isEqualResult); // Output: true
  
  const isGreaterResult = myCalculatorFunction(8, 3, isGreater);
  console.log("Greater Than Check Result:", isGreaterResult); // Output: true
  
  // Add the results together
  const finalResult = myCalculatorFunction(result, result2, add);
  console.log("Final Result:", finalResult); // Output: 9