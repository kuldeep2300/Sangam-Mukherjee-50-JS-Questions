//* 1) Data types in JS

//? Premitives data types
/* let symbol = Symbol("unique");
let string = "Kuldeep Verma";
let bigInt = BigInt(1232323232323232);
console.log(`BigInt : ${bigInt}, Type : ${typeof bigInt}`);

let boolean = true;
let number = 34;
let nullVar = null;
let undefinedVar = undefined;

//? Non-premetive data types
let object = {
  name: "Kuldeep",
  age: 21,
  isMarried: false,
};

let array = ["Kuldeep", "Bhawana", 1, 3, 4, 5, true, false];
let dateVar = new Date();
console.log(dateVar.toLocaleDateString()); */

//* 2) Equal and Strick Equality (== & ===)

//? (==) : Perform type coercion before comparing
//? (===) : Check both type and value of variable and stop the type coercion

/* console.log(5 == "5");
console.log(5 === "5");

console.log(0 == false);
console.log(0 === false); */

//* 3) Null and Undefined

/* //? Null : Meaning explicitly saying a variable does not have any value it is having null value.
let nullVar = null;
console.log(nullVar);
console.log(typeof nullVar); // Object (early bug in JS)

//? Undefined : Meaning we forgot to assing a value to the variable that's why it is having undefined.
let undefinedVar;
console.log(undefinedVar, typeof undefinedVar);
 */

//* 4) Hoisting in JS

//? Hoisting : Concept where the variable declaration (using var keyword only are hoisted) and function declaration are moved to the top of their scopes, where var keyword only supported hoisting let and const does not support it will give us error. Var keyword are hoisted to the top of their scopes but its not initialized that's why its defualt value is undefined. While normal functions only support hoisting concept where whole complete function are moved to the top and we can use it before declaring but only normal function, arrow function does not support hoisting.

/* console.log(x);
var x = 5;

console.log(y); // ❌ give error
let y = 10;

hoistedFunction();
function hoistedFunction() {
    console.log('I am hoisted');
}

hoisted(); // ❌ give error
const hoisted = () => {
    console.log('I am fat arrow function and not hoisted');
}
 */

//* 5) Let, const and var

//? var

/* // hoisted also
console.log(x);
var x = 10;

// block scope
{
    console.log(x);
}

// function scope or global scope
console.log(x);

// redclared
var x = 20;
console.log(x);

// updated
x = 50;
console.log(x);
 */

//? Let

// not hoisted
// console.log(x); // ❌ give error
/* let x = 20;

// scope
{
    console.log(x);
    let y = 10;
    console.log(y);
}

console.log(x);
// console.log(y); // ❌ give error

// redeclared
// let x = 50; // ❌ give error

// updated
x = 100;
console.log(x); */

//? Const
// not hoisted
// const name = 'Kuldeep';

// not redclared
// not updated
// having block scope onl

//* 6) Variable Scoping

//? Variable Scoping : Scope where variable is declared and accessed. In JS we have to scope
// 1. Global Scope : Variable is declared outside of function or block scope
// 2. Local Scope : Variable is declared inside of function or block scope

//? JS uses lexical scoping, which means inner functions have access to the variables of outer scopes.

/* let globalVariable = "I'm global";

function exampleFunction() {
  let localVariable = "I'm Local";

  console.log(globalVariable);
  console.log(localVariable);
}

exampleFunction();
console.log(globalVariable); */
// console.log(localVariable); // ❌ give error

//* 7) TDZ : Temporal Dead Zone

/* A zone basically a period between 
1) Entering a scope
2) A Point where variable is declared and initialized

If the variable is not in the scope or if we stuck in this zone because of not accessing a variable then it is known as Temporal dead zone.
*/
/* 
console.log(x); // ❌ Cannot access 'x' before initialization
let x = 5;

function exampleFunction() {
    console.log(y); // ❌ Cannot access 'x' before initialization
    let y = 10;
}

exampleFunction(); */

//* 8) Variable Shadowing : If inner function or scopes having same variable name like outer scope then inner function shadowing(override) or hiding it effectively the outer one and showing inner one value.
/* 
let x = 10;

function exampleFunction() {
    let x = 20;
    console.log(x);

    if(true) {
        let x = 30;
        console.log(x); // x shadows both outer ones value
    }

    console.log(x);
}

exampleFunction();
console.log(x); */

