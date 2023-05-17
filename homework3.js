// 1. Write a function that will take a number and return the number of its digits.

function numberOfDigits(x) {

    let sum = 0
    while (x !== 0) {
      let reminder = x % 10
      x = (x - reminder) / 10
      reminder = 1
      sum = sum + reminder
    }
  return sum
  }
  numberOfDigits(12345678)  



  // 2. Write a function that will take a number and return the count of ‘9’ digit.

  function countOf9(x) {
    let sum = 0
    while (x !== 0) {
      let reminder = x % 10
      x = (x - reminder) / 10
      if (reminder !== 9) {
        continue
      }
      reminder = 1
      sum = sum + reminder
    }
  return sum
  }
  countOf9(12993)

  //3. Insert a number. Print "yes" if it contains 3 successive zeros, otherwise print "no".

  let x=120300
  let sum = 0
  while (x !== 0) {
    let reminder = x % 10
    x = (x - reminder) / 10
    if (reminder !== 0) {          
      continue
    } 
    
    sum += 1                       //half-solved?

  }

if (sum === 3) {
  console.log("yes")
} else {
  console.log("no")
}






