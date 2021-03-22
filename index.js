// Arrow function with filter & map

let items = [

    {
        name: "plain-rice",
        price: 10
    },
    {
        name: "Pilau",
        price: 50
    },
    {
        name: "Chicken",
        price: 80
    },
    {
        name: "Meat",
        price: 140
    },
    {
        name: "Beaf",
        price: 60
    }
];

// we can use extra fuction too
let order = items.filter( (x) => x.price >= 80).map((y) => y.name);
console.log(order);
