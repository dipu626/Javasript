/*
ES6 Features
        1. ES6 Syntax
            1.1 ES6 variables -> var, let, const (scope, redeclaration, value assigning)
            1.2 Template Literals
            1.3 Hoisting & strict mode
            1.4 Default and rest parameter
            1.5 spread operator
            1.6 for...of
        2. Arrow functions
        3. Destructuring
            3.1 Array and Object Destructuring
*/

// use strict -> variable declare na kore use kora jabe na
"use strict"

x = 20;
console.log(`x=${x}`);
if (true) {
    y = 10;
    console.log(`y = ${y}`);
    var y;
}