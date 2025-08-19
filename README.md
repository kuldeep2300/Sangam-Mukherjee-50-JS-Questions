Here’s a **single, self-contained `README.md`** with **working links**.
I added explicit HTML anchors (`<a id="..."></a>`) so the Table of Contents always jumps to the right section on GitHub, regardless of heading punctuation.

````markdown
# JavaScript Concepts & Examples 🚀

This repository contains a comprehensive collection of JavaScript concepts, explained with examples and best practices.  
It serves as a **reference guide** for learning, revising, and mastering JavaScript fundamentals to advanced topics.

---

## 📌 Table of Contents

- [1) Data Types in JS](#1-data-types-in-js)
- [2) Equal vs Strict Equality (`==` vs `===`)](#2-equal-and-strict-equality)
- [3) Null vs Undefined](#3-null-and-undefined)
- [4) Hoisting](#4-hoisting-in-js)
- [5) Var, Let, Const](#5-let-const-and-var)
- [6) Variable Scoping](#6-variable-scoping)
- [7) Temporal Dead Zone (TDZ)](#7-tdz-temporal-dead-zone)
- [8) Variable Shadowing](#8-variable-shadowing)
- [9) Closures](#9-closures)
- [10) Ways to Define Functions](#10-ways-to-define-a-function-in-js)
- [11) Higher Order Functions](#11-higher-order-function)
- [12) Function Hoisting](#12-function-hoisting)
- [13) Pure Functions](#13-pure-function)
- [14) IIFE (Immediately Invoked Function Expression)](#14-iife)
- [15) Ways to Create Objects](#15-ways-to-create-objects)
- [16) Add/Remove Object Properties](#16-add-or-remove-properties-from-object)
- [17) Check Object Property](#17-check-certain-property-exist-in-the-object-or-not)
- [18) This Keyword](#18-this-keyword)
- [19) Array Looping Methods](#19-ways-to-loop-through-an-array)
- [20) Array Modification](#20-add-or-remove-elements-from-an-array)
- [21) Array Method: map](#21-use-of-map-function)
- [22) Array Methods: filter vs find](#22-filter-vs-find)
- [23) Array Methods: some vs every](#23-some-vs-every)
- [24) Select Elements in the DOM](#24-select-an-element-in-dom-using-js)
- [25) Create & Append DOM Elements](#25-create-and-append-an-element-in-dom)
- [26) innerHTML vs textContent](#26-innerhtml-and-textcontent)
- [27) Remove DOM Elements](#27-remove-an-element-using-dom)
- [28) Arrow Functions](#28-arrow-function)
- [29) Destructuring](#29-destructuring)
- [30) Template Literals](#30-template-literals)
- [31) Spread Operator](#31-spread-operator)
- [32) Default Parameters](#32-default-parameter)
- [33) Rest Parameters](#33-rest-parameter)
- [34) Callback Functions & Callback Hell](#34-callback-function-and-callback-hell)
- [35) Promises](#35-promise)
- [36) Promise Chaining](#36-promise-chaining)
- [37) Promise.all](#37-promiseall-method)
- [38) finally Method](#38-finally-method)
- [39) async/await](#39-async-await)
- [40) Default & Named Exports](#40-default-and-named-exports)
- [41) Object ➜ JSON (stringify)](#41-js-object-to-json-string)
- [42) JSON ➜ Object (parse)](#42-parse-json-into-object-again)
- [43) LocalStorage: Store & Retrieve](#43-localstorage-data-store-and-retrieve)
- [44) LocalStorage vs SessionStorage](#44-localstorage-vs-sessionstorage)
- [45) Remove One Item from LocalStorage](#45-remove-a-single-item-from-localstorage)
- [46) Clear All LocalStorage](#46-clear-all-data-from-localstorage)
- [47) async/await vs Promises](#47-asyncawait-vs-promises)
- [48) Error Handling with async/await](#48-how-to-handle-errors-in-asyncawait)
- [49) Bonus: Useful DOM Selectors Cheatsheet](#49-bonus-useful-dom-selectors-cheatsheet)
- [50) Conclusion](#50-conclusion)

---

<a id="1-data-types-in-js"></a>
## 1) Data Types in JS

### Primitive Data Types
```js
let symbol = Symbol("unique");
let string = "Kuldeep Verma";
let bigInt = BigInt(1232323232323232);
let boolean = true;
let number = 34;
let nullVar = null;
let undefinedVar = undefined;
````

### Non-Primitive Data Types

```js
let object = { name: "Kuldeep", age: 21, isMarried: false };
let array = ["Kuldeep", "Bhawana", 1, 3, 4, true, false];
let dateVar = new Date();
```

---

<a id="2-equal-and-strict-equality"></a>

## 2) Equal and Strict Equality (`==` & `===`)

```js
console.log(5 == "5");   // true (type coercion)
console.log(5 === "5");  // false (type + value)
console.log(0 == false); // true
console.log(0 === false);// false
```

---

<a id="3-null-and-undefined"></a>

## 3) Null and Undefined

```js
let nullVar = null;     // explicitly empty
let undefinedVar;       // declared, not assigned
console.log(typeof nullVar); // "object" (historical quirk)
```

---

<a id="4-hoisting-in-js"></a>

## 4) Hoisting in JS

* **var**: hoisted (initialized as `undefined`)
* **let/const**: hoisted but in **TDZ** until initialization (access ➜ error)
* **Function declarations**: hoisted (callable before definition)
* **Function expressions/arrow functions**: not hoisted as callable bindings

---

<a id="5-let-const-and-var"></a>

## 5) Let, Const and Var

* **var** → function/global scope, hoisted, redeclarable
* **let** → block scope, updatable, not redeclarable
* **const** → block scope, neither redeclarable nor reassignable (object props can still change)

---

<a id="6-variable-scoping"></a>

## 6) Variable Scoping

* **Global Scope**: outside functions/blocks
* **Block Scope**: inside `{ ... }` (let/const)
* **Function Scope**: inside `function` body (var)
* **Lexical Scope**: inner functions access outer bindings

---

<a id="7-tdz-temporal-dead-zone"></a>

## 7) TDZ : Temporal Dead Zone

```js
console.log(x); // ❌ ReferenceError
let x = 5;
```

---

<a id="8-variable-shadowing"></a>

## 8) Variable Shadowing

```js
let x = 10;
function example() {
  let x = 20;
  if (true) {
    let x = 30;
    console.log(x); // 30
  }
  console.log(x);   // 20
}
console.log(x);     // 10
```

---

<a id="9-closures"></a>

## 9) Closures

```js
function createGreeter(greeting) {
  let count = 0;
  return function (name) {
    count++;
    console.log(`${greeting}, ${name}! Used ${count} times.`);
  };
}
const hi = createGreeter("Hi");
hi("Kuldeep"); // Used 1
hi("Kushagra"); // Used 2
```

---

<a id="10-ways-to-define-a-function-in-js"></a>

## 10) Ways to Define a Function in JS

1. **Function Declaration** (hoisted)
2. **Function Expression**
3. **Arrow Function**
4. **Function Constructor** (`new Function(...)`)

---

<a id="11-higher-order-function"></a>

## 11) Higher Order Function

```js
function operate(x, y, operation) { return operation(x, y); }
const add = (a, b) => a + b;
console.log(operate(50, 30, add)); // 80
```

---

<a id="12-function-hoisting"></a>

## 12) Function Hoisting

Only **declarations** are hoisted (not expressions/arrow functions).

---

<a id="13-pure-function"></a>

## 13) Pure Function

* Same input → same output
* No side effects

```js
function add(a, b) { return a + b; }
```

---

<a id="14-iife"></a>

## 14) IIFE

```js
(function () {
  const privateVar = "I'm private";
  console.log("IIFE with no arguments", privateVar);
})();
((name) => console.log(`Arrow IIFE says hi to ${name}`))("Kushagra");
```

---

<a id="15-ways-to-create-objects"></a>

## 15) Ways to Create Objects

1. **Object literal**
2. **Constructor function**
3. **`Object.create(proto)`**
4. **ES6 Class**

---

<a id="16-add-or-remove-properties-from-object"></a>

## 16) Add or Remove Properties from Object

```js
let obj = { name: "Kuldeep" };
obj.age = 21;
obj["city"] = "Kota";
delete obj.city;
```

---

<a id="17-check-certain-property-exist-in-the-object-or-not"></a>

## 17) Check Certain Property Exist

```js
let obj = { name: "Kuldeep", age: 21 };
console.log("name" in obj);             // true
console.log(obj.hasOwnProperty("age")); // true
console.log(obj?.job);                  // undefined (optional chaining)
```

---

<a id="18-this-keyword"></a>

## 18) This Keyword

* **Method**: `this` → the object
* **Arrow function**: no own `this` (lexically inherits)
* **Constructor**: `this` → new instance

```js
const person = {
  name: "Kuldeep",
  greet() { console.log(`Hello, ${this.name}`); }
};
person.greet(); // Hello, Kuldeep

const arrow = () => console.log(this === globalThis); // in browsers: window
arrow();
```

---

<a id="19-ways-to-loop-through-an-array"></a>

## 19) Ways to Loop Through an Array

* `for`, `while`, `do...while`
* `forEach`, `map`
* `for...of` (values)
* `for...in` (indexes for arrays; keys for objects—use with care)

---

<a id="20-add-or-remove-elements-from-an-array"></a>

## 20) Add or Remove Elements from an Array

```js
let fruits = ["apple", "banana", "mango"];
fruits.push("grapes");   // add end
fruits.unshift("melon"); // add start
fruits.pop();            // remove end
fruits.shift();          // remove start
fruits.splice(1, 1, "kiwi", "orange"); // replace at index 1
```

---

<a id="21-use-of-map-function"></a>

## 21) Array Method: map

```js
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
```

---

<a id="22-filter-vs-find"></a>

## 22) Array Methods: filter vs find

```js
const nums = [1,2,3,4,5,6];
console.log(nums.filter(n => n % 2 === 0)); // [2,4,6]
console.log(nums.find(n => n % 2 === 0));   // 2
```

---

<a id="23-some-vs-every"></a>

## 23) Array Methods: some vs every

```js
const people = [{age:21},{age:22},{age:25}];
console.log(people.some(p => p.age > 22));  // true
console.log(people.every(p => p.age > 18)); // true
```

---

<a id="24-select-an-element-in-dom-using-js"></a>

## 24) Select Elements in the DOM

* `getElementById`
* `getElementsByClassName`
* `getElementsByTagName`
* `querySelector`
* `querySelectorAll`

---

<a id="25-create-and-append-an-element-in-dom"></a>

## 25) Create & Append DOM Elements

```js
const p = document.createElement('p');
p.textContent = 'This is a new paragraph.';
p.id = 'newPara';
p.className = 'highlight';
document.body.appendChild(p);
```

---

<a id="26-innerhtml-and-textcontent"></a>

## 26) innerHTML and textContent

* `innerHTML` parses HTML
* `textContent` is plain text

---

<a id="27-remove-an-element-using-dom"></a>

## 27) Remove DOM Elements

```js
// Modern
element.remove();

// Older
parent.removeChild(child);
```

---

<a id="28-arrow-function"></a>

## 28) Arrow Functions

* Concise syntax
* Lexical `this` (no own `this` binding)

```js
const add = (a, b) => a + b;
```

---

<a id="29-destructuring"></a>

## 29) Destructuring

```js
const person = { name: "Kuldeep", age: 21, city: "Kota" };
const { name, age } = person;

const fruits = ["apple", "banana", "mango"];
const [first, second] = fruits;
```

---

<a id="30-template-literals"></a>

## 30) Template Literals

```js
const name = "Kuldeep";
const age = 21;
console.log(`My name is ${name} and I'm ${age} years old.`);
```

---

<a id="31-spread-operator"></a>

## 31) Spread Operator

```js
const a1 = [1,2,3], a2 = [4,5];
const merged = [...a1, ...a2];

const o1 = {a:1}, o2 = {b:2};
const combined = { ...o1, ...o2 };

const copy = [...a1]; // shallow clone
```

---

<a id="32-default-parameter"></a>

## 32) Default Parameters

```js
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
```

---

<a id="33-rest-parameter"></a>

## 33) Rest Parameters

```js
function sum(...nums) { return nums.reduce((a,n) => a + n, 0); }
console.log(sum(1,2,3)); // 6

const [x, y, ...rest] = [1,2,3,4]; // rest = [3,4]
```

---

<a id="34-callback-function-and-callback-hell"></a>

## 34) Callback Functions & Callback Hell

```js
function step(n, cb) {
  setTimeout(() => { console.log(`Step ${n}`); cb && cb(); }, 500);
}
step(1, () => step(2, () => step(3)));
```

---

<a id="35-promise"></a>

## 35) Promises

```js
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched"), 500);
  });
}
fetchData().then(console.log).catch(console.error);
```

---

<a id="36-promise-chaining"></a>

## 36) Promise Chaining

```js
Promise.resolve("Step 1")
  .then(r => { console.log(r); return "Step 2"; })
  .then(r => console.log(r))
  .catch(console.error);
