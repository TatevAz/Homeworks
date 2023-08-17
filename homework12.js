/*Given an array of objects like {name, surname, age, gender} as in previous lesson.


1. Create a new Map from where entries will be array elements like this.
            key - ['name', 'surname', 'age', 'gender]
            value - ['Davit', 'Margaryan', 30, 'male']
    1.1 use map.set
    1.2 don't use map.set (use new Map(put entries here))
*/

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

let newMap = new Map();
arr.forEach((person) => newMap.set(Object.keys(person), Object.values(person)));

//nuyny reduceov

arr.reduce(
  (acc, person) => acc.set(Object.keys(person), Object.values(person)),
  new Map()
);

//another solutin
new Map(
  arr.map(function (person) {
    const keys = Object.keys(person);
    const values = Object.values(person);
    const result = [keys, values];
    return result;
  })
);

new Map(arr.map((person) => [Object.keys(person), Object.values(person)])); //arrow function

/* 2. Create an object like this
    {
             Davit: {
                   surname: 'Margaryan',
                   age: 30,
                   gender: 'male'
             },
            Armen: {
                   surname: 'Julhakyan',
                   age: 28,
                   gender: 'male'
             },
            ....
     }*/

arr.reduce(function (acc, el) {
  acc[el.name] = {
    surname: el.surname,
    age: el.age,
    gender: el.gender,
  };
  return acc;
}, {});

/* 3. Create an array like this
[' Davit Margaryan', [30, 'male'], 'Armen Julhakyan', [28, 'male'], 'Hrachya Khachatryan', [27, 'male'], ............ ] */

arr.reduce(function (acc, el) {
  acc.push(`${el.name} ${el.surname}`, [el.age, el.gender]);
  return acc;
}, []);
