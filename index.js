// startsWith(searchString, position) -> check a string starts with another string

// endsWith(searchString, length) -> check a string ends with another string

// includes(searchString, position) -> check if a string contains another string

// all these methods are case sensitive

const message = "Today is friday";
console.log(message.startsWith("To", 0)); // true
console.log(message.endsWith("day", 5)); // true
console.log(message.includes("is", 5)); // true