```

---

<a id="37-promiseall-method"></a>

## 37) Promise.all

```js
Promise.all([Promise.resolve(3), Promise.resolve(42)])
  .then(values => console.log(values)); // [3, 42]
```

---

<a id="38-finally-method"></a>

## 38) finally Method

```js
fetchData()
  .then(console.log)
  .catch(console.error)
  .finally(() => console.log("Done"));
```

---

<a id="39-async-await"></a>

## 39) async/await

```js
const fetchData = () => new Promise(res => setTimeout(()=>res("OK"), 500));
async function run() {
  console.log("Fetching...");
  const res = await fetchData();
  console.log(res);
}
run();
```

---

<a id="40-default-and-named-exports"></a>

## 40) Default & Named Exports

```js
// utils.js
export const add = (a,b) => a + b;
const PI = 3.14159;
export default PI;

// main.js
import PI, { add } from "./utils.js";
```

---

<a id="41-js-object-to-json-string"></a>

## 41) Object ➜ JSON (stringify)

```js
const obj = { name: "Kuldeep Verma", age: 21 };
const json = JSON.stringify(obj); // '{"name":"Kuldeep Verma","age":21}'
```

---

<a id="42-parse-json-into-object-again"></a>

## 42) JSON ➜ Object (parse)

```js
const original = JSON.parse(json);
```

---

<a id="43-localstorage-data-store-and-retrieve"></a>

## 43) LocalStorage: Store & Retrieve

```js
localStorage.setItem("username", "Kuldeep");
console.log(localStorage.getItem("username")); // "Kuldeep"

