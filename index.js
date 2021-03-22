// for..of

/* const names = ['s1', 's2', 's3'];
for (let name of names) {
    console.log(name);
} */

// for...in

let student = {
    id: "1306026",
    name : "Dipu",
    cgpa: "3.34",
    dept: "CSE"
}

for (let x in student) {
    console.log(x + ": " + student[x]);
}
