// 1. arrIndexOf

let arr = ["Banana", "Orange", "Apple", "Mango", "Apple"];

function arrIndexOf(arr, item, start = 0) {
  if (start < 0) {
    start = start + arr.length;
  }

  for (let i = start; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return -1;
}

// 2. arrlastIndexOf

const arr = ["Banana", "Orange", "Apple", "Mango", "Apple"];

function arrLastIndexOf(arr, item, start) {
  if (start < 0) {
    start = start + arr.length;
  }
  if (start < -arr.length) {
    return -1;
  }
  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] === item) {
      return i;
    }
  }
  return -1;
}
arrLastIndexOf(arr, "Apple");

// 3. arrSlice

const arr = ["Banana", "Orange", "Apple", "Mango", "Apple"];

function arrSlice(arr, start = 0, end = arr.length - 1) {
  let result = [];

  if (start < 0) {
    start = start + arr.length;
  }

  for (let i = start; i <= end; i++) {
    result.push(arr[i]);
  }

  return result;
}
arrSlice(arr, 1, 3);

// 4. stringCharAt

let str = "kjg";

function charAt(str, index = 0) {
  for (let i = 0; i < str.length; i++) {
    if (index > str.length - 1 || index < 0) {
      str[index] = "";
    } else {
      str[i] = index;
    }
  }
  return str[index];
}

// 5. stringIncludes

let str = "Hello world, welcome to the universe.";

function includes(str, el, start = 0) {
  for (let i = start; i < str.length; i++) {
    for (let j = 0; j < el.length; j++) {
      if (str[i + j] !== el[j]) {
        break;
      }
      if (j === el.length - 1) {
        return true;
      }
    }
  }
  return false;
}
includes(str, "world   ");

// 6. stringIndexOf

let str = "Hello world, welcome to the universe.";

function stringIndexOf(str, el, start = 0) {
  for (let i = start; i < str.length; i++) {
    for (let j = 0; j < el.length; j++) {
      if (str[i + j] !== el[j]) {
        break;
      }
      if (j === el.length - 1) {
        return i;
      }
    }
  }
  return -1;
}
stringIndexOf(str, "wo");

// 7. stringLastIndexOf

let str = "Hello world, welcome to the universe.";

function stringLastIndexOf(str, el, start = str.length) {
  for (let i = start - 1; i >= 0; i--) {
    for (let j = el.length - 1; j >= 0; j--) {
      if (str[i + j] !== el[j]) {
        break;
      }
      if (j === el[0]) {
        return i;
      }
    }
  }
  return -1;
}
stringLastIndexOf(str, "llo"); //doesn't work

// 8. stringRepleace

let str = "Visit Microsoft!";

function replace(str, searchValue, newValue) {
  let newStr = [];
  let strToArray = str.split(" ");

  for (let i = 0; i < strToArray.length; i++) {
    newStr.push(strToArray[i]);
  }
  for (let j = 0; j < newStr.length; j++) {
    if (newStr[j] === searchValue) {
      searchValue = newValue;
    }
  }
  return newStr.join(" ");
}
replace(str, "Microsoft", "Gt"); //doesn't work

//
function replace(str, searchValue, newValue) {
  return str.split(searchValue).join(newValue);
} //works correctly

//another option that doesn't work
let str = "Visit Yerevan.";

function replace(str, search, newVal) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < search.length; j++) {
      if (str[i + j] !== search[j]) {
        newStr += str[i];
      } else {
        newVal[j] = search[j];
        newStr = str[i] + newVal[j];
      }
    }
  }
  return newStr;
}

// 9. stringStartsWith

let str = "Hello world, welcome to the universe.";

function startsWith(str, search, start = 0) {
  for (let i = start; i < str.length; i++) {
    if (str.indexOf(search) !== 0 && str[i] !== search[i]) {
      return false;
    }
  }
  return true;
}
startsWith(str, "Hello k");

// 10. substring

let str = "Hello world!";

function substring(str, start = 0, end = str.length) {
  let sub = "";

  for (let i = start; i < end; i++) {
    if (start > end) {
      start = end;
      //end=?
    }
    sub[i] = str[i];
    sub += str[i];
  }
  return sub; // half-solved
}

// 11. stringTrim

let text = "  Hello world!";

function trim(string) {
  for (let i = 0; i < string; i++) {
    let str = "";

    if (string[i] !== " ") {
      string[i] += str[i];
    }
  }
  return str;
}
