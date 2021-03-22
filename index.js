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

/*
const add3 = (x, y, z) => {
    return x + y + z;
}

const add4 = (a, b, c, d) => {
    return a + b + c + d;
}

let numbers = [1, 2, 3];
// console.log(add(numbers[0], numbers[1], numbers[2]));
console.log(add3(...numbers));
console.log(add4(...numbers, 10));

let numbers1 = [5, ...numbers, 6];
console.log(numbers1);
*/

/* 
//               concat                

// normal array concat
let arr1 = [1, 2, 3];
let arr2 = [4, 5];
arr1 = arr1.concat(arr2);
console.log(arr1); // [1, 2, 3, 4, 5]
 
// using spread operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5];
arr = [...arr1, ...arr2];
console.log(arr); // [1, 2, 3, 4, 5] 

Note: Though we can achieve the same result, but it is not recommended to use the spread in this particular case, as for a large data set it will work slower as when compared to the native concat() method.
*/

//   Copy (like splice method)

// copy without the spread operator
//let arr1 = ['a', 'b', 'c'];
//let arr2 = arr1;
//console.log(arr2); // ['a', 'b', 'c']

/* The above code works fine because we can copy the contents of one array to another, but under the hood, it’s very different as when we mutate new array it will also affect the old array(the one which we copied). See the code below: */

//arr2.push('d');
//console.log(`arr2=${arr2} arr1=${arr1}`); // arr2=['a', 'b', 'c', 'd'] arr1=['a', 'b', 'c', 'd']

/* In the above code we can clearly see that when we tried to insert an element inside the array, the original array is also altered which we didn’t intended and is not recommended. We can make use of the spread operator in this case, like this: */

// spread operator for copying
/* let arr1 = ['a', 'b', 'c'];
let arr2 = [...arr1];
console.log(`After copying from arr1=${arr2}`);
arr2.push('d');
console.log(`arr2=${arr2} arr1=${arr1}`); // arr2=['a', 'b', 'c', 'd'] arr1=['a', 'b', 'c']
 */

//  Expand

// normally used expand method
// let arr1 = ['a', 'b'];
// let arr2 = [arr1, 'c', 'd'];
// console.log(arr2);  // arr2=[[arr1], 'c', 'd']

/* Even though we get the content on one array inside the other one, but actually it is array inside another array which is definitely what we didn’t want. If we want the content to be inside a single array we can make use of the spread operator. */

// expand using spread operator
// let arr1 = ['a', 'b'];
// let arr2 = [...arr1, 'c', 'd'];
// console.log(arr2); // arr2=['a', 'b', 'c', 'd']

/* 
//       Math
console.log(Math.min(1, 2, 3, 6)); // 1

// min in array using Math.min() 
let arr = [1, 2, 3, 5];
console.log(Math.min(arr)); // NaN

// with spread
console.log(Math.min(...arr)); // 1 
*/

/* // Example of spread operator with objects

const user1 = {
    name: "Dipu",
    age: 25
};
const cloneUser = {...user1};
console.log(`cloneUser=${cloneUser.name}`);

const user2 = {
    name: "Ash",
    age: 24,
    location: "Rangpur"
};
const margeUser = {...user1, ...user2};
console.log(margeUser); // name:Ash, age:24, location:Rangpur
 */