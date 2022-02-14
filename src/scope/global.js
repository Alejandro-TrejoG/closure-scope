var hello = "Hello";
var hello = "Hello +"
let world = "Hello World";
// No podemos re-declarar variables con let ni con const
// let world = "Hello World 2";
const helloWorld = "Hello World!";

const anotherFunction = () => {
    console.log(hello)
    console.log(world)
    console.log(helloWorld)
}

anotherFunction()

// Mala practica, NO HACER ESTO 
const anotherFunction2 = () => {
    globalVar = "Hello";
}

anotherFunction2()
console.log(globalVar)

// TAMPOCO ESTO
const anotherFunction3 = () => {
    var localVar = globalVar = "Hello Again";
}

anotherFunction3()
console.log(globalVar)