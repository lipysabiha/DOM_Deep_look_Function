const number = [10, 20, 30, 40];
const property = ['Flower', 'Fruit', 'Animal', 'Bird', 'Fish'];
const names = ['Tom', 'Jerry', 'Puppy', 'Woody', 'Casper'];
const object = [
    {name : 'Humayun Ahmed', availableBooks : 30},
    {name : 'Jafar Iqbql', availableBooks : 10},
    {name : 'Ahmed Sofa', availableBooks : 5},
    {name : 'Freelancer Omuk', availableBooks : 1}
];

const newNumbers = property.map(function(currentValue, index, array) {
    console.log(currentValue);
}); // This is the example of NORMAL FUNCTION;

const newNumber = number.map(function(numbers) {
    return numbers * 4;
});
 
console.log(newNumber); // This the example of CALLBACK FUNCTION;

const newName = names.map(name => {
    return name.toUpperCase();
});

console.log(newName); // This the example of ARROW FUNCTION;

const newObject = object.map(item => {
    return item.availableBooks;
});

console.log(object);
console.log(newObject); // This the example of ARROW FUNCTION;

/*const newObject = object.map(function(items) {
    return items.name
});

console.log(newObject); // This the example of CALLBACK FUNCTION;  */