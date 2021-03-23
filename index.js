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

console.log("welcome");

// how to create a promise
// 3 stage -> pending, resolve, reject
const promise1 = new Promise((resolve, reject) => {
    let completedPromise = false;
    if (completedPromise === true) {
        resolve("Completed promise 1");
    }
    else {
        reject(new Error("not completed promise 1"));
    }
});

const promise2 = new Promise((resolve, reject) => {
    resolve("completed promise 2");
});

//console.log(promise1);
/* promise1.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});

promise2.then((message) => {
    console.log(message);
}) */

Promise.all([promise1, promise2]).then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error);
})

console.log("bye");
