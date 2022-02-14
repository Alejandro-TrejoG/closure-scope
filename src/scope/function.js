const fruits = () => {
    var fruit = "apple";
    console.log(fruit);
}

fruits()

// Este console no imprime nada debido a que la variable solo existe dentro de la funcion
// a la que pertence
console.log(fruit)

const anotherFunction = () => {
    var x = 1
    var x = 2
    let y = 1
    // Este let nos marcara error debido a que estamos tratando de re-declarar
    // la variable, let solo nos permite re-asignar, mientras que const no nos permite
    // ninguna de las dos
    // > let y = 2 <

    console.log(x)
    console.log(y)
}

anotherFunction()