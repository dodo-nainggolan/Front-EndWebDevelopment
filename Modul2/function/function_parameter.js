// name merupakan parameter dari fungsi
const sayName = name => console.log(`Nama saya ${name}`);

// example 1
const sayHello = (name, greet) => console.log(`${greet}, ${name}!`);

sayHello("Dimas", "Selamat Pagi")

/* output:
Selamat Pagi, Dimas!
*/

//example 2
const sayHello = () => console.log("Selamat pagi semuanya!");

sayHello()

/* output:
Selamat pagi semuanya!
*/