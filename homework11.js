// 1. Given an array, get only unique elements from that array. (don't use for loop, use only array methods)

let arr = [1, 2, 3, 4, 1, 1, 5];

function getUnique(arr) {
  let unique = [];

  arr.forEach(function (el) {
    if (unique.indexOf(el) === -1) {
      unique.push(el);
    }
  });
  return unique;
}

// 2. Implement bubble sort with while/for loop.

function bubble(arr) {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        sorted = false;
      }
    }
  }
}

// 5.Given an array of objects (like {name, surname, age, gender} as in previous lesson). Return only girls "names" sorted by their age.

arr = [
  {
    name: "Davit",
    surname: "Margaryan",
    age: 30,
    gender: "male",
  },
  {
    name: "Armen",
    surname: "Julhakyan",
    age: 28,
    gender: "male",
  },
  {
    name: "Hrachya",
    surname: "Khachatryan",
    age: 27,
    gender: "male",
  },
  {
    name: "Larisa",
    surname: "Shahnazaryan",
    age: 23,
    gender: "female",
  },
  {
    name: "Tatev",
    surname: "Azaryan",
    age: 24,
    gender: "female",
  },
  {
    name: "Zaruhi",
    surname: "Danielyan",
    age: 24,
    gender: "female",
  },
  {
    name: "Areg",
    surname: "Alaverdyan",
    age: 29,
    gender: "male",
  },
  {
    name: "Henri",
    surname: "Engibaryan",
    age: 20,
    gender: "male",
  },
];

arr
  .filter(function (el) {
    if (el.gender === "female") {
      return true;
    }
  })
  .sort(function (a, b) {
    if (a.age < b.age) {
      return 1;
    }
  });
