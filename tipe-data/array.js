let arrayKosong = []

let arrayNama = ["Robby", "Riandi"]

console.log(arrayNama[0])

const names = []
names.push("Robby", "Riandi", "joko", "mulyono", "agung") //menambahkan value ke array
console.table(names)

names[0] = "Ganteng" // ganti value di array
console.table(names)

delete names[0] // hapus value di array
console.table(names)

names[0] = "Robby" //ditambahkan lagi
console.table(names)

names.push(["Robby", "Ganteng", "Banget"]) // array multidimensi
console.table(names)