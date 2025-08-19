````markdown
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
```
