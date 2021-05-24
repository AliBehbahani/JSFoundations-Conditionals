
let number1 = 5
let number2 = 7
let operation = "*"
console.log(`Please enter the first number: ${number1}`)
console.log(`Please enter the second number: ${number2}`)
console.log(`please choose the operation (+,-,/,*): ${operation}`)


console.log("--------------")

if (operation === "-")console.log(`${number1} ${operation} ${number2} = ${number1 - number2}`)
else if (operation === "+")console.log(`${number1} ${operation} ${number2} = ${number1 + number2}`)
else if (operation === "/")console.log(`${number1} ${operation} ${number2} = ${number1 / number2}`)
else if (operation === "*")console.log(`${number1} ${operation} ${number2} = ${number1 * number2}`)
