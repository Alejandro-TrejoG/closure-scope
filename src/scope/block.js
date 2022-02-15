const fruits = () => {
    if (true) {
        var fruit1 = "apple"
        let fruit2 = "banana"
        const fruit3 = "kiwi"

        /**
         * Aqui, mostramos en consola las variables declaradas con let y const dentro del if
         * debido a que no podemos usar dichas variables declaradas con estas palabras reservadas
         * fuera del bloque donde se definieron
         */
        console.log(fruit2)
        console.log(fruit3)
    }

    console.log(fruit1)
}

fruits()

let x = 1;

{
    let x = 2;
    console.log(x)
}
console.log(x)