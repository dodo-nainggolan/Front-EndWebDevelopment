// function declaration
function sayHello(greet) {
    console.log(`${greet}!`);
}


// function expression
const sayName = function(name) {
    console.log(`Nama saya ${name}`)
}


// arrow function expression
// const sayHello = greet => console.log(`${greet}!`);
// const sayName = name => console.log(`Nama saya ${name}`);

// stored in variable
// const sayName = name => console.log(`Nama saya ${name}`);

// Passed as An Argument
// ["Dimas", "Widdy", "Buchori"].forEach(name => console.log(`Nama saya ${name}`));

// Stored in Object Property
// const user = {
//     introduce: name => console.log(`Nama saya ${name}`)
// }