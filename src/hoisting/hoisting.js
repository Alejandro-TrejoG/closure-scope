/**
 * El hositing solo aplica en las declaraciones, no en las inicializaciones,
 * por eso es que nos imprime el dos, si hacemos la inicializacion con la declaracion (ej. 2)
 * nos mostrara undefined
 */

a = 2;
console.log(a)  // 2
var a;

// ej. 2

console.log(a)  // undefined
var a = 2;

/**
 * Con las funciones igual aplica el hoisting, ya que podemos hacer el llamado a una funcion que 
 * esta declarada o creada después de dicho llamado
 */

nameOfDog("Tobey")

function nameOfDog(name) {
    console.log(name)
}