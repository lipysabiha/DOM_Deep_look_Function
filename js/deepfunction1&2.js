// Function Expressions - for making function Expression it should have a variable(here variable name is="subtract") like example no.2(line no.07); and without variable it calls Functional Statement like example no.1(line no.3-5);

    function add(x, y) {
        return x + y;
    }; // see the console by = add(5, 5) => function statement
    
    const subtract =  function(x, y) {
        return x - y;
    };  // => function Expression

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

// Function as Argument -from DOM Deep Look Function part-02;

    // Return of function 

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

            /* why do we return a function*/

            function double(x) {
                return x * 2;
            };
            function triple(x) {
                return x * 3;
            };
            function fourth(x) {
                return x * 4;
            };

            console.log(fourth(5)) // line no 105 to 113 is a long term process of function and thats why we use return function system to made it short and easy code.

            function multiplier(a) {
                return function(b) {
                    return b * a;
                };
            };

            const double1 = multiplier(2); // double1 = 5 and multiplier = 2 OR a = 2 and b = 5; And line no. 123 is  function Expression;
            const triple1 = multiplier(3); // triple1 = 5 and multiplier = 3 OR a = 3 and b = 5;

            console.log(triple1(5));
            
        // callback function

        /*simple example*/
        function greeting() {
            console.log('I will show a simple callback function')
        };

        function myFunction(callback) {  // myFunction's callback = greeting;
            callback();
        };

        myFunction(greeting);

        //example without callback//

         function calculations(num1, num2, action) {
             if(action === 'add') {
                 return num1 + num2;
             } else if(action === 'minus') {
                 return num1 - num2;
             }
         }

         console.log(calculations(10, 5, 'add')); // explanation: here num1 = 10; num1 = 5 and action = add or minus;

          //example with callback//

          const adds = function(a, b) {
              return a + b;
          };

          const minuss = function(a, b) {
            return a - b;
        };

        const multiplys = function(a, b) {
            return a * b;
        };

        function calculators(num3, num4, callback) {
            return callback(num3, num4);
        };

        console.log(calculators(20, 5, adds))