const numbers = [12, 25, 46, 27, 32, 2000];

const sum = numbers.reduce(func);

/* system ➡ function func(accumulator, currentValue, sourceArray); it can accept those four parameter; **here accumulator means total; */

function func(acc, val) {
    return acc + val;
};

console.log(sum); /* system of accumulator ➡ acc           val
                                              12      +     25 = 37;
                                              37      +_    46 = 83;
                                              83      +     27 = 110;
                                              110     +     32 = 142;
                                              142     +   2000 = 2142; 
                                             2142 */

const sum1 = numbers.reduce(func, 1000); //when added any number with func, it works with count from the number; here 1000 means innitialValue;

console.log(sum1); 

//  another short system of line no 6 to 24;

const sum2 = numbers.reduce(function(acc, value) {
    return acc + value;
});

console.log(sum2);


//  find out the minimum number with if else;

const min = numbers.reduce((acc, value) => {
    if(acc < value) {
        return acc;
    } else {
        return value
    }
});

console.log(min);

// find out  number with Math.map;

const max = numbers.reduce((acc, val) => {
    return Math.max(acc, val);
});

console.log(max);

const product = [
    {
        name: 'Pen',
        amount: 5,
        price: 10,
    },
    {
        name: 'Book',
        amount: 3,
        price: 300,
    },
    {
        name: 'Notebook',
        amount: 2,
        price: 50,
    },
];

const totalTk = product.reduce(function(acc, item) {
    return acc + item.amount*item.price;
}, 0);  //here, 0 is initial value of acc; we can use any number;

console.log(totalTk);


const votes = ['Yes', 'No', 'Yes', 'Yes', 'Yes', 'No', 'Absent'];

const result =  votes.reduce((acc, vote) => {
    if(acc[vote]) {
        acc[vote] ++
    } else {
        acc[vote] = 1;
    }
    return acc;
}, {});

console.log(result);