// Store objects safely
const user = { name: "Kushagra", age: 21 };
localStorage.setItem("user", JSON.stringify(user));
console.log(JSON.parse(localStorage.getItem("user"))); // object back
```

---

<a id="44-localstorage-vs-sessionstorage"></a>

## 44) LocalStorage vs SessionStorage

* **localStorage**: persists until cleared (per origin)
* **sessionStorage**: cleared when tab/session ends

```js
localStorage.setItem("key", "value");
sessionStorage.setItem("session_key", "value");
```

---

<a id="45-remove-a-single-item-from-localstorage"></a>

## 45) Remove One Item from LocalStorage

```js
localStorage.removeItem("username");
```

---

<a id="46-clear-all-data-from-localstorage"></a>

## 46) Clear All LocalStorage

```js
localStorage.clear();
```

---

<a id="47-asyncawait-vs-promises"></a>

## 47) async/await vs Promises

* **Promises**: chaining with `.then/.catch`
* **async/await**: cleaner, synchronous-looking flow, still Promise-based underneath

---

<a id="48-how-to-handle-errors-in-asyncawait"></a>

## 48) Error Handling with async/await

```js
async function getData() {
  try {
    const res = await fetchData();
    console.log(res);
  } catch (err) {
    console.error(err);
  } finally {
    console.log("Operation finished");
  }
}
```

---

<a id="49-bonus-useful-dom-selectors-cheatsheet"></a>

## 49) Bonus: Useful DOM Selectors Cheatsheet

```js
document.getElementById("id");
document.querySelector(".class");           // first match
document.querySelectorAll("div[data-x]");  // NodeList of matches
```

---

<a id="50-conclusion"></a>

## 50) Conclusion

This README provides a **complete cheat sheet** of JavaScript concepts with bite-sized examples.
Clone, practice, and master JavaScript fundamentals ✨.

---

```

