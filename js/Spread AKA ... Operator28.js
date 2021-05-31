//ANCHOR spread operator is basically used in Function calls, Array literals or stings, Object literals;

// Spread Operator in Function calls;

// simple example of function call;
let myArray = [1, 2, 3, 4, 5];

console.log(...myArray); // Spread Operator described Array elements individually;

let num = [10, 20, 30, 40, 50];

console.log(...num);

// functional example of function call;
function add(a, b, c, d, e) {
    return a + b + c + d + e;
};

console.log(add(...num));
console.log(Math.max(...num)); //to find out minimum or maximum number;

// Spread Operator in Array Literals;

// simple example of Spread Operator inArray Literals;
let arrayOne = [1, 2, 3];

let arrayTwo = [...arrayOne, 4, 5, 6];

console.log(...arrayTwo);

let name = ['Sakib', 'Tamim', 'Mushfiq'];
let position  = ['All-rounder', 'Batsman', 'Keeper'];

//Spread Operator in Object Literal;