// ASSESSMENT 3: Coding Practical Questions with Jest

const { it, expect } = require("@jest/globals");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// Pseudo Code
// create a test for the expected outputs
// create a describe statement with new function name
// create let statements for each example inputs
// create an it statement that states the purpose of our function
// create expect statements for each example outputs

describe("fibSeq", () => {
  let newSeq = [1, 1, 2, 3, 5, 8];
  let fullerSeq = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
  it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
    expect(fibSeq(6)).toEqual([1, 1, 2, 3, 5, 8]),
      expect(fibSeq(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});

// b) Create the function that makes the test pass.

// Pseudo Code
// create a const for you above describe statement
// assign newArr as a variable
// create a for loop
// use .push to add newArr
// create return for newArr

const fibSeq = (num) => {
  let newArr = [1, 1];
  for (let i = 1; i < num - 1; i++) {
    newArr.push(newArr[i] + newArr[i - 1]);
  }
  return newArr;
};

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"];
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"];
// Expected output: [-823, 7, 23]

// Pseudo Code
// create a test for the expected outputs
// create a describe statement with new function name
// create let statements for each example inputs
// create an it statement that states the purpose of our function
// create expect statements for each example outputs

describe("newArr", () => {
  let fullArr = [-9, 7, 9, 199];
  let fullerArr = [-823, 7, 23];
  it("pulls specific values from the above constants", () => {
    expect(newArr(fullArr1)).toEqual(fullArr);
    expect(newArr(fullArr2)).toEqual(fullerArr);
  });
});

// b) Create the function that makes the test pass.

// Pseudo Code
// create a function named newArr
// use .filter calling upon a value
// return only odd numbers
// sort arrays a and b

const newArr = (array) => {
  let result = array.filter((value) => {
    return typeof value === "number" && value % 2 !== 0;
  });
  return result.sort((a, b) => a - b);
};

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const numbersToAdd1 = [2, 4, 45, 9];
// Expected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12];
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = [];
// Expected output: []

// Pseudo Code
// create a test for the expected outputs
// create a describe statement with new function name
// create let statements for each example inputs
// create an it statement that states the purpose of our function
// create expect statements for each example outputs

describe("accSum", () => {
  let numbAdd1 = [2, 6, 51, 60];
  let numbAdd2 = [0, 7, -1, 11];
  let numbAdd3 = [];
  it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array", () => {
    expect(accSum(numbersToAdd1)).toEqual([2, 6, 51, 60]);
    expect(accSum(numbersToAdd2)).toEqual([0, 7, -1, 11]);
    expect(accSum(numbersToAdd3)).toEqual([]);
  });
});

// b) Create the function that makes the test pass.

// Pseudo Code
// create a const for accSum
// create a variable for newSum
// create a return using .map and a function for our value
// return our newSum

const accSum = (array) => {
  let newSum = 0;
  return array.map((value) => {
    return (newSum += value);
  });
  return newSum;
};
