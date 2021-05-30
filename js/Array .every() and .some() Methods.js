const number2 = [12, 25, 43, 27, 32];

const name2 = ['dog', 'cats', 'bats', 'rats', 'bird'];

const students1 = [
    {name2: 'Rachis', number2: 20, subject1: 'Math'},
    {name2: 'Rabia', number2: 70, subject1: 'Math'},
    {name2: 'Rabic', number2: 70, subject1: 'English'},
    {name2: 'Rabid', number2: 70, subject1: 'Bangla'},
    {name2: 'Radii', number2: 70, subject1: 'Bangla'},
    {name2: 'Rabin', number2: 70, subject1: 'Bangla'},
];

//  .every() method;

const lessThan20 = number2.every(function(num) {
    return num < 20;
});

console.log(lessThan20);

// .some() method;

const someThan20 = number2.some(function(num) {
    return num < 20;
});

console.log(someThan20);


const newName2 = name2.every((nameNew) => {
    return nameNew.length === 3;
});

console.log(newName2);

const minFailed = students1.some(exam1 => {
    return exam1.number2 < 33;
});

console.log(minFailed);