> Tip: The anchors in the ToC are **explicitly defined** (e.g., `#18-this-keyword`), so links will work even if GitHub’s automatic slug rules change or your headings include punctuation.
```



<!-- ````markdown
# JavaScript Concepts & Examples 🚀

This repository contains a comprehensive collection of JavaScript concepts, explained with examples and best practices.  
It serves as a **reference guide** for learning, revising, and mastering JavaScript fundamentals to advanced topics.

---

## 📌 Table of Contents

1. [Data Types in JavaScript](#1-data-types-in-js)      
2. [Equal vs Strict Equality (`==` vs `===`)](#2-equal-and-strict-equality----)  
3. [Null vs Undefined](#3-null-and-undefined)  
4. [Hoisting](#4-hoisting-in-js)  
5. [Var, Let, Const](#5-let-const-and-var)  
6. [Variable Scoping](#6-variable-scoping)  
7. [Temporal Dead Zone (TDZ)](#7-tdz--temporal-dead-zone)  
8. [Variable Shadowing](#8-variable-shadowing)  
9. [Closures](#9-closures)  
10. [Ways to Define Functions](#10-ways-to-define-a-function-in-js)  
11. [Higher Order Functions](#11-higher-order-function)  
12. [Function Hoisting](#12-function-hoisting)  
13. [Pure Functions](#13-pure-function)  
14. [IIFE (Immediately Invoked Function Expression)](#14-iife)  
15. [Ways to Create Objects](#15-ways-to-create-objects)  
16. [Add/Remove Object Properties](#16-add-or-remove-properties-from-object)  
17. [Check Object Property](#17-check-certain-property-exist-in-the-object-or-not)  
18. [This Keyword](#20-this-keyword)  
19. [Array Looping Methods](#21-ways-to-loop-through-an-array)  
20. [Array Modification](#22-add-or-remove-elements-from-an-array)  
21. [Array Methods - map, filter, find, some, every](#23-use-of-map-function)  
22. [DOM Manipulation](#26-select-an-element-in-dom-using-js)  
23. [Arrow Functions](#30-arrow-function)  
24. [Destructuring](#31-destructuring)  
25. [Template Literals](#32-template-literals)  
26. [Spread Operator](#33-spread-operator)  
27. [Default & Rest Parameters](#34-default-parameter)  
28. [Callbacks & Callback Hell](#36-callback-function-and-callback-hell)  
29. [Promises](#37-promise)  
30. [Promise Chaining](#38-promise-chaining)  
31. [Promise.all](#39-promiseall-method)  
32. [Finally Method](#40-finally-method)  
33. [Async/Await](#41-async-await)  
34. [JSON Handling](#43-js-object-to-json-string)  
35. [LocalStorage & SessionStorage](#45-localstorage-data-store-and-retreive)  
36. [Error Handling in Async/Await](#50-how-do-handle-errors-in-async-await)

---

## 1) Data Types in JS

### Primitive Data Types
```js
let symbol = Symbol("unique");
let string = "Kuldeep Verma";
let bigInt = BigInt(1232323232323232);
let boolean = true;
let number = 34;
let nullVar = null;
let undefinedVar = undefined;
````

