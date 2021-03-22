// Array Destructure

let numbers = [1, 2, 3, 4, 5];
let [num1, num2, ...z] = numbers
console.log(num1);
console.log(num2);
console.log(z);

// swap variables
let a = 10;
let b = 20;
[a, b] = [b, a]
console.log(`a=${a} b=${b}`);

// object destructure
const studentInfo = {
    id: 101,
    fullName: "dipu kumar",
    gpa: 3.34
}
const {id, fullName} = studentInfo;
console.log(`${id} ${fullName}`);

// nested object destructure
const student = {
    id: 101,
    name: "dipu kumar",
    gpa: 3.34,
    languages: {
        native: "bangla",
        beginner: "english"
    }
}
const {name, languages} = student;
const {native, beginner} = languages;
console.log(name + " | " + native + ", " + beginner);

// destructing function parameter
let studentInformation = ({id, fullName}) => {
    console.log(`funtion = ${id} ${fullName}`);
}
studentInformation(studentInfo);