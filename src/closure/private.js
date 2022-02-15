const person = () => {
    personName = "Name"
    return {
        getName: () => {
            return personName
        },
        setName: newName => {
            personName = newName
        }
    }
}

const newPerson = person();
console.log(newPerson.getName())
newPerson.setName("Alejandro")
console.log(newPerson.getName())