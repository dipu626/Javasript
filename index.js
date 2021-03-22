
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    set setId(id) {
        this.id = id;
    }
    set setName(name) {
        this.name = name;
    }
    get getId() {
        return this.id;
    }
    get getName() {
        return this.name;
    }
}

let s1 = new Student(101, "dipu");
let s2 = new Student(102, "akash");
console.log(s1);
console.log(s2);
s2.setName = "bla";
console.log(s1.getName);
console.log(s2);