//* 9) Closures : It is created when a function have access to variables of their outer lexical scopes, even after outer function has returned but the variable scopes does not ended. Closures are created when every time a function is created.
/* 
// Outer function that creates a closure
function createGreeter(greeting) {
  // This variable is enclosed in the closure
  let count = 0;

  // Inner function that forms a closure
  return function (name) {
    count++;
    console.log(
      `${greeting}, ${name}! This greeting has been used ${count} times.`
    );
  };
}

const casualGreeter = createGreeter('Hello');
const formalGreeter = createGreeter('Hi');

// Using the casualGreeter function
casualGreeter('Kuldeep');
casualGreeter('Kushagra')
casualGreeter('Kunal')

// Using the formalGreeter function
formalGreeter('Manas');
formalGreeter('Harish');

console.dir(casualGreeter)
console.dir(formalGreeter) */

//* 10) Ways to define a function in JS - 4 ways

/* //? 1) Normal function declaration - Hoisted, can be access before its defined
function greet(name) {
  return `Hello, ${name}`;
}

//? 2) Function expression - Assigned to a variable and not hoisted
const greet = function (name) {
  return `Hello, ${name}`;
};

//? 3) Arrow function - Shorter syntax and not hoisted
const greet = (name) => {
  return `Hello, ${name}`;
};

//? 4) Function constructor - Creates a function dynamically
const greet = new Function("name", "return `Hello, ${name}!`;");
 */

//* 11) Higher Order Function : A function which take another function as an arguments or return a function called hod.

//? Higher order function that take another function as an argument
/* function operate(x, y, operation) {
  return operation(x, y);
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

console.log(operate(50, 30, add));
console.log(operate(50, 30, subtract));

//? Higher order function that return a function
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const factorCreated = createMultiplier(5);
const result = factorCreated(5);

console.log(result); */

//* 12) Function Hoisting : Where function declaration are moved to top of their scopes during compilation phase. Function declaration can only be hoisted, funciton expression and fat arrow function are not hoisted to the top of their scopes.

/* hoistedFunction();
function hoistedFunction() {
  console.log('Hi I am already hoisted...');
} */

//* 13) Pure function : A pure function a function that always returns the same output for same input and has no side effect, and does not rely on external state, make code more predictable and easier to test.

// Pure function
/* function add(a, b) {
  return a + b;
}

console.log(add(5, 10));
console.log(add(5, 10));

// Impure function
let total = 0;
function sum(value) {
  return total = total + value;
}

console.log(sum(5));
console.log(sum(5));
console.log(sum(5));
console.log(sum(5));
 */

//* 14) IIFE - Stands for Immediately invoked function

//? IIFE with no arguements
/* (function () {
  let privateVar = "I'm Private variable";
  console.log("IIFE with no arguements");
  console.log(privateVar);
})();

//? IIFE with arguements
(function (name) {
  console.log("IIFE with arguements");
  console.log(`Hi, ${name}`);
})("Kuldeep Verma");

//? Arrwo function IIFE
((name) => {
  console.log("Arrow function IIFE");
  console.log(`Hi, ${name}`);
})("Kushagra Verma"); */

//* 15) Ways to create objects

//? 1) Object literal notation
/* let object1 = {
  person: "Kuldeep Verma",
  age: 21,
  greet: function () {
    console.log(`Hello, ${this.person}`);
  },
};

object1.greet();

//? 2) Function Constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hello, : ${this.name}`);
  };
}

const personObject1 = new Person("Kuldeep Verma", 21);
personObject1.greet();

//? 3) Object.create() method
const person2 = {
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
};

const person2Obj = Object.create(person2);
person2Obj.name = "Kuldeep Verma";
person2Obj.age = 21;

console.log(person2Obj);

//? 4) Using ES6 Class Syntax

class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, ${this.name} and you are ${this.age} years old.`);
  }
}

const personClassObj = new PersonClass('Kushagra Verma', 21);
console.log(personClassObj);
 */

