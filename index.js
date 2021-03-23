/*
Javascript is a asynchronus programing language. We have to make it synchronus. 
There are some ways to make it synchronus in ES6. They are
    1. Higher-order & callback function method
    2. Promise method
    3. async-await method
*/

// async-await method

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

/* // create promise chain
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
    .catch((res) => console.log(res)) */

const callAllTasks = async () => {
    const task1 = await taskOne();
    console.log(task1);
    const task2 = await taskTwo();
    console.log(task2);
    const task3 = await taskThree();
    console.log(task3);
    const task4 = await taskFour();
    console.log(task4);
    const task5 = await taskFive();
    console.log(task5);
    const task6 = await taskSix();
    console.log(task6);
}
callAllTasks();