const moneyBox = coins => {
    var saveCoins = 0;
    saveCoins += coins
    console.log(`moneyBox: $ ${saveCoins}`)
}

moneyBox(10)
moneyBox(5)

const moneyBox = () => {
    var saveCoins = 0;
    const moneyBoxAdded = coins => {
        saveCoins += coins
        console.log(`I have $ ${saveCoins} in my money box`)
    }
    return moneyBoxAdded;
}

// Aqui es asignado lo que retorna la funcion moneyBox(), es decir, se le asigna la funcion moneyBoxAdded
let iNeedVar = moneyBox()

// Por lo tanto, aqui, estamos pasandole valores a la funcion moneyBoxAdded(), ya que esta funcion es lo que almacena
// la variable iNeedVar

// Al pasarle valores estamos ejecutamos la funcion moneyBoxAdded()
iNeedVar(5)
iNeedVar(10)