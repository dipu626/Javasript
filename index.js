/*
Javascript is a asynchronus programing language. We have to make it synchronus. 
There are some ways to make it synchronus in ES6. They are
    1. Higher-order & callback function method
    2. Promise method
    3. async-await method
*/

// 1. Higher Order & Callback functin example
/* 
function square(x) {
    console.log(`square of ${x} is ${x * x}`);
}
console.log(square(6));
// let y = square;
// console.log(y(7));

function higherOrderFunction(num, callback) {
    callback(num);
}
higherOrderFunction(7, square);
*/

// Using higherOrder & callback function to make JS synchronus

const taskOne = (callback) => {
    console.log("This is taskOne");
    callback();
}
const taskTwo = (callback) => {
    setTimeout(() => {
        console.log("This is taskTwo");
        callback();
    }, 4000);
}
const taskThree = (callback) => {
    console.log("This is taskThree");
    callback();
}
const taskFour = (callback) => {
    console.log("This is taskFour");
    callback();
}
const taskFive = (callback) => {
    setTimeout(() => {
        console.log("This is taskFive");
        callback();
    }, 5000);
}
const taskSix = (callback) => {
    console.log("This is taskSix");
    callback();
}
const taskSeven = () => {
    setTimeout(() => {
        console.log("This is taskSeven");
    }, 2000);
}

// higherOrder & callback function to perform the tasks synchronously
taskOne(() => {
    taskTwo(() => {
        taskThree(() => {
            taskFour(() => {
                taskFive(() => {
                    taskSix(() => {
                        taskSeven();
                    })
                })
            })
        })
    })
});