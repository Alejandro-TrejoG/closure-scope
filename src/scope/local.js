const helloWorld = () => {
    const hello = "Hello World";
    console.log(hello);
}

helloWorld();

// Aqui no imprime el valor de la variable, porque dicha variable solo existe y puede ser llamada dentro de la funcion
// Es decir, solo es util de forma local dentro de la funcion 
console.log(hello);

/**
 * AMBITO LEXICO
 * 
 * Va de adentro hacia afuera, es decir que JS busca siempre la referencia a la
 * variable desde el bloque más interno
 */

var hello = "I am global";

const anotherFunction = () => {
    var hello = "I am local";
    const fun = () => {
        return hello
    }

    console.log(fun())
}

anotherFunction()
console.log(hello)
