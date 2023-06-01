// 1. Write a function to determine if number prime.

function primeNumber(x) {
  let prime = true;
  if (x === 1) {
    console.log("false");
  } else if (x > 1) {
    for (let i = 2; i < x; i++) {
      if (x % i === 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}
primeNumber(19);

// simple solution

/* function primeNumber(x) {
  if (x === 1) {
    return false
  } else if (x === 2) {
    return true
  } else {
    for (let i = 2; i < x; i++) {
      if (x % i === 0) {
        return false
      }
    }
    return true
  }
}
primeNumber(4);*/

//2. Write a function to console.log all prime numbers before the given number.

function primeNumber(x) {
  if (x === 1) {
    return false;
  } else if (x === 2) {
    return true;
  } else {
    for (let i = 2; i < x; i++) {
      if (x % i === 0) {
        return false;
      }
    }
    return true;
  }
}
function printPrime(n) {
  for (let x = 2; x < n; x++) {
    if (primeNumber(x) === true) {
      console.log(x);
    }
  }
}
printPrime(10);

//3. Write a function, which receives a string, finds possible largest numbers in the string and
//returns their sum.

function sumOfNumbers(str) {
  let result = "";
  let sum = 0;

  function isNumber(n) {
    return !isNaN(n);
  }

  for (let i = 0; i < str.length; i++) {
    if (isNumber(str[i])) {
      result += str[i];
      if (!isNumber(str[i + 1])) {
        sum += +result;
        result = "";
      }
    }
  }

  console.log(sum);
}
sumOfNumbers("FwrtY45KH25L120mn10P");

//4. Write a function which receives two strings and removes appearances of the second
//string from the first one.

function fn(str, symb) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let same = false;
    for (let j = 0; j < symb.length; j++) {
      if (str[i] === symb[j] && i !== j) {
        same = true;
        break;
      }
    }
    if (!same) {
      result += str[i];
    }
  }
  return result;
}
fn("This is some text.", "is");

//5.Write a function to compute a new string from the given one by moving the first char to
//come after the next two chars, so &quot;abc&quot; yields &quot;bca&quot;. Repeat this process for each
//subsequent group of 3 chars. Ignore any group of fewer than 3 chars at the end.

function movingChar(str) {
  //half-solved
  if (str.length < 3) {
    return str;
  }
  let result = "";
  for (let i = 0; i < str.length; i += 3) {
    result += str[i + 1] + str[i + 2] + str[i];
  }
  return result;
}
movingChar("aweyoolp");
