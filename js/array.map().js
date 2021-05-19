const number = [10, 20, 30, 40];
const property = ['Flower', 'Fruit', 'Animal', 'Bird', 'Fish'];
const object = [
    {name : 'Humayun Ahmed', availableBooks : 30},
    {name : 'Jafar Iqbql', availableBooks : 10},
    {name : 'Ahmed Sofa', availableBooks : 5},
    {name : 'Freelancer Omuk', availableBooks : 1}
];

const newNumber = property.map(function(currentValue, index, array) {
    console.log(currentValue);
});
 
