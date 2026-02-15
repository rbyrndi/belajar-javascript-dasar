function sum(name, ...data){
    let total = 0 
    for (const item of data){
        total += item;
    }
    console.log(`Total ${name} is ${total}`)
}

sum("Orang", 10, 20, 30, 40)