//* 16) Add or remove properties from Object
/* 
let object = {
  name: "Kuldeep Verma",
};

//? Adding properties
object.age = 21;
object["city"] = "Kota";
object["isMarried"] = false;
object.tall = true;

//? Removing properties
delete object.tall;
delete object.isMarried;
delete object.city;

console.log(object); */

//* 17) Check certain property exist in the object or not

/* let object = {
  name: "Kuldeep",
  age: 21,
};

//? 1) Using in operator
console.log("name" in object);
console.log("age" in object);
console.log("job" in object); // ❌ false

//? 2) Using hasOwnProperty method
console.log(object.hasOwnProperty('name'));
console.log(object.hasOwnProperty('age'));
console.log(object.hasOwnProperty('job'));

//? 3) Using undefined check
console.log(object.name === undefined);
console.log(object.age === undefined);
console.log(object.job === undefined);

//? 4) Using optaional chaining
console.log(object?.job); */

//* 18) This Keyword : This keyword refers to the object which executing the current function. Its value is determined by how a function is called.

//? In a method
/* let person = {
  name: "Kuldeep",
  age: 21,
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};

person.greet();

//? In a fat arrow function
const person2 = () => {
  console.log(`Hello, ${this.name}`);
};

person2.call({ name: "Kuldeep" }); // Array function does not bind their own this and return undefined.
// Here this give empty object that's why we are using one of call, bind, apply method

//? In a constructor
function personFun(name) {
  this.name = name;
  this.greet = function () {
    console.log(`Hello, ${name}`);
  }
}

const personObj = new personFun('Kuldeep');
console.log(personObj.greet()); */

//* 19) Ways to loop through an array

/* let fruits = ["apple", "banana", "orange", "mango"];

//? while loop
let i = 0;
while (i < fruits.length) {
  console.log(`${i} - ${fruits[i]}`);
  i++;
}

//? do-while loop
let j = 0;

do {
  console.log(`${j} - ${fruits[j]}`);
  j++;
} while (j < fruits.length);

//? for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(`${i} - ${fruits[i]}`);
}

//? for Each method
fruits.forEach((fruit) => {
  console.log(`${fruit}`);
});

//? for of method
for (let fruit of fruits) {
  console.log(fruit);
}

//? for-in method
for (let index in fruits) {
  console.log(`${index} - ${fruits[index]} `);
}

//? map method
fruits.map((fruit) => {
  console.log(fruit);
});
 */

//* 20) Add or remove elements from an array
/* let fruits = ['apple', 'banana', 'mango'];

//? Adding element
fruits.push('grapes');
fruits.unshift('watermelon');

//? Removing an element
fruits.pop();
fruits.pop();
fruits.shift();

//? We can perform both together using array powerful method splice(elem, deleteCount, replaceNew)

fruits.splice(0, 0, 'watermelon'); // Adding
fruits.splice(fruits.length, 0, 'grapes', 'mango', 'kiwi'); // Multiple adding
fruits.splice(-1, 1); // delete kiwi last element
fruits.splice(2, 1, 'kiwi', 'orange'); // removing from certain index with specific deletion number 1 to 2 elements.

console.log(fruits); */

//* 21) Use of map function

/* let numbers = [1, 2, 3, 4, 5];

const doubleNumber = numbers.map((number) => number * 2);
console.log(doubleNumber);

const numberObjects = numbers.map((num) => ({ value: num, square: num ** 2 }));
console.log(numberObjects);
 */

//* 22) filter and find methods : Find return when a single matched value is found or true the condition and does not check further, but filter returns all the elements which satifies the condition.

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Filter
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

// Find
const firstEvenNumber = numbers.find((number) => number % 2 === 0);
console.log(firstEvenNumber);
 */

//* 23) Difference between some and every method

/* const people = [
  { name: "Kuldeep Verma", age: 21 },
  { name: "Kushagra Verma", age: 21 },
  { name: "Kelash Kumar", age: 25 },
];

// Some method 
const anyover25 = people.some(person => person.age > 21);
console.log(anyover25);

// Every method
const allover20 = people.every(person => person.age > 20);
console.log(allover20);
 */

//* 24) Select an element in DOM using JS

