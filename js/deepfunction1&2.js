// Function Expressions - for making function Expression it should have a variable like example no.2: and without variable it calls Functional Statement like example no.1;

    function add(x, y) {
        return x + y;
    }; // see the console by = add(5, 5) => function statement

    const subtract =  function(x, y) {
        return x - y;
    };  // => function statement

    const increase = function multiply(x, y) {
        return x * y;
    };

    const calc = [add, subtract, increase];
    
    console.log(calc[0](5, 3));
    console.log(calc[1](5, 3));
    console.log(calc[2](5, 3));


    // by loop
    for (let f of calc) {
        let result = f(30, 4);
        console.log(result);
    }

const calculator = {
    add: add,
    subtract: subtract,
    increase: increase
}   // example of object works in function

console.log(calculator.add(50, 5));
console.log(calculator.subtract(50, 5));
console.log(calculator.increase(50, 5));


// Higher Order Functions - it works  either by taking them as arguments or by returning them.

    // function as argument

    function repeat(run) {
        run();
        run();
        run();
        run();
    }

    const hi = function() {
        console.log('Hi.. You are welcome....');
    }

    function bye() {
        console.log('Bye.. You can go!!!!');
    }

    repeat(hi);
    repeat(bye);

    function repeatWithNumber(run, num) {
        for(let i = 0; i < num; i++) {
            run();
        }
    }

    console.log(repeatWithNumber(hi, 8));
    console.log(repeatWithNumber(bye, 8));

    function randomPick(runOne, runTwo) {
        let randomNumber = Math.random();
        console.log(randomNumber);

        if(randomNumber >  0.5) {
            runOne();
        } else {
            runTwo();
        }
    };

    console.log(randomPick(hi, bye));

    // Return of function -from DOM Deep Look Function part-02;

        //  return -review again the return function

        function some() {
            return "Hi";
        }

        console.log(some());

        function someThing() {
            return function anyThing() {
                return 'bye';
            }
        }
        
        console.log(someThing());

// Function as Argument

