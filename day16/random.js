// Round - round function()
// it round up the value to nearest integer

// let num1 = 2.5
// console.log(Math.round(num1), "using round for", num1)

// let num2 = 3.4
// console.log(Math.round(num2), "using round for", num2)

// floor - 

// console.log(Math.floor(num1), "using floor for", num1)
// console.log(Math.floor(num2), "using floor for", num2)


// generate number from 0-20 exclusive - exclude 20
// let myRandomNum = Math.random() * 20 
// console.log(Math.floor(myRandomNum))

// const fruits = ["apple", "banana", "mango", "grapes", "orange"]
// length of fruits ? :
// 0-4 inclusive 
// console.log(fruits[4]) 

// const indexOfFruit = Math.floor(Math.random() * fruits.length) 
// console.log(indexOfFruit)
// console.log(`I love ${fruits[indexOfFruit]}`)

// 1, 0, 0, 0,0,1,2,4,0,0,3,1,0,0,4,1,1,1,1,0,1,4,2,0,2,1,0,3,2,0,3

// string also behaves like an array - it has length and index same as array
let mySring = "abcdefghijklmnopqrstuvwxyz"
console.log(mySring[0])

let random5String = ""  // gejhg
// logic 5 times loop
// concat string to previous
// const indexForString = Math.floor(Math.random() * mySring.length)
// console.log("Current random character is", mySring[indexForString])

// console.log("A" + "f" + "r")


for (i = 0; i < 5; i++) {
    const indexForString = Math.floor(Math.random() * mySring.length)
    const currentRandomString = mySring[indexForString]
    random5String += currentRandomString
}

console.log(random5String)
