/* //? Using getElementById
const divById = document.getElementById('myDiv');
console.log(divById);

//? Using class name
const divByClassName = document.getElementsByClassName('myClass');
console.log(divByClassName);

//? Using tag name
const divByTagName = document.getElementsByTagName('div');
console.log(divByTagName);

//? Using queryselector
const pByQuerySelector = document.querySelector('p');
console.log(pByQuerySelector);

//? Using queryselectorall to get all paragraphs
const allParagrphs = divById.querySelectorAll('p');
console.log(allParagrphs); */

//* 25) Create and append an element in DOM
/* const newParagraph = document.createElement('p');

newParagraph.textContent = 'This is a new paragraph.';
newParagraph.id = 'newPara';
newParagraph.className = 'higlight';

const div = document.getElementById('myDiv');
// div.append(newParagraph);

div.insertAdjacentElement('beforebegin', newParagraph); */

//* 26) innerHTML and textContent

/* const div = document.querySelector('.myClass');

console.log(div.innerHTML);
console.log(div.textContent); */

//* 27) Remove an element using DOM

// const div = document.querySelector(".myClass");
// const firstParagraph = document.querySelector("p");

//? Method - 1) Using parent container to remove its child
// div.removeChild(firstParagraph);

//? Method - 2) Newer but does not support in older browsers
// firstParagraph.remove();

//* 28) Arrow function
/* 
const add = (a, b) => a + b;

let obj = {
  name: "Kuldeep",
  age: 21,
  sayHello: function () {
    console.log(`Hello, ${this.name} and you are ${this.age} years old`);
  },

  sayHelloArrow: () => {
    console.log(`Hello, ${this.name} and you are ${this.age} years old`);
  },
};

obj.sayHello();
obj.sayHelloArrow(); // arrow function does not bind their own this. refer to global window object. */

//* 29) Destructuring

//? Object destructuring
/* let person = {
  name: "Kuldeep",
  age: 21,
  city: "Kota",
  isMarried: false,
};

const { name, age, city, isMarried } = person;
console.log(name, age, city, isMarried);

//? Remaining destructuring properties

const { name: fullName, age: years } = person;
console.log(`Name : ${fullName}, Age : ${years}`);

//? Array destructuring
const fruits = ['apple', 'banana', 'mango', 'watermelon'];

const [first, second, third, fourth] = fruits;
console.log(first, second, third, fourth); */

//* 30) Template Literals

/* const myName = "Kuldeep Verma";
const age = 21;

//? Simple string interpolation (old way)
console.log("My name is " + myName + " and I am " + age + " years old now.");

//? New way using template literals
console.log(`My name is ${myName} and I'm ${age} years old now.`);

//? Multi-line string

const multiLine = `
  This is multi-
  line string 
  writing possible
  using template literals.
`;

console.log(multiLine);
 */

//* 31) Spread Operator

/* //? Spreading array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// const arr2 = [1, 2, 3]; //? It will add same element also after arr1 element
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr);

//? Spreading objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// const obj2 = {a : 1, b : 4}; // here if same key present then obj1 keys value will be replaced by obj2 key value.
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj);

//? Copy an array
const arr3 = [1, 2, 3];
const copyArr = [...arr3];
copyArr.push(4);
console.log(arr3, copyArr);

//? String
const string = 'Hello';
const stringArr = [...string];
console.log(stringArr); */

//* 32) Default Parameter
/* 
// Using default parameter
function greet(name = "Guest") {
  console.log(`Hello, Welcome ${name}`);
}

greet();
greet("Kuldeep");

// Using default parameter with expression
function multiply(a, b = a * 2) {
  console.log(`${a * b}`);
}

multiply(5);
multiply(5, 3); */

//* 33) Rest parameter

/* //? Normal function
function sumES6(...numbers) {
  return numbers.reduce((acc, number) => acc + number);
}

console.log(sumES6(1, 2, 3, 4, 5));

//? Rest parameters with other arguments
function multiply(multiplier, ...numbers) {
  return numbers.map((number) => multiplier * number);
}

console.log(multiply(2, 1, 2, 3, 4, 5));

//? Rest parameter with object

let obj = {
  name: "Kuldeep",
  age: 21,
  city: "Kota",
  isMarried: false,
};

const { name, age, ...rest } = obj;
console.log(name, age, rest); // here only name must be written

const [first, second, ...restNumbers] = [1, 2, 3, 4, 5];
console.log(first, second, restNumbers);

const logAll = (...args) => console.log(args);
logAll(1, 2, 3, 4, 5, 6, "Kuldeep Verma", { age: 21 });
 */