### Non-Primitive Data Types

```js
let object = { name: "Kuldeep", age: 21, isMarried: false };
let array = ["Kuldeep", "Bhawana", 1, 3, 4, true];
let dateVar = new Date();
```

---

## 2) Equal and Strict Equality (`==` & `===`)

```js
console.log(5 == "5");   // true (type coercion)
console.log(5 === "5");  // false (strict)
console.log(0 == false); // true
console.log(0 === false);// false
```

---

## 3) Null and Undefined

```js
let nullVar = null;         // explicitly empty
let undefinedVar;           // not assigned yet
console.log(typeof nullVar); // "object" (JS bug)
```

---

## 4) Hoisting in JS

* **var** is hoisted (initialized as `undefined`)
* **let/const** → Temporal Dead Zone (error if accessed before declaration)
* **Function Declarations** are hoisted
* **Arrow Functions** are **not** hoisted

---

## 5) Let, Const and Var

* **var** → function/global scope, hoisted, redeclarable
* **let** → block scope, not hoisted, updatable, not redeclarable
* **const** → block scope, not hoisted, neither redeclarable nor updatable

---

## 6) Variable Scoping

* **Global Scope**: Declared outside any block/function
* **Local Scope**: Declared inside function/block
* **Lexical Scope**: Inner function can access outer variables

