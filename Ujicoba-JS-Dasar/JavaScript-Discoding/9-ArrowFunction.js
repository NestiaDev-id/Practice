// function declaration
// function sayHello(greet) {
//     console.log(`${greet}!`);
// }
 
// function expression
// const sayName = function (name) {
//     console.log(`Nama saya ${name}`)
// }

// function expression
const sayName = name => {
    console.log(`Nama saya ${name}`)
}

sayName("Leia");

/* output
Nama saya Leia
 */
// ! tanpa parameter
const sayHello = () => {
    console.log("Selamat pagi semuanya!")
};

sayHello();

/* output
Selamat pagi semuanya!
 */

// !bisa disingkat menjadi 1 baris code tanpa menggunakan tanda kurung kurawal
const sayName1 = name => console.log(`Nama saya ${name}`);
sayName("Leia");

const sayHello1= () => console.log("Selamat pagi semuanya!");
sayHello();

/* output
Nama saya Leia
Selamat pagi semuanya!
 */

const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

/* output
12
 */

