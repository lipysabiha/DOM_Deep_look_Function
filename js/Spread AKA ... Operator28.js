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
console.log(Math.min(...num));
console.log(Math.max(...num)); //to find out minimum or maximum number;

// Spread Operator in Array Literals;

// simple example of Spread Operator inArray Literals;
let arrayOne = [1, 2, 3];

let arrayTwo = [...arrayOne, 4, 5, 6];

console.log(...arrayTwo);

let name = ['Sakib', 'Tamim', 'Mushfiq'];
let position  = ['All-rounder', 'Batsman', 'Keeper'];

let team = [...name, ...position];

console.log(team);

let str = 'Hello';
console.log(...str);

let newStr = [...str];
console.log(newStr);

//Spread Operator in Object Literals;

const obj1 = {foo: 'bar', x: 42};
const obj2 = {foo: 'baz', y: 13};

const clonedObj = {...obj1};
// Object {foo: 'bar', x: 42};

const mergedObj = {...obj1, ...obj2};
// Object {foo: 'baz', x: 13};


let products = {
    name: 'Laptop',
    price: 30000,
};
let place = {
    shopName: 'Random Laptop Shop',
    address: 'Dhaka, Bangladesh',
};

let store = {...products, ...place};
console.log(store);