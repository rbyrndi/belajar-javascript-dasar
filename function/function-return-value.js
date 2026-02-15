function sayHallo(firstName, lastName){
    const say = "Hello" + firstName + lastName
    return say
}

const result = sayHallo("Robby", "Riandi")
console.log(result)

function getFinalValue(value){
    if (value > 90){
        return "lulus dengan nilai terbaik"
    } else if (value > 70){
        return "lulus"
    } else {
        return "coba lagi"
    }
}

const finalValue = getFinalValue(70)

console.log(finalValue)