//* 34) Callback function and callback hell

//? Callback function

/* function operation(a, b, callback) {
  return callback(a, b);
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

console.log(operation(15, 10, add));
console.log(operation(15, 10, subtract)); */

//? Callback hell

/* function step(num, callback) {
  setTimeout(() => {
    console.log(`Data - ${num} fetched Successfully...`);
    if (callback) callback();
  }, 2000);
}

step(1, () => {
  step(2, () => {
    step(3, () => {
      step(4, () => {
        step(5, () => {
          step(6);
        });
      });
    });
  });
});
 */

//* 35) Promise

/* function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fetched successfully...");
      } else {
        reject("Error in data fetching ❌");
      }
    }, 2000);
  });
}

fetchData()
  .then((res) => console.log(res))
  .catch((error) => console.error(error));

*/

//* 36) Promise chaining

/* function step(num) {
  return Promise.resolve(`Step ${num} completed...`);
}


step(1)
  .then((res) => {
    console.log(res);
    return step(2);
  })
  .then((res) => {
    console.log(res);
    return step(3);
  })
  .then((res) => {
    console.log(res);
    return step(4);
  })
  .then((res) => {
    console.log(res);
    return step(5);
  })
  .then((res) => {
    console.log(res);
    return step(6);
  })
  .then((res) => {
    console.log(res);
    console.log("All steps are completed successfully....");
  })
  .catch((err) => console.error(err));
 */

//* 37) Promise.all method

/* const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve) => setTimeout(() => resolve(42), 2000));

let status = Promise.all([promise1, promise2])
.then((res) => console.log(res))
.catch((err) => console.error(err));
 */

//* 38) Finally method
/* 
function fetchData() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    setTimeout(() => {
      if (success) {
        resolve("Data fetched successfully...");
      } else {
        reject("Error : During data fetching....");
      }
    }, 2000);
  });
}

const getData = async () => {
  try {
    const response = await fetchData();
    console.log(response);
  } catch (error) {
    console.error(error);
  } finally {
    console.log(
      "Operations performs successfully \nfetching process completed..."
    );
  }
};

getData();
 */

//* 39) Async await

/* const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hi I am resolved");
    }, 2000);
  });
};

const getData = async () => {
  console.log('Fetching data...');
  const response = await fetchData();
  console.log(response);
  console.log('Data processing complete...');
}

getData(); */

//* 40) Default and Named Export  - Watch school4u video for it

//* 41) JS object to JSON string

// let obj = {name: 'Kuldeep Verma', age: 21};

// let jsonString = JSON.stringify(obj);
// console.log(jsonString);

//* 42) Parse json into object again

// let originalObj = JSON.parse(jsonString);
// console.log(originalObj);

//* 43) Localstorage data store and retreive

/* //? Set data
localStorage.setItem("username", "Kuldeep");
localStorage.setItem("password", "kuldeep123");

//? Retreive data
console.log(localStorage.getItem("username"));
console.log(localStorage.getItem("password"));

//? Storing object
let user = {
  name: "Kushagra Verma",
  age: 21,
  isMarried: false,
  city: "Kota",
};

localStorage.setItem('user', JSON.stringify(user));

//? Getting object data from localstorage
console.log(JSON.parse(localStorage.getItem('user'))); */

//* 44) LocalStorage vs Session Storage
// localStorage.setItem('user', 'Kuldeep');
// sessionStorage.setItem('session_user', 'Kushagra');

//* 45) Clear all data from localstorage
localStorage.setItem("password", "kuldeep123");
localStorage.setItem("email", "kuldeep@gmail.com");

//? Single item removal
// localStorage.removeItem('email')

//? All item removal
localStorage.clear();

//* 46) Difference between async/awit and promises - Async await make code behavior look like synchronous code, making it more readale and simplify the syntax of working with promises, while promises are complex to read and write.

//* 47) How do handle errors in async await - Using try catch