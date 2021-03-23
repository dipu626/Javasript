/*
Javascript is a asynchronus programing language. We have to make it synchronus. 
There are some ways to make it synchronus in ES6. They are
    1. Higher-order & callback function method
    2. Promise method
    3. async-await method
*/

/*
2. Promise method
    2.1 How to create a promise
    2.2 How to use a promise
    2.3 How to run multiple promise - all()
    2.4 race()
    2.5 Promise chaining
*/

// Promise Chain

const taskOne = () => {
    return new Promise((resolve, reject) => {
        resolve("task 1 is completed");
    })
};

const taskTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("task 2 is completed");
        }, 2000);
    })
};

const taskThree = () => {
    return new Promise((resolve, reject) => {
        resolve("task 3 is completed");
    })
};

const taskFour = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("task 4 is completed");
        }, 4000);
    })
};

const taskFive = () => {
    return new Promise((resolve, reject) => {
        resolve("task 5 is completed");
    })
};

const taskSix = () => {
    return new Promise((resolve, reject) => {
        resolve("task 6 is completed");
    })
};

// create promise chain
taskOne()
    .then((res) => console.log(res))
    .then(taskTwo)
    .then((res) => console.log(res))
    .then(taskThree)
    .then((res) => console.log(res))
    .then(taskFour)
    .then((res) => console.log(res))
    .then(taskFive)
    .then((res) => console.log(res))
    .then(taskSix)
    .then((res) => console.log(res))
    .catch((res) => console.log(res))