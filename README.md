````markdown
# JavaScript Concepts & Examples 🚀

This repository contains a comprehensive collection of JavaScript concepts, explained with examples and best practices.  
It serves as a **reference guide** for learning, revising, and mastering JavaScript fundamentals to advanced topics.

---

## 📌 Table of Contents

 1) Data Types in JS
 2) Equal and Strict Equality (`==` & `===`)
 3) Null and Undefined
 4) Hoisting in JS
 5) Let, Const and Var
 6) Variable Scoping
 7) TDZ : Temporal Dead Zone
 8) Variable Shadowing
 9) Closures
10) Ways to Define a Function in JS
11) Higher Order Function
12) Function Hoisting
13) Pure Function
14) IIFE
15) Ways to Create Objects
16) Add or Remove Properties from Object
17) Check Property Exists
18) This Keyword
19) Ways to Loop Through an Array
20) Add or Remove Elements from Array
21) Use of map()
22) filter vs find
23) some vs every
24) Select an Element in DOM
25) Create and Append DOM Element
26) innerHTML vs textContent
27) Remove Element in DOM
28) Arrow Functions
29) Destructuring
30) Template Literals
31) Spread Operator
32) Default Parameter
33) Rest Parameter
34) Callback Function & Callback Hell
35) Promise
36) Promise Chaining
37) Promise.all
38) Finally Method
39) Async/Await
40) Default & Named Exports
41) JS Object to JSON String
42) JSON to Object
43) LocalStorage & SessionStorage
44) Clear LocalStorage
45) Async/Await vs Promises
46) Error Handling in Async/Await

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

## 18) This Keyword

* Depends on function call context
* Arrow functions don’t bind `this`

---

## 19) Ways to Loop Through an Array

* `for` / `while` / `do-while`
* `forEach`, `map`, `for...of`, `for...in`

---

## 20) Add or Remove Elements from Array

* `push`, `pop`, `shift`, `unshift`, `splice`

---

## 21) Use of map()

* Transform array into new array

---

## 22) filter vs find

* `filter` → returns all matches
* `find` → returns first match

---

## 23) some vs every

* `some` → checks if any element passes condition
* `every` → checks if all elements pass

---

## 24) Select an Element in DOM

* `getElementById`
* `getElementsByClassName`
* `querySelector`
* `querySelectorAll`

---

## 25) Create and Append DOM Element

```js
let p = document.createElement('p');
p.textContent = "Hello World";
document.body.appendChild(p);
```

---

## 26) innerHTML vs textContent

* `innerHTML` → parses HTML
* `textContent` → plain text

---

## 27) Remove Element in DOM

* `element.remove()`
* `parent.removeChild(child)`

---

## 28) Arrow Functions

Do not bind their own `this`.

---

## 29) Destructuring

```js
const { name, age } = { name: "Kuldeep", age: 21 };
const [a, b] = [1, 2];
```

---

## 30) Template Literals

* String interpolation
* Multiline strings

---

## 31) Spread Operator

* Spread arrays/objects
* Clone arrays

---

## 32) Default Parameter

```js
function greet(name = "Guest") { ... }
```

---

## 33) Rest Parameter

```js
function sum(...nums) { return nums.reduce((a,b)=>a+b); }
```

---

## 34) Callback Function & Callback Hell

* Callback: pass function as argument
* Callback Hell: deeply nested callbacks

---

## 35) Promise

```js
new Promise((resolve, reject) => { ... });
```

---

## 36) Promise Chaining

`.then().then().catch()`

---

## 37) Promise.all

Waits for all promises to resolve.

---

## 38) Finally Method

Runs regardless of success/failure.

---

## 39) Async/Await

Syntactic sugar for promises.

---

## 40) Default & Named Exports

(ES Modules feature)

---

## 41) JS Object to JSON String

`JSON.stringify(obj)`

---

## 42) JSON to Object

`JSON.parse(str)`

---

## 43) LocalStorage & SessionStorage

* `localStorage` → persists until cleared
* `sessionStorage` → clears after session

---

## 44) Clear LocalStorage

```js
localStorage.clear();
```

---

## 45) Async/Await vs Promises

* Async/Await → cleaner, looks synchronous
* Promises → chaining can get messy

---

## 46) Error Handling in Async/Await

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
```
