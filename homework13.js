// 1. Given an array. Write a recursive function that returns the sum of it. (Hint: arr.pop())

function recursiveSum(arr) {
  return arr.reduce(function (acc, el) {
    if (Array.isArray(el)) {
      return acc + recursiveSum(el);
    }
    return acc + el;
  }, 0);
}

// 2. Given a number. Write a recursive function that reverse the number. Return the new
//number.

function recRev(num) {
  if (num < 10) {
    return num;
  }
  let revNum = "";

  for (let x = num; x != 0; x = (x - (x % 10)) / 10) {
    let lastDig = x % 10;
    revNum += lastDig;
  }
  return Math.floor(revNum);
}

// or
function recRev(num) {
  let reversed = (num + "").split("").reverse().join("");
  return Math.floor(reversed);
}

// recursive

function revers(num, result = 0) {
  let lasteDigit = num % 10;
  let newNum = Math.floor(num / 10);

  result = result * 10 + lasteDigit;

  if (num < 10) {
    return result;
  } else {
    return revers(newNum, result);
  }
}

// 3. Given a string, compute recursively (no loops) a new string where all appearances of "pi"
//have been replaced by "3.14".

function pi(str) {
  let res = str;

  if (str.toLowerCase().includes("pi")) {
    res = str.replace("pi", "3.14");
    return pi(res);
  }
  return res;
} // lower Case doesn't work

// 4. Given a string. Return true, if it is mirror symmetric to its middle symbol.

function recStr(str) {
  let result = str;
  if (result.length < 2) {
    return true;
  }
  if (str[0] === str[str.length - 1]) {
    result = str.substring(1, str.length - 1);
    return recStr(result);
  }

  return false;
} //

// 5. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create
// function that concats arrays).

function flatten(arr) {
  var result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

// 6. Given a number. Write a function that calculates its sum of the digits and if that sum has
//more than 1 digit find the sum of digits of that number. Repeat that process if needed
//and return the result.

function sumOfDigit(num) {
  let x = num;
  let sum = 0;

  while (x != 0) {
    let reminder = x % 10;
    sum = sum + reminder;
    x = (x - reminder) / 10;
  }
  if (sum > 9) {
    return sumOfDigit(sum);
  }
  return sum;
}
