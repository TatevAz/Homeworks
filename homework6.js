// 1. Given an object. Invert it (keys become values and values become keys). If there is
//more than key for that given value, concat the values.

let data = {
  a: 1,
  b: 4,
  c: 3,
  d: 2,
  z: 1,
  q: 2,
  h: 3,
  r: 2,
};
function invert(obj) {
  let newObj = {};
  for (let key in obj) {
    if (newObj[obj[key]] !== undefined) {
      newObj[obj[key]] = newObj[obj[key]] + key;
    } else {
      newObj[obj[key]] = key;
    }
  }
  return newObj;
}
invert(data);

//2. Given two objects. Write a function that performs shallow compare.

var c = { a: "1" };
var d = { a: "1", b: "2" };

function shallowCompare(obj1, obj2) {
  for (let key in obj1) {
    for (let k in obj2) {
      if (obj1[key] !== obj2[k]) {
        return false;
      }
    }
  }

  return true;
}
shallowCompare(c, d);

//3.

function isIsogran(str) {
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] !== undefined) {
      return false;
    } else {
      obj[str[i]] = 1;
    }
  }
  console.log(obj);
  return true;
}
isIsogran("abca");