---

## 7) TDZ : Temporal Dead Zone

```js
console.log(x); // ❌ Error
let x = 5;
```

---

## 8) Variable Shadowing

Inner scope overrides outer scope variable.

---

## 9) Closures

Function “remembers” variables from its outer scope even after execution.

---

## 10) Ways to Define a Function in JS

1. Function Declaration
2. Function Expression
3. Arrow Function
4. Function Constructor

---

## 11) Higher Order Function

* Takes another function as argument
* Returns another function

---

## 12) Function Hoisting

Only **declarations** are hoisted, not expressions/arrow functions.

---

## 13) Pure Function

* Always returns same output for same input
* No side effects

---

## 14) IIFE

```js
(function() { console.log("IIFE Example"); })();
```

---

## 15) Ways to Create Objects

1. Object literal
2. Constructor function
3. `Object.create()`
4. ES6 Class

---

## 16) Add or Remove Properties from Object

```js
let obj = { name: "Kuldeep" };
obj.age = 21;
delete obj.age;
```

---

## 17) Check Property Exists

* `in` operator
* `hasOwnProperty`
* `obj?.prop` (optional chaining)

---

## 20) This Keyword

* Depends on function call context
* Arrow functions don’t bind `this`

---

## 21) Ways to Loop Through an Array

* `for` / `while` / `do-while`
* `forEach`, `map`, `for...of`, `for...in`

---

## 22) Add or Remove Elements from Array

* `push`, `pop`, `shift`, `unshift`, `splice`

---

## 23) Use of map()

* Transform array into new array

---

## 24) filter vs find

* `filter` → returns all matches
* `find` → returns first match

---

## 25) some vs every

* `some` → checks if any element passes condition
* `every` → checks if all elements pass

---

## 26) Select an Element in DOM

* `getElementById`
* `getElementsByClassName`
* `querySelector`
* `querySelectorAll`

---

## 27) Create and Append DOM Element

```js
let p = document.createElement('p');
p.textContent = "Hello World";
document.body.appendChild(p);
```

---

## 28) innerHTML vs textContent

* `innerHTML` → parses HTML
* `textContent` → plain text

---

## 29) Remove Element in DOM

* `element.remove()`
* `parent.removeChild(child)`

---

## 30) Arrow Functions

Do not bind their own `this`.

---

## 31) Destructuring

```js
const { name, age } = { name: "Kuldeep", age: 21 };
const [a, b] = [1, 2];
```

---

## 32) Template Literals

* String interpolation
* Multiline strings

---

## 33) Spread Operator

* Spread arrays/objects
* Clone arrays

---

## 34) Default Parameter

```js
function greet(name = "Guest") { ... }
```

---

## 35) Rest Parameter

```js
function sum(...nums) { return nums.reduce((a,b)=>a+b); }
```

---

## 36) Callback Function & Callback Hell

* Callback: pass function as argument
* Callback Hell: deeply nested callbacks

---

## 37) Promise

```js
new Promise((resolve, reject) => { ... });
```

---

## 38) Promise Chaining

`.then().then().catch()`

---

## 39) Promise.all

Waits for all promises to resolve.

---

## 40) Finally Method

Runs regardless of success/failure.

---

## 41) Async/Await

Syntactic sugar for promises.

---

## 42) Default & Named Exports

(ES Modules feature)

---

## 43) JS Object to JSON String

`JSON.stringify(obj)`

---

## 44) JSON to Object

`JSON.parse(str)`

---

## 45) LocalStorage & SessionStorage

* `localStorage` → persists until cleared
* `sessionStorage` → clears after session

---

## 48) Clear LocalStorage

```js
localStorage.clear();
```

---

## 49) Async/Await vs Promises

* Async/Await → cleaner, looks synchronous
* Promises → chaining can get messy

---

## 50) Error Handling in Async/Await

```js
try {
  await someAsyncFn();
} catch(err) {
  console.error(err);
}
```

---

## 🎯 Conclusion

This repo provides a **complete cheat sheet** of JavaScript concepts with working examples.
Clone, practice, and master JavaScript fundamentals ✨.

---

```

Would you like me to also **add a section with “Getting Started” instructions** (how to run these code snippets in browser/Node.js) so it looks like a proper open-source repo readme?
``` -->
