// find(callback, value) return the value of the first element that passes certain condition
// findIndex(callback, value) return the index of the first element that passes certain condition

let numbers = [5, 55, 14, 5, 78];

let firstEvenNumber = numbers.find((x, index, arr) => {
    return x % 11 === 0;
});
console.log(firstEvenNumber);

let firstEvenNumberIndex = numbers.findIndex(x => x % 3 === 0);
console.log(`first even number index = ${firstEvenNumberIndex}`);

let students = [
    {
        id: 101,
        gpa: 2.5
    },
    {
        id: 102,
        gpa: 3.5
    },
    {
        id: 104,
        gpa: 4.5
    },
    {
        id: 110,
        gpa: 5.0
    }
];

let firstGpaGreaterThan4 = students.find(x => (x.gpa > 5));
console.log(firstGpaGreaterThan4);