// for and forEach

let arr = [10, 20, 30, 40, 50];
let sqarr = [];
arr.forEach(function(x) {
    console.log(x);
    sqarr.push(x * x);
});

console.log(sqarr);

// update array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.forEach(function(x, index, arr) {
    arr[index] = x + 10;
});
console.log(numbers);