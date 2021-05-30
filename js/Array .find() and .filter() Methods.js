const numbers1 = [1, 2, 3, 4, 5, 6];

const students = [
    { name1 : 'Radix', number1: 70, subject: 'Math' },
    { name1 : 'Krait', number1: 85, subject: 'Math' },
    { name1 : 'Ram', number1: 33, subject: 'English' },
    { name1 : 'Sham', number1: 80, subject: 'Bangla' },
    { name1 : 'Jody', number1: 75, subject: 'Bangla' },
    { name1 : 'Modus', number1: 20, subject: 'Bangla' },
];

// find method;

const greaterThanThree = numbers1.find(function (num1) {
    return num1 > 3;
});

console.log(greaterThanThree);


const failedStudents = students.find((exam) => {
    return exam.number1 < 33;
});

console.log(failedStudents.number1); //FIND method helps to find only one number;

// filter method;

const greaterThanThree1 = numbers1.filter(function (num11) {
    return num11 > 4;
});

console.log(greaterThanThree1);

const failedStudents1 = students.filter((exam1) => {
    return (exam1.number1 >= 70 && exam1.subject === 'Bangla');
});

console.log(failedStudents1); //FIND method helps to find all over based on condition;


const duplicateNumber = [1,1, 2, 3,2, 3,1, 1, 2, 5, 3, 6, 4, 5, 4, 6, 4];

const noDuplicate = duplicateNumber.filter((value, index, array) => {
    return array.indexOf(value) === index;
});

console.log(noDuplicate);