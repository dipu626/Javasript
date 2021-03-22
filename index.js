// Arrow function 

// Traditional function
function display() {
    console.log("Display 1");
}
display();

// Arroow function
const display2 = () => {
    console.log("Display 2");
}
display2();

const display3 = () => console.log("Display 3");
display3();

// Traditional Function
function message1() {
    return "Message 1";
}
console.log(message1());

const message2 = () => "Message 2";
console.log(message2());

// Parameter Passing
function add1(x, y) {
    return x + y;
}
console.log(add1(5, 6));

const add2 = (x, y) => x + y;
console.log(add2(4, 5));