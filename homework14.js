Recursion;

// 1. Write a recursive function to determine whether all digits of the number are odd or not.

//recursive doesn't work

function isOdd(num) {
  let lastDig = num % 10;

  if (lastDig % 2 === 0) {
    return false;
  } else {
    return isOdd(Math.floor(num / 10));
  }
  return true;
}

//non recursive

function odd(num) {
  let str = num + "";
  for (let i = 0; i < str.length; i++) {
    str[i] = +str[i];
    if (str[i] % 2 === 0) {
      return false;
    }
  }
  return true;
}

// 2.Given an array of numbers. Write a recursive function to find its
//minimal positive element. (if such element does not exist, return -1).

//recursive

function findMinPos(arr) {
  let filtered = arr.filter((el) => el >= 0);

  if (filtered[0] > filtered[1]) {
    return findMinPos(filtered.slice(1));
  } else if (filtered[0] < filtered[1]) {
    return findMinPos([filtered[0], ...filtered.slice(2)]);
  }

  if (filtered.length < 1) {
    return -1;
  }

  return filtered[0];
}

//non recursive solution

function findMinPos(arr) {
  if (arr.length < 1) {
    return -1;
  }
  let newA = arr.filter((el) => el >= 0);
  return Math.min(...newA);
}

// 3.

/*const nodes= [
  {id:1,parentId:null},
  {id:2,parentId:1},
  {id:3,parentId:1},
  {id:4,parentId:2},
  {id:5,parentId:2},
  {id:6,parentId:5},
  {id:7,parentId:5},
  {id:8,parentId:3},
  {id:9,parentId:8},
  {id:10,parentId:9}
  ]*/

function getTree(nodes, parentId = null) {
  let tree = {};

  nodes.forEach((el) => {
    if (el.parentId === parentId) {
      let children = getTree(nodes, el.id);
      tree[el.id] = children;
    }
  });

  return tree;
}
getTree(nodes);

//
function getTree(nodes, parentId = null) {
  let tree = [];

  nodes.forEach((el) => {
    if (el.parentId === parentId) {
      let children = getTree(nodes, el.id);

      tree.push({ id: el.id, children: children });
    }
  });

  return tree;
}

// 5. Create a function that takes a number num and returns its double factorial.

function doubleFactorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * doubleFactorial(num - 2);
}

// 6. Create a function to check if a given integer is a factorial of integer or
// not. The return value should be a boolean.

function checkFactorial(num) {
  for (let i = 1; i > 0; i++) {
    if (num % i === 0) {
      num = Math.floor(num / i);
    } else {
      break;
    }
  }
  if (num === 1) {
    return true;
  } else {
    return false;
  }
}
