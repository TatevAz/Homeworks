//  1. array find

let arr = [1, 2, 3, 4];

function find(arr, fun) {
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}
function fun(val) {
  if (val === 3) {
    return true;
  }
  return false;
}

// 2. array findIndex

let arr = [1, 2, 3, 4];

function findIndex(arr, fun) {
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i])) {
      return i;
    }
  }
  return -1;
}
function fun(val) {
  if (val === 3) {
    return true;
  }
  return false;
}

// 3. array filter

let arr = [1, 2, 3, 4, 4, 6, 8];

function filter(arr, fun) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
function fun(val) {
  if (val % 2 === 0) {
    return true;
  }
  return false;
}
