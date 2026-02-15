function factorial(value){
    let result = 1
    for (let i = 1 ; i <= value; i++){
        result *= i
    }
}

console.info(factorial(5))


function factorialRecursive(value){
    if (value == 1){
        return 1
    } else {
        return value * factorialRecursive(value - 1)
    }
}