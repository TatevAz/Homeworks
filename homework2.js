/* 1 Declare variable. Initialize it with the value, which shows temperature in degrees Celsius.
Print its equivalent in degrees Fahrenheit. To convert temperatures in degrees Celsius to
Fahrenheit use the following formula: °C * 1.8 +32 = °F .*/

let celsius=-40
let fahrenheit=celsius * 1.8 +32
console.log(fahrenheit)


// 2.Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.

let a = 7
let b = 21
if (a % b === 0 || b % a === 0) {
  console.log(1)
} else {
  console.log(0)
}

// 3. Given any number between 1 and 12. Print the name of the respective month.

let quest=+prompt("what is the first month of the year՞")
switch (quest) {
  case 1:
    console.log("January")
    break
  case 2:
    console.log("February")         //I'm sure, this isn't the right solution, because it's so long
    break
  case 3:
    console.log("March")
    break
  case 4:
    console.log("April")
    break
  case 5:
    console.log("May")
    break
  case 6:
    console.log("June")
    break
  case 7:
    console.log("July")
    break
  case 8:
    console.log("August")
    break
  case 9:
    console.log("September")
    break
  case 10:
    console.log("October")
    break
  case 11:
    console.log("November")
    break
  case 12:
    console.log("December")
    break
    default:
    console.log("I dont know")

}



// 4. Given three numbers. Find the maximum one.

let a=-4
let b=6
let c=0
Math.max(a,b,c)

// 5. Given a number. Print its absolute value. (without Math.abc)

let a = -123
if (a<0) {
console.log(-a)
} else {
console.log(a)
}

/* 6. Declare three variables. Two of them are the bounds of a range. Print “In bounds”, if the
third number is in the range, otherwise print “Out of bounds”. */

let a = 10
let b = 19
let c = 9
if (a < c && c < b || b < c && c < a) {
  console.log("In bounds")
} else {
  console.log("Out of bounds")
}

