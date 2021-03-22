// forEach, map, filter

let numbers = [2, 3, 4, 5, 22, 31, 45, 35, 26, 78];
let squareNumbers = numbers.map(x => {
    return x * x;
});

console.log(squareNumbers);

let arr = numbers.filter(x => {
    return x >= 10;
});
console.log(arr);

