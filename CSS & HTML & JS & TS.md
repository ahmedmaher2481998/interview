## CSS & HTML

### 1. **What is the box model in CSS?**

**Answer:** The CSS box model represents the structure of an HTML element as it appears on the page. It consists of:

- **Content**: The text or image inside the element.
- **Padding**: The space between content and the border.
- **Border**: Surrounds the padding (optional).
- **Margin**: Space outside the border.

**Example:**

css

Copy code

`div {   width: 100px;   padding: 10px;   border: 5px solid black;   margin: 20px; }`

The total width of the element would be 150px (content + padding + border + margin).

### 2. **Explain the difference between `inline`, `block`, and `inline-block` elements in CSS.**

**Answer:**

- **Inline**: Takes up only as much width as its content and does not force a line break.
- **Block**: Occupies the full width available, starting on a new line.
- **Inline-block**: Like `inline`, but respects width and height settings.

**Example:**

html

Copy code

`<span style="display: inline;">Inline</span> <div style="display: block;">Block</div> <span style="display: inline-block; width: 100px;">Inline-Block</span>`

### 3. **What is the difference between `absolute`, `relative`, `fixed`, and `sticky` positioning in CSS?**

**Answer:**

- **Relative**: Positions an element relative to its normal position.
- **Absolute**: Positions an element relative to its nearest positioned ancestor.
- **Fixed**: Positions an element relative to the viewport, even when scrolling.
- **Sticky**: Toggles between `relative` and `fixed` depending on the scroll position.

**Example:**

css

Copy code

`div.relative { position: relative; top: 20px; } div.absolute { position: absolute; top: 20px; } div.fixed { position: fixed; top: 0; } div.sticky { position: sticky; top: 10px; }`

### 4. **How do `flexbox` and `grid` differ in CSS layout?**

**Answer:**

- **Flexbox**: One-dimensional layout (either row or column). Ideal for distributing space along a single axis.
- **Grid**: Two-dimensional layout. Best for laying out content in rows and columns simultaneously.

**Example (Flexbox):**

css

Copy code

`.container {   display: flex;   justify-content: space-between; }`

**Example (Grid):**

css

Copy code

`.container {   display: grid;   grid-template-columns: 1fr 1fr 1fr; }`

### 5. **What is specificity in CSS? How does it work?**

**Answer:** Specificity determines which CSS rule is applied by the browser when multiple rules match the same element. It is calculated based on the selectors used:

- Inline styles: Highest specificity.
- ID selectors: Higher specificity than classes.
- Class selectors, pseudo-classes, and attribute selectors: Medium specificity.
- Element selectors: Lowest specificity.

**Example:**

css

Copy code

`#id { color: blue; }       /* High specificity */ .class { color: red; }      /* Medium specificity */ p { color: green; }         /* Low specificity */`

### 6. **What is the difference between `rem` and `em` units in CSS?**

**Answer:**

- **`em`**: Relative to the font-size of the parent element.
- **`rem`**: Relative to the font-size of the root element (usually `<html>`).

**Example:**

css

Copy code

`html { font-size: 16px; } p { font-size: 2rem; }   /* 32px */ span { font-size: 2em; } /* 2 times the parent's font-size */`

### 7. **What are media queries in CSS, and how do they work?**

**Answer:** Media queries allow you to apply CSS rules based on the properties of the device, such as its width, height, or resolution. They enable responsive design by adjusting layouts for different screen sizes.

**Example:**

css

Copy code

`@media (max-width: 600px) {   body {     background-color: lightblue;   } }`

### 8. **What is the difference between `visibility: hidden;` and `display: none;`?**

**Answer:**

- **`display: none;`**: Removes the element from the layout, and it doesn’t occupy any space.
- **`visibility: hidden;`**: Hides the element, but it still occupies space in the layout.

**Example:**

css

Copy code

`.hidden { visibility: hidden; } .none { display: none; }`

### 9. **What are pseudo-classes and pseudo-elements in CSS?**

