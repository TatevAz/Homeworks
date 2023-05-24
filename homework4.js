//1. Given a string and a symbol. Find the number of occurrences of the symbol in the string.

function occurrencesSymbol(str, symb) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === symb) {
      count++;
    }
  }

  return count;
}
occurrencesSymbol("another string", "t");

//2. Given a string. Check whether the string is palindrome or not.

function palindrome(str) {
  if (str.length === 0) {
    return "no";
  } else {
    let result = "yes";

    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        result = "no";
        break;
      }
    }
    return result;
  }
}

//3. Given a string and symbols. Change first symbol by the second one in the string.

function changeSymbol(str, changedSymb, symb) {
  let res = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === changedSymb) {
      res = res + symb;
    } else {
      res = res + str[i];
    }
  }

  return res;
}
changeSymbol("The results are not recorded yet", "t", "w");

//4. Print the following number pattern:
/*1
12
123
1234
12345
1234
123
12
1*/

function followingNumber(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result = result + i;
    console.log(+result);
  }
  if (result.length === num) {
    for (let j = num; j !== 1; j--) {
      result = (result - (result % 10)) / 10;
      console.log(result);
    }
  }
}

//5. Print following patterns:

//a)

//*
// *
//  *
//   *

function spaces(num) {
  let str = "";
  for (let i = 0; i < num; i++) {
    str += " ";
  }
  return str;
}

function diagonal(x) {
  let str = "";
  let probel = 1;
  for (let i = 1; i <= x; i++) {
    str = spaces(probel) + "*";
    probel++;
    console.log(str);
  }
}
diagonal(4);
