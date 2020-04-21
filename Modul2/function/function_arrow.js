// example 1
const upperizedNames = ["Dimas", "Widy", "Buchori"]
    .map(name => name.toUpperCase());

console.log(...upperizedNames);

/* output:
DIMAS WIDY BUCHORI
*/

// example 2
const sayHello = (name = "Stranger", greet = "Hello") => console.log(`${greet} ${name}!`);


sayHello("Dimas", "Hai");
sayHello();


/* output:
Hai Dimas!
Hello Stranger!
*/