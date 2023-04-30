/* 1. Declare 2 variables a and b, such that a > b, and define values for them. Output their
a. sum
b. difference (between a and b)
c. product
d. quotient (between a and b)
e. remainder (between a and b) */


const a=14
const b=5


let sum=a+b
console.log(sum)

let difference=a-b
console.log(difference)

let product=a*b
console.log(product)

let quotient=a/b
console.log(quotient)

let remainder=a%b
console.log(remainder)


// 2. Print your name and age in the following format: "My name is ____, I am ____"

let userInput=prompt("My name is ____, I am ____")

// 3. Declare a variable with defined value. Print the last digit of the number.

let x=78756
let lastDigit=x%10
console.log(lastDigit)

// 4. Check whether a given number is negative. Print "yes", if it is negative, print "no" otherwise.

const x=0
if(x<0){
    console.log("Yes")
}else{
    console.log("no")
}

const x=-71
if(x<0){
    console.log("Yes")
}else{
    console.log("no")
}

const x=89
if(x<0){
    console.log("Yes")
}else{
    console.log("no")
}

// 5. For a given three digit number calculate the sum of its digits.  306,912,505

let x = 306
let sum = 0

while (x !=0){
  let reminder = x % 10
  sum = sum + reminder
  x = (x-reminder)/10

}
console.log(sum)