// ANCHOR- -** implicit return system is the short version of normal arrow function; line 20 have one system of implicit return and line 26 have another system of implicit return**;


    // normal function system

    const square = function(f) {
        return f * f;
    }; 

    console.log(square(7));

    // arrow function

    const square1 = (g) => {
        return g * g;
    };

    // implicit returns

    const square2 = k => (
        k * k
    ); // in the implicit arrow return system the word of return should be removed and curly bracket replaced with parentheses; and its only used in one statement; two or more and loop doesn't allow this;
    console.log(square2(10));

    const square3 = l => l * l;
    console.log(square3(11));



    // normal function system
    const isEven = function(h) {
        return h % 2 === 0;
    };

    console.log(isEven(56));

    // arrow function

    const isEven1 = h => {
        return h % 2 === 0;
    };
    
    console.log(isEven1(57));
    
    // implicit returns

    const isEven2 = m => (
        m % 2 === 0
    );
    
    console.log(isEven2(2));
    
    const isEven3 = n => n % 2 === 0;
    
    console.log(isEven3(5));