**Answer:**

- **Pseudo-classes**: Define a special state of an element (e.g., `:hover`, `:focus`).
- **Pseudo-elements**: Style specific parts of an element (e.g., `::before`, `::after`).

**Example:**

css

Copy code

`a:hover { color: red; }              /* Pseudo-class */ p::before { content: "Hello "; }     /* Pseudo-element */`

### 10. **How can you center a div in CSS?**

**Answer:** You can center a `div` both horizontally and vertically using Flexbox or Grid.

**Example (Flexbox):**

css

Copy code

`.container {   display: flex;   justify-content: center;   align-items: center;   height: 100vh; }`

**Example (Grid):**

css

Copy code

`.container {   display: grid;   place-items: center;   height: 100vh; }`

## Javascript ES6

### 1. **ES6+ Features**

- **Q: What is an arrow function, and how does it handle `this` differently than a regular function?**
  
  **A:** Arrow functions don’t have their own `this`; they inherit `this` from their surrounding scope (lexical `this`).
  
  javascript
  
  Copy code
  
  ``function RegularFunction() {   this.name = "Ahmed";   setTimeout(function () {     console.log(this.name); // undefined, as `this` refers to the global object   }, 1000); }  function ArrowFunction() {   this.name = "Ahmed";   setTimeout(() => {     console.log(this.name); // "Ahmed", arrow functions inherit `this`   }, 1000); }``

- **Q: How do you use destructuring assignments in JavaScript?**
  
  **A:** Destructuring allows extracting values from objects or arrays.
  
  javascript
  
  Copy code
  
  `const person = { name: "Ahmed", age: 25 }; const { name, age } = person; console.log(name, age); // "Ahmed", 25`

- **Q: Can you show an example of using both the spread and rest operators?**
  
  **A:** Spread is used to expand arrays or objects, while rest gathers arguments into an array.
  
  javascript
  
  Copy code
  
  `const arr1 = [1, 2, 3]; const arr2 = [...arr1, 4, 5]; // Spread console.log(arr2); // [1, 2, 3, 4, 5]  function sum(...numbers) { // Rest   return numbers.reduce((acc, n) => acc + n, 0); } console.log(sum(1, 2, 3)); // 6`

- **Q: Show an example using template literals.**
  
  **A:** Template literals allow for multi-line strings and interpolation of variables.
  
  javascript
  
  Copy code
  
  ``const name = "Ahmed"; const greeting = `Hello, ${name}!`; console.log(greeting); // "Hello, Ahmed!"``

- **Q: How can you use default parameters in a function?**
  
  **A:** Default parameters allow functions to have default values when arguments are not provided.
  
  javascript
  
  Copy code
  
  ``function greet(name = "Guest") {   return `Hello, ${name}!`; } console.log(greet()); // "Hello, Guest!"``

- **Q: What are enhanced object literals?**
  
  **A:** Enhanced object literals allow for shorthand property names and methods in objects.
  
  javascript
  
  Copy code
  
  `const age = 25; const person = {   name: "Ahmed",   age,   greet() { return "Hello!"; } }; console.log(person.greet()); // "Hello!"`

- **Q: How do you use ES6 modules with `import` and `export`?**
  
  **A:** Modules allow for better organization of code by using `import` and `export`.
  
  **export.js**
  
  javascript
  
  Copy code
  
  `export const name = "Ahmed";`
  
  **import.js**
  
  javascript
  
  Copy code
  
  `import { name } from './export.js'; console.log(name); // "Ahmed"`

- **Q: What is an iterator and a generator in ES6?**
  
  **A:** Iterators are objects that allow iteration over a collection. Generators use `function*` and `yield`.
  
  javascript
  
  Copy code
  
  `function* generator() {   yield 1;   yield 2;   yield 3; } const gen = generator(); console.log(gen.next().value); // 1 console.log(gen.next().value); // 2`

- **Q: What is the `Symbol` type in JavaScript?**
  
  **A:** `Symbol` is a primitive, unique value, useful for object keys.
  
  javascript
  
  Copy code
  
  `const uniqueId = Symbol('id'); const user = { [uniqueId]: 123 }; console.log(user[uniqueId]); // 123`

### 2. **Asynchronous JavaScript**

- **Q: How do Promises work in JavaScript, and what is Promise chaining?**
  
  **A:** Promises handle asynchronous operations. Promise chaining allows attaching multiple `.then()` handlers.
  
  javascript
  
  Copy code
  
  `fetch('https://api.example.com')   .then(response => response.json())   .then(data => console.log(data))   .catch(error => console.error(error));`

- **Q: Explain async/await and how it's different from Promises.**
  
  **A:** `async/await` provides cleaner syntax for handling Promises.
  
  javascript
  
  Copy code
  
  `async function fetchData() {   try {     const response = await fetch('https://api.example.com');     const data = await response.json();     console.log(data);   } catch (error) {     console.error(error);   } } fetchData();`

- **Q: What is the event loop in JavaScript?**
  
  **A:** The event loop handles asynchronous operations by putting them in the call stack and executing when the stack is empty.
  
  javascript
  
  Copy code
  
  `console.log("Start"); setTimeout(() => console.log("Timeout"), 0); console.log("End");  // Output:  // Start // End // Timeout`

- **Q: What is the difference between microtasks and macrotasks?**
  
  **A:** Microtasks (like `Promise.then`) have higher priority than macrotasks (like `setTimeout`).
  
  javascript
  
  Copy code
  
  `Promise.resolve().then(() => console.log("Microtask")); setTimeout(() => console.log("Macrotask"), 0);  // Output:  // Microtask // Macrotask`

### 3. **Closures and Scopes**

- **Q: What is a closure in JavaScript?**
  
  **A:** A closure is a function that retains access to its lexical scope, even when executed outside of its scope.
  
  javascript
  
  Copy code
  
  `function outer() {   let count = 0;   return function inner() {     count++;     console.log(count);   }; } const counter = outer(); counter(); // 1 counter(); // 2`

- **Q: What is an IIFE (Immediately Invoked Function Expression)?**
  
  **A:** IIFE is a function that runs as soon as it’s defined.
  
  javascript
  
  Copy code
  
  `(function() {   console.log("This is an IIFE"); })();`

### 4. **Prototypes and Inheritance**

- **Q: How does prototypal inheritance work in JavaScript?**
  
  **A:** Objects inherit properties and methods from their prototype.
  
  javascript
  
  Copy code
  
  ``function Person(name) {   this.name = name; } Person.prototype.greet = function() {   console.log(`Hello, my name is ${this.name}`); }; const john = new Person("John"); john.greet(); // "Hello, my name is John"``

- **Q: How do classes and inheritance work in ES6?**
  
  **A:** Classes in ES6 are syntactical sugar over prototypes, allowing easier inheritance.
  
  javascript
  
  Copy code
  
  ``class Animal {   constructor(name) {     this.name = name;   }   speak() {     console.log(`${this.name} makes a noise`);   } }  class Dog extends Animal {   speak() {     console.log(`${this.name} barks`);   } }  const dog = new Dog('Rex'); dog.speak(); // "Rex barks"``

- **Q: What’s the difference between `Object.create()` and `new`?**
  
  **A:** `Object.create()` allows creating an object with a specific prototype, while `new` is used to instantiate a class.
  
  javascript
  
  Copy code
  
  `const personPrototype = {   greet() { console.log("Hello"); } }; const person = Object.create(personPrototype); person.greet(); // "Hello"`

### 5. **Functional Programming Concepts**

- **Q: What is a pure function?**
  
  **A:** A pure function has no side effects and returns the same output for the same inputs.
  
  javascript
  
  Copy code
  
  `function add(a, b) {   return a + b; }`

- **Q: What is a higher-order function?**
  
  **A:** A higher-order function either takes a function as an argument or returns a function.
  
  javascript
  
  Copy code
  
  `function higherOrder(fn) {   return fn(); }  function sayHello() {   return "Hello"; }  console.log(higherOrder(sayHello)); // "Hello"`

- **Q: Can you show the usage of `map()`, `reduce()`, and `filter()`?**
  
  javascript
  
  Copy code
  
  `const numbers = [1, 2, 3, 4];  
  
  const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8] 
  
  const even = numbers.filter(n => n % 2 === 0); // [2, 4] 
  
  const sum = numbers.reduce((acc, n) => acc + n, 0); // 10`

- **Q: What is the difference between composition and inheritance in functional programming?**
  
  **A:** Inheritance focuses on class hierarchies,

### 1. **Hoisting**

- **Q: What is hoisting in JavaScript?**
  
  **A:** Hoisting refers to the behavior where variable and function declarations are moved to the top of their scope before code execution.
  
  javascript
  
  Copy code
  
  `console.log(x); // undefined var x = 5;  function sayHello() {   console.log("Hello!"); } sayHello(); // "Hello!"`
  
  In the example, `var` is hoisted but initialized as `undefined`, and `sayHello` is fully hoisted.

---

### 2. **Event Loop**

- **Q: Explain the JavaScript event loop.**
  
  **A:** The event loop processes asynchronous operations, allowing non-blocking execution. The call stack handles synchronous code, while asynchronous tasks (callbacks, promises) go to the event loop and are processed once the stack is empty.
  
  javascript
  
  Copy code
  
  `console.log('Start'); setTimeout(() => console.log('Inside Timeout'), 0); console.log('End');  // Output: // Start // End // Inside Timeout`
  
  The `setTimeout` callback is placed in the event queue and runs after synchronous code finishes.

---

### 3. **Debouncing and Throttling**

- **Q: What are debouncing and throttling?**
  
  **A:** Debouncing limits the number of function calls by ensuring the function is invoked only after a specified delay following the last trigger.
  
  javascript
  
  Copy code
  
  `function debounce(func, delay) {   let timer;   return function (...args) {     clearTimeout(timer);     timer = setTimeout(() => func(...args), delay);   }; }`
  
  Throttling ensures a function is called at most once every specified time interval.
  
  javascript
  
  Copy code
  
  `function throttle(func, limit) {
  
     let lastFunc; 
  
    let lastRan; 
  
    return function (...args) {
  
       const now = Date.now();
            if (!lastRan) { 
             func(...args); 
             lastRan = now; 
           } else {     
         clearTimeout(lastFunc); 
         lastFunc = setTimeout(() => {  
              if (now - lastRan >= limit) {  
                func(...args);  
                lastRan = now;  
              }   
           }
       , limit - (now - lastRan)); 
           }  
        }; 
       }`

---

### 4. **Object Descriptors and Property Configuration**

- **Q: What are object descriptors, and how do you configure them in JavaScript?**
  
  **A:** JavaScript allows controlling properties with descriptors like `writable`, `enumerable`, and `configurable` using `Object.defineProperty`.
  
  javascript
  
  Copy code
  
  `const person = {}; Object.defineProperty(person, 'name', {   value: 'Ahmed',   writable: false,   enumerable: true,   configurable: false, });  console.log(person.name); // "Ahmed" person.name = 'Ali'; // Error in strict mode or ignored`
  
  This example shows how to control property behavior by defining its descriptor.

---

### 5. **Promise.all vs Promise.race**

- **Q: What is the difference between `Promise.all()` and `Promise.race()`?**
  
  **A:** `Promise.all()` waits for all promises to resolve (or rejects if any promise fails), while `Promise.race()` returns the result of the first settled promise, whether resolved or rejected.
  
  javascript
  
  Copy code
  
  `const p1 = new Promise(resolve => setTimeout(resolve, 100, 'One')); const p2 = new Promise(resolve => setTimeout(resolve, 200, 'Two'));  Promise.all([p1, p2]).then(result => console.log(result)); // ['One', 'Two'] Promise.race([p1, p2]).then(result => console.log(result)); // 'One'`

---

### 6. **WeakMap and WeakSet**

- **Q: What is the difference between `Map`/`Set` and `WeakMap`/`WeakSet`?**
  
  **A:** `WeakMap` and `WeakSet` hold weak references to objects, meaning they don’t prevent garbage collection if there are no other references to the object.
  
  javascript
  
  Copy code
  
  `let obj = {}; const weakMap = new WeakMap(); weakMap.set(obj, 'value'); obj = null; // The object will be garbage collected  console.log(weakMap.has(obj)); // false`
  
  This ensures the object can be cleaned up when it’s no longer in use.

---

### 7. **Currying**

- **Q: What is currying in JavaScript?**
  
  **A:** Currying is a technique where a function with multiple arguments is transformed into a series of functions, each taking a single argument.
  
  javascript
  
  Copy code
  
  `function add(a) {   return function (b) {     return a + b;   }; }  const addFive = add(5); console.log(addFive(10)); // 15`
  
  Currying can improve code modularity and reusability.

---

### 8. **Event Delegation**

- **Q: What is event delegation in JavaScript?**
  
  **A:** Event delegation allows handling events at a higher-level element rather than attaching event listeners to individual child elements. 
  
  This takes advantage of event bubbling.
  
  javascript
  
  Copy code
  
  `document.getElementById('parent').addEventListener('click', function (event) {   if (event.target && event.target.nodeName === 'BUTTON') {     alert('Button clicked');   } });`
  
  Here, the event listener is attached to the parent, and clicks are detected for any child button.

### **TypeScript Specifics:**

#### 1. **Basic Types and Type Inference**

- **Question**: How does TypeScript infer types automatically, and what are the basic types?

- **Answer**: TypeScript infers types based on initial values. Basic types include `string`, `number`, `boolean`, `null`, and `undefined`.
  
  typescript
  
  Copy code
  
  `let age = 25; // Type inferred as 'number' let isLoggedIn: boolean = true; // Explicit type declaration`

#### 2. **Interfaces and Type Aliases**

- **Question**: What is the difference between an interface and a type alias in TypeScript?

- **Answer**: Both can describe object shapes, but interfaces are extensible while type aliases are more versatile for unions and intersections.
  
  typescript
  
  Copy code
  
  `interface User { name: string; age: number; } 
  
  type Admin = { name: string; privileges: string[]; };`

#### 3. **Generics**

- **Question**: How do generics make your code more reusable?

- **Answer**: Generics allow functions and classes to handle various types while ensuring type safety.
  
  typescript
  
  Copy code
  
  `function identity<T>(arg: T): T { return arg; } console.log(identity<number>(5)); // Output: 5`

#### 4. **Union and Intersection Types**

- **Question**: What’s the difference between union and intersection types in TypeScript?

- **Answer**: Union allows multiple types (`A | B`), while intersection combines types (`A & B`).
  
  typescript
  
  Copy code
  
  `type A = { a: string; }; type B = { b: number; }; let x: A | B = { a: "test" }; // Union let y: A & B = { a: "test", b: 42 }; // Intersection`

#### 5. **Enums**

- **Question**: How does TypeScript handle enums?

- **Answer**: Enums define a set of named constants.
  
  typescript
  
  Copy code
  
  `enum Colors { Red, Green, Blue } let color: Colors = Colors.Red;`

#### 6. **`keyof` and `typeof` Operators**

- **Question**: What is the `keyof` operator used for in TypeScript?

- **Answer**: `keyof` creates a union of the keys of an object type.
  
  typescript
  
  Copy code
  
  `type User = { name: string; age: number; }; type UserKeys = keyof User; // 'name' | 'age'`

#### 7. **Utility Types (Partial, Readonly, etc.)**

- **Question**: How do you use TypeScript’s utility types like `Partial` and `Readonly`?

- **Answer**: `Partial` makes all properties optional, while `Readonly` ensures all properties are immutable.
  
  typescript
  
  Copy code
  
  `interface User { name: string; age: number; } let partialUser: Partial<User> = { name: "John" }; // Age is optional let readonlyUser: Readonly<User> = { name: "Jane", age: 30 }; // Immutable`

#### 8. **Decorators**

- **Question**: What are decorators in TypeScript?

- **Answer**: Decorators are special functions that can modify classes, properties, and methods at runtime.
  
  typescript
  
  Copy code
  
  ``function log(target: any, key: string) {   console.log(`${key} was called`); }  class Person {   @log   sayHello() { return "Hello"; } }``

---

### **Advanced Concepts:**

#### 9. **Memoization and Caching**

- **Question**: How can you use memoization to optimize performance?

- **Answer**: Memoization caches function results to avoid redundant computations.
  
  typescript
  
  Copy code
  
  `function memoize(fn: Function) {   const cache = new Map();   return function (...args: any[]) {     const key = JSON.stringify(args);     if (cache.has(key)) return cache.get(key);     const result = fn(...args);     cache.set(key, result);     return result;   }; }`

#### 10. **Debouncing and Throttling**

- **Question**: What’s the difference between debouncing and throttling?

- **Answer**: Debouncing delays function execution until a pause in events, while throttling ensures execution at regular intervals.
  
  typescript
  
  Copy code
  
  `// Debouncing function debounce(fn: Function, delay: number) {   let timeout: number;   return function (...args: any[]) {     clearTimeout(timeout);     timeout = setTimeout(() => fn(...args), delay);   }; }`

#### 11. **Event Delegation**

- **Question**: What is event delegation and how does it improve performance?

- **Answer**: Event delegation involves attaching a single event listener to a parent element to handle events on child elements.
  
  javascript
  
  Copy code
  
  `document.querySelector("#parent").addEventListener("click", (event) => {   if (event.target.matches(".child")) {     console.log("Child clicked!");   } });`

#### 12. **Web Workers**

- **Question**: How do web workers improve JavaScript performance?

- **Answer**: Web Workers allow running scripts in background threads, freeing up the main UI thread.
  
  javascript
  
  Copy code
  
  `const worker = new Worker('worker.js'); worker.postMessage('start'); worker.onmessage = (event) => console.log(event.data);`

#### 13. **Service Workers**

- **Question**: What role do service workers play in web applications?

- **Answer**: Service workers cache resources and intercept network requests to enable offline access and improve performance.
  
  javascript
  
  Copy code
  
  `self.addEventListener('install', (event) => {   event.waitUntil(     caches.open('v1').then((cache) => {       return cache.addAll(['/', '/index.html']);     })   ); });`

---

### **ES2022+ Features:**

#### 14. **Top-Level Await**

- **Question**: What is top-level await, and how does it simplify asynchronous code?

- **Answer**: Top-level await allows `await` to be used outside of async functions.
  
  javascript
  
  Copy code
  
  `const data = await fetchData(); console.log(data);`

#### 15. **Private Class Fields**

- **Question**: How do you define private class fields in JavaScript?

- **Answer**: Private fields start with a `#` and can only be accessed inside the class.
  
  javascript
  
  Copy code
  
  `class Person {   #name;   constructor(name) { this.#name = name; } }`

#### 16. **`at()` Method**

- **Question**: What does the `at()` method do in arrays?

- **Answer**: The `at()` method allows accessing elements at a specific index, including negative indexing.
  
  javascript
  
  Copy code
  
  `let arr = [1, 2, 3]; console.log(arr.at(-1)); // Output: 3`

#### 17. **Object.hasOwn()**

- **Question**: How does `Object.hasOwn()` differ from `hasOwnProperty()`?

- **Answer**: `Object.hasOwn()` is a more reliable method to check if an object directly contains a property.
  
  javascript
  
  Copy code
  
  `const obj = { name: 'Alice' }; console.log(Object.hasOwn(obj, 'name')); // true`
