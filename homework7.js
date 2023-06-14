//1. arr.pop

function pop(array) {
  let result = [];
  for (let i = 0; i < array.length - 1; i++) {
    result[i] = array[i];
  }

  return result;
}
pop(["f", "g", "m"]); //daghal lucum

// 2. arr.push

function arrPush(arr, el) {
  let result = [];

  let length = arr.length;
  arr[length] = el;

  for (let i = 0; i < length; i++) {
    if (arr[i] < length) {
      result += arr[i];
    } else {
      result = result + arr[i] + el;
    }
  }
  return result.length;
}

arrPush([1, 2], "k");

//3. arr.shift

function arrShift(arr) {
  let length = arr.length;
  let res = [];

  for (let i = 0; i < length - 1; i++) {
    res[i] = arr[i + 1];
  }
  return arr[0];
}
arrShift(["j", "h", "m", "l"]);

//4.arr.unshift

function arrUnshift(arr, val) {
  let length = arr.length;
  for (let i = length - 1; i >= 0; i--) {
    arr[i + 1] = arr[i];
  }
  arr[0] = val;
  return arr;
}
arrUnshift(["j", "h"], "k");

//5. arr.includes

let arr = [1, 2, 3, "a"];

function arrIncludes(el) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      return true;
    }
  }
  return false;
}
arrIncludes("v");

//6. arr.join

let arr = [1, 2, "k"];

function arrJoin(el = ",") {
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[arr.length - 1]) {
      result = result + arr[i];
    } else {
      result = result + arr[i] + el;
    }
  }

  return result;
}
arrJoin(" and ");

//7. string.split

let string = "What's your name";
function stringSplit(str, separ) {
  let result = [];
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === separ) {
      result[result.length] = newStr;
      newStr = "";
    } else {
      newStr += str[i];
    }
  }
  if (newStr) {
    result[result.length] = newStr;
  }

  return result;
}
stringSplit(string, " ");
