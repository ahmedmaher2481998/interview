# Angular & Node interview FullStack

## LeetCode

#### Main

- [Top 50 Angular Interview Questions - YouTube](https://youtu.be/4KBVkQ7b6yk).

- quick look into  [GitHub - sudheerj/angular-interview-questions: List of 300 Angular Interview Questions and answers](https://github.com/sudheerj/angular-interview-questions).

# Angular



#### 1.  **Core Concepts**

- What is Angular, and how does it differ from other frameworks (like React)?
- Explain the architecture of an Angular application.
- What are modules in Angular? Explain the difference between root and feature modules.
- What is the purpose of the `NgModule` decorator?
- Describe the component lifecycle hooks in Angular.

#### 2. **Components**

- What is a component in Angular? How do you create one?
- Explain the difference between `@Component` and `@Directive`.
- How do you pass data from a parent component to a child component?
- What are input and output properties in Angular?
- How can you use services to share data between components?

#### 3. **Services and Dependency Injection**

- What is a service in Angular?
- Explain dependency injection and how it works in Angular.
- How do you provide a service at different levels (root, module, or component)?

#### 4. **Routing**

- How does Angular routing work?
- Explain the concept of lazy loading in Angular.
- What is the difference between `RouterModule.forRoot()` and `RouterModule.forChild()`?
- How do you pass parameters to a route?

#### 5. **Forms**

- Explain the difference between template-driven and reactive forms.
- How do you validate forms in Angular?
- What are form controls and form groups?

#### 6. **Pipes and Directives**

- What are pipes in Angular, and how do you create a custom pipe?
- Explain the difference between built-in and custom pipes.
- What are structural and attribute directives? Provide examples.

#### 7. **Change Detection**

- What is change detection in Angular, and how does it work?
- Explain the difference between `ChangeDetectionStrategy.Default` and `ChangeDetectionStrategy.OnPush`.

#### 8. **Performance Optimization**

- How can you optimize the performance of an Angular application?
- What are some best practices for improving loading times?

#### 9. **State Management**

- What is state management in Angular, and why is it important?
- Explain how you can use NgRx for state management.
- What are actions, reducers, and selectors in NgRx?

#### 10. **Testing**

- How do you test Angular components and services?
- What is the role of Jasmine and Karma in Angular testing?

#### 11. **Miscellaneous**

- How do you handle errors in Angular applications?
- Explain the purpose of Angular CLI and some commonly used commands.
- How do you perform HTTP requests in Angular?

please add these ropics as well

1. View encapsulation
2. Jit and Aot compiler
3. Change detection
4. Routing
5. Pure and Impure pipes

```md
00:00:00 - Introduction
00:01:58 - What is Angular? 
00:04:50 - What are Angular advantages?
00:07:32 - What is the difference between AngularJS and Angular?
00:10:42 - What is NPM?
00:12:16 - What is CLI tool?
00:13:57 - Section 2
00:14:25 - What are Components in Angular?
00:17:14 - What is a Selector and Template?
00:18:40 - What is Module in Angular? What is app.module.ts file?
00:21:43 - How an Angular App gets Loaded and Started? What are index.html, app-root, selector and main.ts?
00:25:42 - What is a Bootstrapped Module & Bootstrapped Component?
00:27:20 - Section 3
00:27:54 - What is Data Binding in Angular?
00:30:13 - What is String Interpolation in Angular?
00:32:08 - What is Property Binding in Angular?
00:35:06 - What is Event Binding in Angular?
00:38:07 - What is Two way Binding in Angular?
00:41:55 - Section 4 
00:42:19 - What are Directives? What are the type of directives?
00:44:49 - What is *ngIf Structural directive?
00:46:43 - What is *ngFor Structural directive?
00:48:06 - What is *ngSwitch Structural directive?
00:50:35 - What is [ngStyle] Attribute directive?
00:53:45 - What is [ngClass] Attribute directive?
00:56:26 - What is the difference between Component, Attribute and Structural Directives?
00:58:08 - Section 5 
00:58:29 - What is Decorator?
01:00:15 - What are the types of Decorator?
01:01:05 - What are Pipes? What are the types of Pipes & Parameterized Pipes?
01:03:25 - What is Chaining Pipes?
01:04:14 - Section 6
01:04:38 - Explain Services with Example?
01:06:32 - How to create Servicein Angular?
01:10:04 - How to use Dependency Injector with Services in Angular?
01:11:56 - What is Hierarchical Dependency Injection?
01:14:34 - What is Provider in  Angular?
01:15:46 - What is the role of @Injectable Decorator in a Service?
01:19:57 - Section 7 
01:20:11 - What are Parent-Child Components?
01:23:40 - What are Lifecycle Hooks in Angular?
01:27:09 - What is a Constructor in Angular?
01:29:24 - What is ngOnInit life cycle hook in Angular?
01:30:52 - What is the difference between constructor and ngOnInit?
01:35:21 - Section 8 
01:36:01 - What are Asynchronous operations?
01:38:20 - What is the difference between Promise and Observable?
01:42:47 - What is RxJS?
01:45:21 - What is Observable? How to implement Observable
01:50:10 - What is the role of HttpClient in Angular?
01:51:26 - Section 9 
01:51:50 - What is Typescript? Or What is the difference between Typescript and Javascript?
01:57:55 - What is the difference between let and var keyword?
2:00:59 - What is Type annotation?
02:02:27 - What are Built in/ Primitive and User-Defined/ Non-primitive Types in Typescript?
02:04:21 - What is “any” type in Typescript?
02:06:37 - What is Enum type in Typescript?
02:08:48 - What is Type Assertion in Typescript?
02:10:47 - What are Arrow Functions in Typescript?
```

Here’s a detailed response to each question with code snippets where needed:

---

### **What is Angular?**

**Angular** is a **framework** for building single-page applications (SPAs) using **TypeScript**. It provides tools and libraries to build scalable web apps and focuses on declarative templates, dependency injection, and modular design.

---

### **What are Angular advantages?**

1. **Two-way data binding:** Syncs the data between the component and the view.
2. **Modular structure:** Reusable code across the app using modules.
3. **Dependency injection (DI):** Manages service instances efficiently.
4. **TypeScript support:** Leverages static typing and better tooling.
5. **CLI support:** Speeds up project setup and scaffolding.

---

### **What is the difference between AngularJS and Angular?**

1. **Language:**  
   - AngularJS uses JavaScript.  
   - Angular uses TypeScript.  
2. **Architecture:**  
   - AngularJS is MVC-based.  
   - Angular follows a component-based architecture.  
3. **Performance:**  
   - Angular offers better performance due to AOT (Ahead of Time) compilation.

---

### **What is NPM?**

**NPM (Node Package Manager)** is used to manage dependencies for JavaScript and Angular projects. It allows installing libraries and tools via a command line.  
Example:

```bash
npm install @angular/core
```

---

### **What is CLI Tool?**

The **Angular CLI** (Command Line Interface) helps create Angular projects, generate components, services, and handle configurations.  
Example:

```bash
ng new my-angular-app
```

---

### **What are Components in Angular?**

A **component** in Angular controls a section of the user interface. It consists of:

- **Template** (HTML)
- **Logic** (TypeScript)
- **Styles** (CSS/SCSS)

Example:

```typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App';
}
```

---

### **What is a Selector and Template?**

- **Selector:** A CSS-like identifier used in HTML to render a component.  
- **Template:** The HTML code used to display the view of the component.

---

### **What is `app.module.ts`?**

The **app.module.ts** file defines the root module of the Angular app and imports other components, services, and dependencies.

---

### **How an Angular App gets Loaded and Started?**

1. **`index.html`**: The entry point with `<app-root>` selector.  
2. **`main.ts`**: Bootstraps the application.  
3. **`app-root`**: The root component rendered in the index.html.

---

### **What is Data Binding in Angular?**

**Data binding** establishes a connection between the component and the view.  

- **String interpolation:**  
  
  ```html
  <p>{{ title }}</p>
  ```

- **Property binding:**  
  
  ```html
  <img [src]="imageUrl" />
  ```

- **Event binding:**  
  
  ```html
  <button (click)="handleClick()">Click me</button>
  ```

- **Two-way binding:**  
  
  ```html
  <input [(ngModel)]="user.name" />
  ```

---

### **What are Directives?**

Directives are used to change the DOM structure or behavior.  

- **Structural Directives:** Modify the DOM (e.g., `*ngIf`, `*ngFor`).  
- **Attribute Directives:** Change appearance or behavior (e.g., `[ngClass]`, `[ngStyle]`).

---

### **What is Dependency Injection (DI)?**

**DI** is a design pattern that injects dependencies into components or services at runtime.  
Example of a service:

```typescript
@Injectable({ providedIn: 'root' })
export class DataService {
  getData() {
    return ['Item1', 'Item2'];
  }
}
```

Injecting the service:

```typescript
constructor(private dataService: DataService) {}
```

---

### **What are Lifecycle Hooks in Angular?**

Angular components have **lifecycle hooks** to respond to changes in the component.  

- **ngOnInit:** Executes when the component initializes.
- **ngOnDestroy:** Executes when the component is destroyed.

```typescript
ngOnInit() {
  console.log('Component initialized');
}
```

---

### **What is the difference between Promise and Observable?**

- **Promise:** Handles a single asynchronous event.  
- **Observable:** Can handle a stream of asynchronous events and supports cancellation.

```typescript
const observable = new Observable(subscriber => {
  subscriber.next('First Value');
  setTimeout(() => subscriber.next('Second Value'), 1000);
});
```

---

### **What is HttpClient in Angular?**

`HttpClient` is used to make HTTP requests to a backend service.

Example:

```typescript
this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
  console.log(data);
});
```

---

### **What is the difference between TypeScript and JavaScript?**

- **TypeScript:** Superset of JavaScript that supports static typing.  
- **JavaScript:** Dynamically typed language.

---

### **What is Enum type in TypeScript?**

Enums define a set of named constants.

```typescript
enum Color {
  Red,
  Green,
  Blue
}
let c: Color = Color.Green;
```

---

### **What are Arrow Functions in TypeScript?**

Arrow functions provide a shorter syntax for writing functions.

```typescript
const add = (a: number, b: number) => a + b;
```

---

Have ToDo

- **Hands-On Practice:** Build small applications to reinforce these concepts.
- 
- **Mock Interviews:** Practice answering these questions with a peer or in front of a mirror to gain confidence.







# Technical Interview Questions - Part 1 (50 Questions)

## JavaScript Fundamentals & Advanced Concepts

### 1. What is the difference between `let`, `const`, and `var`?

**Answer:** 

- `var` has function scope and is hoisted
- `let` has block scope and is not hoisted
- `const` has block scope, is not hoisted, and cannot be reassigned (but objects/arrays can be modified)

Example:

```javascript
{
    var x = 1;  // accessible outside block
    let y = 2;  // only accessible within block
    const z = 3;  // only accessible within block, cannot be reassigned
}
console.log(x); // 1
console.log(y); // ReferenceError
```

### 2. Explain closures in JavaScript with an example.

**Answer:** A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned.

```javascript
function createCounter() {
    let count = 0;
    return {
        increment: () => ++count,
        getCount: () => count
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount()); // 2
```

### 3. What is the event loop in JavaScript?

**Answer:** The event loop is JavaScript's mechanism for executing code asynchronously. It consists of:

- Call Stack: Executes synchronous code
- Callback Queue: Holds callback functions
- Microtask Queue: Holds Promises and similar tasks
- Event Loop: Checks if call stack is empty and moves tasks from queues to stack

```javascript
console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');

// Output:
// 1
// 4
// 3
// 2
```

### 4. Explain Promise chaining and async/await.

**Answer:** Promise chaining is a way to execute multiple asynchronous operations sequentially. async/await is syntactic sugar that makes working with Promises more readable.

```javascript
// Promise chaining
fetchUser()
    .then(user => fetchProfile(user.id))
    .then(profile => fetchPosts(profile.id))
    .catch(error => console.error(error));

// Same operation with async/await
async function getUserData() {
    try {
        const user = await fetchUser();
        const profile = await fetchProfile(user.id);
        const posts = await fetchPosts(profile.id);
        return posts;
    } catch (error) {
        console.error(error);
    }
}
```

### 5. What are the different ways to create objects in JavaScript?

**Answer:**

```javascript
// Object literal
const obj1 = { name: 'John' };

// Constructor function
function Person(name) {
    this.name = name;
}
const obj2 = new Person('John');

// Object.create()
const obj3 = Object.create(Object.prototype, {
    name: {
        value: 'John',
        writable: true,
        enumerable: true,
        configurable: true
    }
});

// Class (ES6+)
class Person {
    constructor(name) {
        this.name = name;
    }
}
const obj4 = new Person('John');
```

### 6. Explain prototypal inheritance in JavaScript.

**Answer:** In JavaScript, objects inherit properties and methods from their prototype. Each object has a private property that holds a link to its prototype object.

```javascript
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    return `${this.name} makes a sound`;
};

function Dog(name) {
    Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
    return `${this.name} barks`;
};

const dog = new Dog('Rex');
console.log(dog.speak()); // "Rex barks"
```

### 7. What is the difference between map, filter, and reduce?

**Answer:**

```javascript
const numbers = [1, 2, 3, 4, 5];

// map: transforms each element
const doubled = numbers.map(num => num * 2);
// [2, 4, 6, 8, 10]

// filter: creates new array with elements that pass test
const evenNumbers = numbers.filter(num => num % 2 === 0);
// [2, 4]

// reduce: reduces array to single value
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// 15
```

### 8. Explain the concept of hoisting in JavaScript.

**Answer:** Hoisting is JavaScript's default behavior of moving declarations to the top of their scope during compilation.

```javascript
console.log(x); // undefined
var x = 5;

// is interpreted as:
var x;
console.log(x);
x = 5;

// let and const are not hoisted
console.log(y); // ReferenceError
let y = 5;
```

### 9. What is the difference between == and ===?

**Answer:**

- `==` performs type coercion before comparison
- `===` compares both value and type without coercion

```javascript
5 == "5"    // true (coerces string to number)
5 === "5"   // false (different types)
null == undefined   // true
null === undefined  // false
```

### 10. Explain the `this` keyword in different contexts.

**Answer:** The value of `this` depends on how and where a function is called:

```javascript
// Global context
console.log(this); // window (browser) or global (Node.js)

// Object method
const obj = {
    name: 'Object',
    method() {
        console.log(this.name); // 'Object'
    }
};

// Constructor function
function Person(name) {
    this.name = name;
}

// Arrow function
const arrowFunc = () => {
    console.log(this); // inherits this from enclosing scope
};
```

## Angular (Core Concepts)

### 11. What is Angular and what are its main features?

**Answer:** Angular is a TypeScript-based open-source framework for building web applications. Main features include:

- Component-based architecture
- Two-way data binding
- Dependency Injection
- Templates
- Routing
- Forms (Template-driven and Reactive)
- HTTP Client
- Observables
- CLI tools

### 12. Explain components in Angular.

**Answer:** Components are the basic building blocks of Angular applications. They contain:

- Template (view)
- Class (logic)
- Metadata (decorator)

```typescript
@Component({
    selector: 'app-example',
    template: `
        <h1>{{title}}</h1>
        <p>{{getMessage()}}</p>
    `
})
export class ExampleComponent {
    title = 'Example Component';

    getMessage() {
        return 'Hello from Example Component';
    }
}
```

### 13. What is the difference between constructor and ngOnInit?

**Answer:**

```typescript
export class MyComponent implements OnInit {
    constructor(private service: MyService) {
        // Used for dependency injection
        // Runs when component is constructed
    }

    ngOnInit() {
        // Used for initialization logic
        // Runs after component is constructed and inputs are set
        this.loadData();
    }
}
```

### 14. Explain Angular's change detection strategy.

**Answer:** Angular uses Zone.js to detect changes and update the view. There are two strategies:

- Default: Checks entire component tree
- OnPush: Only checks component when:
  - Input references change
  - Event handler is triggered
  - Async pipe emits
  - Manual trigger using ChangeDetectorRef

```typescript
@Component({
    selector: 'app-example',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<div>{{data}}</div>`
})
export class ExampleComponent {
    @Input() data: string;
}
```

### 15. What are Angular directives? Explain different types.

**Answer:** Directives are classes that add behavior to elements. Three types:

1. Component Directives:
   
   ```typescript
   @Component({
    selector: 'app-example'
   })
   ```

2. Structural Directives:
   
   ```html
   <div *ngIf="condition">Shown if true</div>
   <div *ngFor="let item of items">{{item}}</div>
   <div [ngSwitch]="value">
    <div *ngSwitchCase="'A'">A</div>
    <div *ngSwitchDefault>Default</div>
   </div>
   ```

3. Attribute Directives:
   
   ```html
   <div [ngStyle]="{'color': 'red'}">
   <div [ngClass]="{'active': isActive}">
   ```

### 16. Explain dependency injection in Angular.

**Answer:** DI is a design pattern where classes receive dependencies from external sources rather than creating them.

```typescript
// Service
@Injectable({
    providedIn: 'root'
})
export class UserService {
    getUsers() { }
}

// Component
@Component({})
export class UserComponent {
    constructor(private userService: UserService) {}
}
```

### 17. What is the purpose of Angular modules?

**Answer:** Modules organize related components, directives, pipes, and services into cohesive blocks of functionality.

```typescript
@NgModule({
    declarations: [
        AppComponent,
        UserComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

### 18. How does data binding work in Angular?

**Answer:** Angular supports four types of data binding:

```typescript
@Component({
    template: `
        <!-- Interpolation -->
        <h1>{{title}}</h1>

        <!-- Property Binding -->
        <img [src]="imageUrl">

        <!-- Event Binding -->
        <button (click)="onClick()">Click</button>

        <!-- Two-way Binding -->
        <input [(ngModel)]="name">
    `
})
```

### 19. Explain Angular's routing mechanism.

**Answer:**

```typescript
// Route configuration
const routes: Routes = [
    { path: '', component: HomeComponent },
    { 
        path: 'users', 
        component: UsersComponent,
        children: [
            { path: ':id', component: UserDetailComponent }
        ],
        canActivate: [AuthGuard]
    },
    { path: '**', component: NotFoundComponent }
];

// Navigation
export class AppComponent {
    constructor(private router: Router) {
        router.navigate(['/users', userId]);
    }
}
```

### 20. What are Angular services and why use them?

**Answer:** Services are classes that encapsulate shared logic, data, or external interactions:

```typescript
@Injectable({
    providedIn: 'root'
})
export class DataService {
    private data: any[] = [];

    getData() {
        return this.data;
    }

    addData(item: any) {
        this.data.push(item);
    }
}
```

## Node.js & Express

### 21. What is Node.js and what are its key features?

**Answer:** Node.js is a JavaScript runtime built on Chrome's V8 engine. Key features:

- Event-driven, non-blocking I/O
- Single-threaded with event loop
- NPM (package manager)
- Built-in modules
- Cross-platform

```javascript
// Example of non-blocking I/O
const fs = require('fs');

fs.readFile('file.txt', (err, data) => {
    if (err) throw err;
    console.log(data);
});
console.log('Reading file...'); // This runs first
```

### 22. Explain middleware in Express.js

**Answer:** Middleware functions have access to request, response objects, and the next middleware function.

```javascript
const express = require('express');
const app = express();

// Application-level middleware
app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});

// Route-specific middleware
app.get('/user/:id', (req, res, next) => {
    // Check if user exists
    next();
}, (req, res) => {
    res.send('User Info');
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
```

### 23. How do you handle errors in Node.js?

**Answer:**

```javascript
// Try-catch for synchronous code
try {
    const result = someOperation();
} catch (error) {
    console.error(error);
}

// Error events for streams
readStream.on('error', (error) => {
    console.error('Stream error:', error);
});

// Promise rejection
promise
    .then(result => {})
    .catch(error => {
        console.error(error);
    });

// Async/await
async function handleOperation() {
    try {
        await someAsyncOperation();
    } catch (error) {
        console.error(error);
    }
}
```

### 24. What is the Event Emitter pattern in Node.js?

**Answer:**

```javascript
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

// Register listener
myEmitter.on('event', (data) => {
    console.log('Event occurred:', data);
});

// Emit event
myEmitter.emit('event', 'some data');
```

### 25. Explain RESTful routing in Express.js

**Answer:**

```javascript
const express = require('express');
const app = express();

// GET - Read
app.get('/users', (req, res) => {
    res.json(users);
});

// POST - Create
app.post('/users', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT - Update
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    Object.assign(user, req.body);
    res.json(user);
});

// DELETE - Delete
app.delete('/users/:id', (req, res) => {
    users = users.filter(u => u.id !== req.params.id);
    res.status(204).send();
});
```

## MongoDB

### 26. What is MongoDB and what are its main features?

**Answer:** MongoDB is a NoSQL document database that stores data in flexible, JSON-like documents. Main features:

- Document-oriented storage
- High availability with replica sets
- Horizontal scalability with sharding
- Aggregation framework
- Index support

### 27. Explain CRUD operations in MongoDB.

**Answer:**

```javascript
// Create
db.users.insertOne({
    name: "John",
    age: 30
});

// Read
db.users.find({ age: { $gt: 25 } });

// Update
db.users.updateOne(
    { name: "John" },
    { $set: { age: 31 } }
);

// Delete
db.users.deleteOne({ name: "John" });
```

### 28. How do you model relationships in MongoDB?

**Answer:** Two main approaches:

1. Embedded Documents:
   ```javascript
   // User document with embedded addresses
   {



### 28. (continued) How do you model relationships in MongoDB?

**Answer:** Two main approaches:

1. Embedded Documents:
   
   ```javascript
   // User document with embedded addresses
   {
    _id: ObjectId("123"),
    name: "John Doe",
    addresses: [
        {
            street: "123 Main St",
            city: "Boston",
            type: "home"
        },
        {
            street: "456 Work Ave",
            city: "Boston",
            type: "work"
        }
    ]
   }
   ```

2. Document References:
   
   ```javascript
   // User document
   {
    _id: ObjectId("123"),
    name: "John Doe",
    order_ids: [ObjectId("456"), ObjectId("789")]
   }
   ```

// Order documents
{
    _id: ObjectId("456"),
    user_id: ObjectId("123"),
    items: ["item1", "item2"]
}

```
### 29. Explain indexes in MongoDB.
**Answer:** Indexes improve query performance by reducing the number of documents to scan.

```javascript
// Create single field index
db.users.createIndex({ email: 1 });

// Create compound index
db.users.createIndex({ lastname: 1, firstname: 1 });

// Create unique index
db.users.createIndex({ email: 1 }, { unique: true });

// Create text index
db.articles.createIndex({ content: "text" });

// Get index information
db.users.getIndexes();
```

### 30. What is the aggregation pipeline in MongoDB?

**Answer:** The aggregation pipeline is a framework for data aggregation using multiple stages.

```javascript
db.orders.aggregate([
    // Stage 1: Filter documents
    { $match: { status: "completed" } },

    // Stage 2: Group documents
    { $group: {
        _id: "$customerId",
        totalSpent: { $sum: "$total" },
        orderCount: { $sum: 1 }
    }},

    // Stage 3: Sort results
    { $sort: { totalSpent: -1 } },

    // Stage 4: Limit results
    { $limit: 5 }
]);
```

### 31. How do you handle transactions in MongoDB?

**Answer:** MongoDB supports multi-document transactions starting from version 4.0:

```javascript
const session = client.startSession();
session.startTransaction();

try {
    await db.accounts.updateOne(
        { _id: account1Id },
        { $inc: { balance: -100 } },
        { session }
    );

    await db.accounts.updateOne(
        { _id: account2Id },
        { $inc: { balance: 100 } },
        { session }
    );

    await session.commitTransaction();
} catch (error) {
    await session.abortTransaction();
    throw error;
} finally {
    session.endSession();
}
```

### 32. Explain sharding in MongoDB.

**Answer:** Sharding is MongoDB's approach to horizontal scaling. It distributes data across multiple machines.

Key components:

```javascript
// 1. Enable sharding for database
sh.enableSharding("mydb")

// 2. Choose shard key and shard collection
sh.shardCollection("mydb.users", { "city": 1 })

// 3. Check sharding status
sh.status()

// 4. Add tags for zone sharding
sh.addShardTag("shard0001", "US")
sh.addTagRange(
    "mydb.users",
    { "country": "US", "zip": MinKey },
    { "country": "US", "zip": MaxKey },
    "US"
)
```

### 33. How do you perform text search in MongoDB?

**Answer:**

```javascript
// Create text index
db.articles.createIndex({ title: "text", content: "text" });

// Simple text search
db.articles.find({
    $text: { $search: "mongodb database" }
});

// Text search with score
db.articles.find(
    { $text: { $search: "mongodb database" } },
    { score: { $meta: "textScore" } }
).sort({ score: { $meta: "textScore" } });
```

### 34. Explain MongoDB's replica sets.

**Answer:** Replica sets provide high availability through redundancy:

```javascript
// Initialize replica set
rs.initiate({
    _id: "myReplicaSet",
    members: [
        { _id: 0, host: "server1:27017" },
        { _id: 1, host: "server2:27017" },
        { _id: 2, host: "server3:27017" }
    ]
});

// Check replica set status
rs.status();

// Configure read preferences
db.users.find().readPref("secondary");
```

### 35. How do you handle schema validation in MongoDB?

**Answer:**

```javascript
db.createCollection("users", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "email", "age"],
            properties: {
                name: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                email: {
                    bsonType: "string",
                    pattern: "^.+@.+\..+$",
                    description: "must be a valid email address"
                },
                age: {
                    bsonType: "int",
                    minimum: 0,
                    description: "must be a positive integer"
                }
            }
        }
    }
});
```

### 36. What are MongoDB change streams?

**Answer:** Change streams allow applications to access real-time data changes:

```javascript
const changeStream = db.collection('users').watch();

changeStream.on('change', (change) => {
    console.log('Change detected:', change);
});

// With pipeline
const pipeline = [
    { $match: { 'operationType': { $in: ['insert', 'update'] } } },
    { $match: { 'fullDocument.status': 'active' } }
];

const filteredStream = db.collection('users').watch(pipeline);
```

### 37. Explain MongoDB's `$lookup` operation.

**Answer:** `$lookup` performs a left outer join to another collection:

```javascript
db.orders.aggregate([
    {
        $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "userDetails"
        }
    },
    {
        $unwind: "$userDetails"
    }
]);
```

### 38. How do you optimize MongoDB queries?

**Answer:**

```javascript
// 1. Use explain() to analyze query performance
db.users.find({ age: { $gt: 21 } }).explain("executionStats");

// 2. Create proper indexes
db.users.createIndex({ age: 1 });

// 3. Use projection to limit fields
db.users.find({ age: { $gt: 21 } }, { name: 1, age: 1 });

// 4. Use limit() for pagination
db.users.find().limit(20).skip(20);

// 5. Use covered queries
db.users.find(
    { age: { $gt: 21 } },
    { _id: 0, age: 1, name: 1 }
).hint({ age: 1 });
```

### 39. What are MongoDB Update Operators?

**Answer:**

```javascript
// $set - Set field value
db.users.updateOne(
    { _id: 1 },
    { $set: { status: "active" } }
);

// $inc - Increment field
db.users.updateOne(
    { _id: 1 },
    { $inc: { score: 5 } }
);

// $push - Add to array
db.users.updateOne(
    { _id: 1 },
    { $push: { tags: "new-tag" } }
);

// $addToSet - Add unique to array
db.users.updateOne(
    { _id: 1 },
    { $addToSet: { categories: "sports" } }
);

// $pull - Remove from array
db.users.updateOne(
    { _id: 1 },
    { $pull: { tags: "old-tag" } }
);
```

### 40. How do you handle data migration in MongoDB?

**Answer:**

```javascript
// 1. Using mongodump and mongorestore
// Dump database
mongodump --db=mydb --out=/backup/path

// Restore database
mongorestore --db=mydb /backup/path/mydb

// 2. Using aggregation pipeline for data transformation
db.users.aggregate([
    { $match: { status: "active" } },
    { $project: {
        fullName: { $concat: ["$firstName", " ", "$lastName"] },
        age: 1,
        email: 1
    }},
    { $out: "transformed_users" }
]);

// 3. Using bulk operations for efficient updates
const bulk = db.users.initializeUnorderedBulkOp();
bulk.find({ status: "old" }).update({ $set: { status: "new" } });
bulk.execute();
```

[Questions 41-50 will continue with more Angular-specific questions since you mentioned wanting thorough Angular coverage]

### 41. Explain Angular's template syntax features.

**Answer:**

```typescript
@Component({
    template: `
        <!-- String interpolation -->
        <h1>{{title}}</h1>

        <!-- Property binding -->
        <img [src]="imageUrl">
        <button [disabled]="isDisabled">Click</button>

        <!-- Event binding -->
        <button (click)="onClick($event)">Click</button>

        <!-- Two-way binding -->
        <input [(ngModel)]="name">

        <!-- Template reference variables -->
        <input #myInput>
        <button (click)="logValue(myInput.value)">Log</button>

        <!-- Safe navigation operator -->
        <div>{{user?.name}}</div>

        <!-- Pipes -->
        <div>{{date | date:'short'}}</div>
        <div>{{price | currency:'USD'}}</div>
    `
})
```

### 42. How do you handle forms in Angular?

**Answer:** Angular provides two approaches to handling forms:

1. Template-Driven Forms:
   
   ```typescript
   @Component({
    template: `
        <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">
            <input name="email" [(ngModel)]="user.email" required email>
            <div *ngIf="myForm.controls['email']?.invalid">
                Invalid email
            </div>
            <button type="submit">Submit</button>
        </form>
    `
   })
   export class MyComponent {
    user = { email: '' };
    onSubmit(form: NgForm) {
        if (form.valid) {
            console.log(form.value);
        }
    }
   }
   ```

2. Reactive Forms:
   
   ```typescript
   @Component({
    template: `
        <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
            <input formControlName="email">
            <div *ngIf="myForm.get('email').invalid">
                Invalid email
            </div>
            <button type="submit">Submit</button>
        </form>
    `
   })
   export class MyComponent {
    myForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]]
    });
   
    constructor(private fb: FormBuilder) {}
   
    onSubmit() {
        if (this.myForm.valid) {
            console.log(this.myForm.value);
        }
    }
   }
   ```

### 43. Explain Angular's HTTP client.

**Answer:**

```typescript
@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) {}

    // GET request
    getUsers(): Observable<User[]> {
        return this.http.get<User[]>('/api/users')
            .pipe(
                catchError(this.handleError)
            );
    }

    // POST request
    createUser(user: User): Observable<User> {
        return this.http.post<User>('/api/users', user, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }

    // Error handling
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('Client error:', error.error.message);
        } else {
            console.error(`Backend error: ${error.status}`, error.error);
        }
        return throwError(() => 
            new Error('Something bad happened; please try again later.')
        );
    }
}
```

### 44. How do you implement authentication in Angular?

**Answer:**

```typescript
// Auth service
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private currentUser: BehaviorSubject<User> = 
        new BehaviorSubject<User>(null);

    login(credentials: {email: string, password: string}) {
        return this.http.post<User>('/api/login', credentials)
            .pipe(
                tap(user => this.currentUser.next(user)),
                tap(user => localStorage.setItem('token', user.token))
            );
    }

    isAuthenticated(): boolean {
        return !!localStorage.getItem('token');
    }
}

// Auth guard
@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private auth: AuthService,
        private router: Router
    ) {}

    canActivate(): boolean {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}

// HTTP interceptor
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = localStorage.getItem('token');
        if (token) {
            const cloned = req.clone({
                headers: req.headers.set('Authorization',
                    `Bearer ${token}`)
            });
            return next.handle(cloned);
        }
        return next.handle(req);
    }
}
```

### 45. Explain lazy loading in Angular.

**Answer:**

```typescript
// App routing module
const routes: Routes = [
    {
        path: 'admin',
        loadChildren: () => 
            import('./admin/admin.module')
            .then(m => m.AdminModule)
    }
];

// Feature module
@NgModule({
    declarations: [AdminComponent],
    imports: [
        RouterModule.forChild([
            { path: '', component: AdminComponent }
        ])
    ]
})
export class AdminModule {}
```

### 46. How do you implement state management in Angular?

**Answer:** Using services with BehaviorSubject:

```typescript
// State service
@Injectable({
    providedIn: 'root'
})
export class StateService {
    private state = new BehaviorSubject<any>({});
    state$ = this.state.asObservable();

    updateState(newState: any) {
        this.state.next({
            ...this.state.value,
            ...newState
        });
    }
}

// Component usage
@Component({})
export class MyComponent implements OnInit {
    data$ = this.state.state$;

    constructor(private state: StateService) {}

    ngOnInit() {
        this.data$.subscribe(data => {
            console.log('State updated:', data);
        });
    }

    updateData() {
        this.state.updateState({ newData: 'value' });
    }
}
```

### 47. Explain Angular's content projection





### 47. Explain Angular's content projection

**Answer:** Content projection allows you to insert content into components.

```typescript
// Parent component template
@Component({
    selector: 'app-card',
    template: `
        <div class="card">
            <!-- Single slot content projection -->
            <div class="header">
                <ng-content select="[header]"></ng-content>
            </div>

            <!-- Default slot -->
            <div class="body">
                <ng-content></ng-content>
            </div>

            <!-- Named slot -->
            <div class="footer">
                <ng-content select="[footer]"></ng-content>
            </div>
        </div>
    `
})
export class CardComponent {}

// Usage in another component
@Component({
    template: `
        <app-card>
            <h2 header>Card Title</h2>
            <p>This is the main content.</p>
            <button footer>Action</button>
        </app-card>
    `
})
```

### 48. How do you implement dynamic components in Angular?

**Answer:**

```typescript
// Dynamic component
@Component({
    template: `<div>Dynamic content: {{data}}</div>`
})
export class DynamicComponent {
    @Input() data: string;
}

// Container component
@Component({
    template: `
        <div>
            <ng-container #container></ng-container>
        </div>
    `
})
export class ContainerComponent {
    @ViewChild('container', { read: ViewContainerRef }) 
    container: ViewContainerRef;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

    loadComponent() {
        // Clear container
        this.container.clear();

        // Create component
        const componentFactory = 
            this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);
        const componentRef = this.container.createComponent(componentFactory);

        // Set component properties
        componentRef.instance.data = 'Hello from dynamic component';
    }
}
```

### 49. Explain Angular's change detection lifecycle hooks

**Answer:**

```typescript
@Component({
    selector: 'app-lifecycle',
    template: `<div>{{data}}</div>`
})
export class LifecycleComponent implements 
    OnInit, 
    OnChanges, 
    DoCheck, 
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

    @Input() data: string;

    constructor() {
        console.log('1. Constructor');
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('2. OnChanges', changes);
    }

    ngOnInit() {
        console.log('3. OnInit');
    }

    ngDoCheck() {
        console.log('4. DoCheck');
    }

    ngAfterContentInit() {
        console.log('5. AfterContentInit');
    }

    ngAfterContentChecked() {
        console.log('6. AfterContentChecked');
    }

    ngAfterViewInit() {
        console.log('7. AfterViewInit');
    }

    ngAfterViewChecked() {
        console.log('8. AfterViewChecked');
    }

    ngOnDestroy() {
        console.log('9. OnDestroy');
    }
}
```

### 50. How do you optimize Angular application performance?

**Answer:** Here are key strategies for optimizing Angular applications:

```typescript
// 1. Use OnPush Change Detection
@Component({
    selector: 'app-item',
    changeDetection: ChangeDetectionStrategy.OnPush
})

// 2. Use trackBy with ngFor
@Component({
    template: `
        <div *ngFor="let item of items; trackBy: trackByFn">
            {{item.name}}
        </div>
    `
})
export class ListComponent {
    trackByFn(index: number, item: any): number {
        return item.id;
    }
}

// 3. Lazy loading routes
const routes: Routes = [{
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
        .then(m => m.AdminModule)
}];

// 4. Use pure pipes instead of methods in template
@Pipe({
    name: 'filter',
    pure: true
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], field: string, value: any): any[] {
        return items.filter(item => item[field] === value);
    }
}

// 5. Unsubscribe from observables
export class MyComponent implements OnDestroy {
    private destroy$ = new Subject<void>();

    ngOnInit() {
        this.dataService.getData()
            .pipe(takeUntil(this.destroy$))
            .subscribe(data => {
                // Handle data
            });
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}

// 6. Use async pipe for observables
@Component({
    template: `
        <div *ngFor="let item of items$ | async">
            {{item.name}}
        </div>
    `
})
export class AsyncComponent {
    items$ = this.service.getItems();
}

// 7. Preload strategically
@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules
        })
    ]
})

// 8. Use web workers for heavy computations
const worker = new Worker('./app.worker', { type: 'module' });
worker.postMessage({ data: complexData });
worker.onmessage = ({ data }) => {
    console.log('Result:', data);
};
```

This completes Part 1 of the interview questions (50 questions). Would you like me to proceed with Part 2, which will cover more questions across these topics?





## Angular Advanced Concepts

### 51. How do you implement custom form validators in Angular?

**Answer:**

```typescript
// Custom validator function
export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valid = /^\d{10}$/.test(control.value);
    return valid ? null : {invalidPhone: true};
  };
}

// Usage
this.form = new FormGroup({
  phone: new FormControl('', [phoneValidator()])
});
```

### 52. Explain Angular's Dependency Injection hierarchy

**Answer:** Angular DI has three levels:

- ModuleInjector hierarchy (`@Injectable({providedIn: 'root'})`)
- ElementInjector hierarchy (component-level providers)
- Platform injector (platform-level services)

```typescript
@Component({
  providers: [UserService] // Component-level provider
})
```

### 53. How do you implement server-side rendering (SSR) in Angular?

**Answer:**

```typescript
// Add Universal support
ng add @nguniversal/express-engine

// Modify server-side app.module
@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' })
  ]
})
```

### 54. Explain Angular's Ivy renderer

**Answer:** Key features:

- Tree-shakable code
- Improved build times
- Smaller bundle sizes
- Better debugging
- Enhanced template type checking

### 55. How do you implement i18n in Angular?

**Answer:**

```typescript
// Template
<h1 i18n="@@welcomeMessage">Welcome</h1>

// Extract translations
ng xi18n

// Run with locale
ng serve --configuration=fr
```

### 56. Explain Angular's Route Guards

**Answer:**

```typescript
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(): boolean {
    return this.checkAuth();
  }
}

// Usage
const routes: Routes = [{
  path: 'admin',
  component: AdminComponent,
  canActivate: [AuthGuard]
}];
```

## Node.js & Express Advanced

### 57. How do you implement rate limiting in Express?

**Answer:**

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter);
```

### 58. Explain Node.js Streams

**Answer:**

```javascript
const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);
readStream.on('error', handleError);
```

### 59. How do you implement WebSocket in Node.js?

**Answer:**

```javascript
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  ws.on('message', handleMessage);
});
```

### 60. Explain Node.js clustering

**Answer:**

```javascript
const cluster = require('cluster');

if (cluster.isMaster) {
  cluster.fork();
} else {
  app.listen(3000);
}
```

### 61. How do you implement JWT authentication in Express?

**Answer:**

```javascript
const jwt = require('jsonwebtoken');

// Generate token
const token = jwt.sign({ userId: user.id }, 'secret');

// Verify token
const decoded = jwt.verify(token, 'secret');
```

### 62. Explain Express middleware error handling

**Answer:**

```javascript
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message
  });
});
```

## MongoDB Advanced

### 63. How do you implement MongoDB aggregation with lookup and unwind?

**Answer:**

```javascript
db.orders.aggregate([
  { $lookup: { from: "users", localField: "userId", foreignField: "_id", as: "user" }},
  { $unwind: "$user" }
]);
```

### 64. Explain MongoDB's read preferences

**Answer:**

```javascript
// Options: primary, primaryPreferred, secondary, secondaryPreferred, nearest
db.collection.find().readPref("secondary");
```

### 65. How do you implement MongoDB change streams?

**Answer:**

```javascript
const changeStream = collection.watch();
changeStream.on('change', (change) => console.log(change));
```

### 66. Explain MongoDB's write concerns

**Answer:**

```javascript
// Write with majority concern
db.collection.insertOne(doc, { writeConcern: { w: "majority" }});
```

### 67. How do you implement MongoDB transactions?

**Answer:**

```javascript
const session = client.startSession();
try {
  await session.withTransaction(async () => {
    await collection.updateOne({}, {}, { session });
  });
} finally {
  session.endSession();
}
```

## JavaScript Advanced

### 68. Explain JavaScript Generators

**Answer:**

```javascript
function* generator() {
  yield 1;
  yield 2;
}
const gen = generator();
console.log(gen.next().value); // 1
```

### 69. How do you implement the Observer pattern?

**Answer:**

```javascript
class Observable {
  constructor() {
    this.observers = [];
  }
  subscribe(fn) {
    this.observers.push(fn);
  }
  notify(data) {
    this.observers.forEach(fn => fn(data));
  }
}
```

### 70. Explain JavaScript decorators

**Answer:**

```javascript
function log(target, name, descriptor) {
  // Modify descriptor
  return descriptor;
}

class Example {
  @log
  method() {}
}
```

### 71. How do you implement memoization?

**Answer:**

```javascript
function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    return cache.has(key) ? cache.get(key) : cache.set(key, fn(...args)).get(key);
  };
}
```

### 72. Explain async iteration

**Answer:**

```javascript
async function* asyncGenerator() {
  yield await Promise.resolve(1);
}

for await (const value of asyncGenerator()) {
  console.log(value);
}
```

## Angular Performance

### 73. How do you implement virtual scrolling?

**Answer:**

```typescript
// Template
<cdk-virtual-scroll-viewport itemSize="50">
  <div *cdkVirtualFor="let item of items">{{item}}</div>
</cdk-virtual-scroll-viewport>
```

### 74. Explain Zone.js and NgZone

**Answer:**

```typescript
constructor(private ngZone: NgZone) {
  ngZone.runOutsideAngular(() => {
    // Heavy computation
  });
}
```

### 75. How do you implement lazy images?

**Answer:**

```typescript
// Template
<img loading="lazy" [src]="imageUrl" />

// Or with Intersection Observer
@Directive({
  selector: '[lazyLoad]'
})
export class LazyLoadDirective {
  @Input() lazyLoad: string;
}
```

### 76. Explain Angular's Ahead-of-Time compilation

**Answer:** AOT compilation:

- Compiles templates during build
- Catches template errors early
- Reduces bundle size
- Improves security

### 77. How do you implement route preloading?

**Answer:**

```typescript
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ]
})
```

## Node.js Security

### 78. How do you implement CORS in Express?

**Answer:**

```javascript
const cors = require('cors');
app.use(cors({
  origin: 'https://example.com'
}));
```

### 79. Explain security headers in Express

**Answer:**

```javascript
const helmet = require('helmet');
app.use(helmet());
```

### 80. How do you prevent NoSQL injection?

**Answer:**

```javascript
// Validate and sanitize inputs
const sanitizedQuery = { username: escape(username) };
db.users.find(sanitizedQuery);
```

### 81. Explain content security policy

**Answer:**

```javascript
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"]
  }
}));
```

## MongoDB Performance

### 82. How do you optimize MongoDB queries?

**Answer:**

```javascript
// Use proper indexes
db.collection.createIndex({ field: 1 });

// Use projection
db.collection.find({}, { neededField: 1 });
```

### 83. Explain MongoDB index types

**Answer:**

- Single field
- Compound
- Multikey
- Text
- Geospatial
  
  ```javascript
  // Example compound index
  db.collection.createIndex({ field1: 1, field2: -1 });
  ```

### 84. How do you monitor MongoDB performance?

**Answer:**

```javascript
// Get query execution stats
db.collection.find().explain("executionStats");
```

### 85. Explain MongoDB capped collections

**Answer:**

```javascript
db.createCollection("logs", {
  capped: true,
  size: 1000000,
  max: 1000
});
```

## Testing

### 86. How do you write unit tests in Angular?

**Answer:**

```typescript
describe('Component', () => {
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

### 87. Explain E2E testing with Cypress

**Answer:**

```javascript
describe('Login', () => {
  it('should login successfully', () => {
    cy.visit('/login');
    cy.get('input[name="email"]').type('user@example.com');
  });
});
```

### 88. How do you test Express APIs?

**Answer:**

```javascript
const request = require('supertest');
describe('API', () => {
  it('GET /users', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
  });
});
```

### 89. Explain mocking in tests

**Answer:**

```typescript
// Mock service
const mockService = {
  getData: jest.fn().mockResolvedValue(['data'])
};
```

### 90. How do you test MongoDB operations?

**Answer:**

```javascript
describe('MongoDB', () => {
  beforeAll(async () => {
    await mongoose.connect(mongoUri);
  });
  it('should save document', async () => {
    const doc = new Model({});
    await doc.save();
  });
});
```

## Deployment & DevOps

### 91. Explain Docker deployment for MEAN stack

**Answer:**

```dockerfile
FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
```

### 92. How do you implement CI/CD pipeline?

**Answer:**

```yaml
# Basic GitHub Actions workflow
name: CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm test
```

### 93. Explain environment configuration

**Answer:**

```typescript
// Angular environment
export const environment = {
  production: true,
  apiUrl: process.env.API_URL
};
```

### 94. How do you implement logging?

**Answer:**

```javascript
const winston = require('winston');
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json()
});
```

### 95. Explain microservices architecture

**Answer:**

- Service discovery
- Load balancing
- API Gateway
- Message queues
  
  ```javascript
  // Basic service registration
  registry.register('service-name', 'http://localhost:3000');
  ```

### 96. How do you handle database migrations?

**Answer:**

```javascript
// Using mongoose-migrate
exports.up = function(next) {
  // Add new field
  next();
};
```

### 97. Explain caching strategies

**Answer:**

```javascript
// Redis caching example
const cache = await redis.get(key);
if (cache) return JSON.parse(cache);
```

### 98. How do you implement error tracking?

**Answer:**

```javascript
// Sentry integration
Sentry.init({ dsn: 'your-dsn' });
app.use(Sentry.Handlers.errorHandler());
```

### 99. Explain API versioning

**Answer:**

```javascript
// URL versioning
app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router);
```

### 100. How do you implement GraphQL with MEAN stack?

**Answer:**

```javascript
// Basic schema
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      user: {
        type: UserType,
        resolve: () => getUserData()
      }
    }
  })
});
```





## Advanced JavaScript & System Design

### 51. Explain JavaScript memory management and garbage collection. How would you handle memory leaks?

**Answer:** Memory management in JavaScript is automatic but understanding it is crucial for optimization.

```javascript
// Common memory leak scenarios and solutions:

// 1. Accidental global variables
function leakyFunction() {
    leakedVariable = 'I am leaked'; // Missing 'let' or 'const'
}

// 2. Forgotten timers
class LeakyComponent {
    constructor() {
        this.data = new Array(10000);
        setInterval(() => {
            this.processData();
        }, 1000);
    }
    // Missing clearInterval in cleanup
}

// Proper cleanup
class OptimizedComponent {
    constructor() {
        this.data = new Array(10000);
        this.timer = setInterval(() => {
            this.processData();
        }, 1000);
    }

    destroy() {
        clearInterval(this.timer);
        this.data = null;
    }
}

// 3. Closed over references in callbacks
class EventEmitterExample {
    constructor() {
        this.listeners = new Map();
    }

    addEventListener(event, callback) {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, new Set());
        }
        this.listeners.get(event).add(callback);
    }

    removeEventListener(event, callback) {
        const listeners = this.listeners.get(event);
        if (listeners) {
            listeners.delete(callback);
            if (listeners.size === 0) {
                this.listeners.delete(event);
            }
        }
    }
}
```

### 52. Implement a throttle and debounce function. Explain the differences.

**Answer:**

```javascript
// Throttle: Executes at most once per specified time period
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Debounce: Executes only after specified time has passed since last call
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        const context = this;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    }
}

// Usage example
const expensiveOperation = () => console.log('Expensive operation');
const throttledOperation = throttle(expensiveOperation, 1000);
const debouncedOperation = debounce(expensiveOperation, 1000);

// Throttle will execute at most once per second
window.addEventListener('scroll', throttledOperation);

// Debounce will execute only after scrolling stops for 1 second
window.addEventListener('scroll', debouncedOperation);
```

### 53. Implement a deep clone function that handles complex objects including functions, RegExp, Date, etc.

**Answer:**

```javascript
function deepClone(obj, hash = new WeakMap()) {
    // Handle null and undefined
    if (obj === null || typeof obj !== 'object') 
        return obj;

    // Handle Date
    if (obj instanceof Date) 
        return new Date(obj.getTime());

    // Handle RegExp
    if (obj instanceof RegExp) 
        return new RegExp(obj.source, obj.flags);

    // Handle circular references
    if (hash.has(obj)) 
        return hash.get(obj);

    // Handle Arrays
    if (Array.isArray(obj)) {
        const cloneArr = [];
        hash.set(obj, cloneArr);
        obj.forEach((val, i) => {
            cloneArr[i] = deepClone(val, hash);
        });
        return cloneArr;
    }

    // Handle Functions
    if (typeof obj === 'function') {
        const cloneFunc = function(...args) {
            return obj.apply(this, args);
        };
        Object.assign(cloneFunc, obj);
        return cloneFunc;
    }

    // Handle Objects
    const cloneObj = Object.create(Object.getPrototypeOf(obj));
    hash.set(obj, cloneObj);

    Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, descriptor]) => {
        Object.defineProperty(cloneObj, key, {
            ...descriptor,
            value: descriptor.value ? deepClone(descriptor.value, hash) : descriptor.value
        });
    });

    return cloneObj;
}

// Test case
const complexObj = {
    date: new Date(),
    regexp: /test/g,
    func: function(x) { return x * 2; },
    nested: {
        array: [1, 2, { a: 3 }],
        map: new Map([['key', 'value']]),
        set: new Set([1, 2, 3])
    }
};

const cloned = deepClone(complexObj);
```

### 54. Implement a custom Promise implementation with all core features.

**Answer:**

```javascript
class MyPromise {
    constructor(executor) {
        this.status = 'pending';
        this.value = undefined;
        this.reason = undefined;
        this.thenCallbacks = [];
        this.catchCallbacks = [];

        const resolve = value => {
            if (this.status === 'pending') {
                this.status = 'fulfilled';
                this.value = value;
                this.thenCallbacks.forEach(callback => callback(value));
            }
        };

        const reject = reason => {
            if (this.status === 'pending') {
                this.status = 'rejected';
                this.reason = reason;
                this.catchCallbacks.forEach(callback => callback(reason));
            }
        };

        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            if (this.status === 'pending') {
                if (onFulfilled) {
                    this.thenCallbacks.push(value => {
                        try {
                            const result = onFulfilled(value);
                            result instanceof MyPromise 
                                ? result.then(resolve, reject)
                                : resolve(result);
                        } catch (error) {
                            reject(error);
                        }
                    });
                }

                if (onRejected) {
                    this.catchCallbacks.push(reason => {
                        try {
                            const result = onRejected(reason);
                            result instanceof MyPromise
                                ? result.then(resolve, reject)
                                : resolve(result);
                        } catch (error) {
                            reject(error);
                        }
                    });
                }
            }

            if (this.status === 'fulfilled' && onFulfilled) {
                try {
                    const result = onFulfilled(this.value);
                    result instanceof MyPromise
                        ? result.then(resolve, reject)
                        : resolve(result);
                } catch (error) {
                    reject(error);
                }
            }

            if (this.status === 'rejected' && onRejected) {
                try {
                    const result = onRejected(this.reason);
                    result instanceof MyPromise
                        ? result.then(resolve, reject)
                        : resolve(result);
                } catch (error) {
                    reject(error);
                }
            }
        });
    }

    catch(onRejected) {
        return this.then(null, onRejected);
    }

    static resolve(value) {
        return new MyPromise(resolve => resolve(value));
    }

    static reject(reason) {
        return new MyPromise((_, reject) => reject(reason));
    }

    static all(promises) {
        return new MyPromise((resolve, reject) => {
            const results = [];
            let completed = 0;

            promises.forEach((promise, index) => {
                promise.then(value => {
                    results[index] = value;
                    completed++;
                    if (completed === promises.length) {
                        resolve(results);
                    }
                }).catch(reject);
            });
        });
    }
}

// Usage example
const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success!');
    }, 1000);
});

promise
    .then(value => console.log(value))
    .catch(error => console.error(error));
```

### 55. Create a reactive state management system similar to Vue's reactivity.

**Answer:**

```javascript
// Dependency tracking
class Dep {
    constructor() {
        this.subscribers = new Set();
    }

    depend() {
        if (activeEffect) {
            this.subscribers.add(activeEffect);
        }
    }

    notify() {
        this.subscribers.forEach(effect => effect());
    }
}

let activeEffect = null;

function watchEffect(effect) {
    activeEffect = effect;
    effect();
    activeEffect = null;
}

// Reactive state
function reactive(obj) {
    const deps = new Map();

    function getDep(key) {
        if (!deps.has(key)) {
            deps.set(key, new Dep());
        }
        return deps.get(key);
    }

    return new Proxy(obj, {
        get(target, key) {
            const dep = getDep(key);
            dep.depend();
            return target[key];
        },

        set(target, key, value) {
            const dep = getDep(key);
            target[key] = value;
            dep.notify();
            return true;
        }
    });
}

// Usage example
const state = reactive({
    count: 0,
    text: 'Hello'
});

watchEffect(() => {
    console.log(`Count is: ${state.count}`);
});

watchEffect(() => {
    console.log(`Text is: ${state.text}`);
});

// Updates will trigger relevant effects
state.count++; // Logs: "Count is: 1"
state.text = 'World'; // Logs: "Text is: World"
```

### 56. Implement a comprehensive Angular authentication system with route guards and JWT refresh.

**Answer:**

```typescript
// auth.service.ts
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private currentUserSubject = new BehaviorSubject<User>(null);
    currentUser$ = this.currentUserSubject.asObservable();

    private refreshTokenTimeout: any;
    
    constructor(
        private http: HttpClient,
        private router: Router
    ) {
        this.initializeFromStorage();
    }
    
    private initializeFromStorage() {
        const token = localStorage.getItem('token');
        const refreshToken = localStorage.getItem('refreshToken');
        if (token && refreshToken) {
            const user = this.decodeToken(token);
            this.currentUserSubject.next(user);
            this.startRefreshTokenTimer();
        }
    }
    
    login(credentials: {email: string; password: string}) {
        return this.http.post<AuthResponse>('/api/login', credentials)
            .pipe(
                map(response => {
                    const user = this.decodeToken(response.token);
                    this.currentUserSubject.next(user);
                    this.storeTokens(response.token, response.refreshToken);
                    this.startRefreshTokenTimer();
                    return user;
                })
            );
    }
    
    logout() {
        this.http.post('/api/logout', {})
            .pipe(
                finalize(() => {
                    this.clearTokens();
                    this.currentUserSubject.next(null);
                    this.stopRefreshTokenTimer();
                    this.router.navigate(['/login']);
                })
            ).subscribe();
    }
    
    refreshToken() {
        const refreshToken = localStorage.getItem('refreshToken');
        return this.http.post<AuthResponse>('/api/refresh-token', { refreshToken })
            .pipe(
                map(response => {
                    const user = this.decodeToken(response.token);
                    this.currentUserSubject.next(user);
                    this.storeTokens(response.token, response.refreshToken);
                    this.startRefreshTokenTimer();
                    return user;
                })
            );
    }
    
    private decodeToken(token: string): User {
        const decoded = jwt_decode(token);
        return {
            id: decoded.sub,
            email: decoded.email,
            roles: decoded.roles
        };
    }
    
    private storeTokens(token: string, refreshToken: string) {
        localStorage.setItem('token', token);
        localStorage.setItem('refreshToken', refreshToken);
    }
    
    private clearTokens() {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
    }
    
    private startRefreshTokenTimer() {
        const token = localStorage.getItem('token');
        const decoded = jwt_decode(token);
        const expires = new Date(decoded.exp * 1000);
        const timeout = expires.getTime() - Date.now() - (60 * 1000);
        this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
    }
    
    private stopRefreshTokenTimer() {
        clearTimeout(this.refreshTokenTimeout);
    }

}

// auth.guard.ts
@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private auth: AuthService
    ) {}

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        return this.auth.currentUser$.pipe(
            map(user => {
                if (!user) {
                    this.router.navigate(['/login']);
                    return false;
                }
    
                const requiredRoles = route.data.roles;
                if (requiredRoles && !requiredRoles.some(role => user.roles.includes(role))) {
                    this.router.navigate(['/unauthorized']);
                    return false;
                }
    
                return true;
            })
        );
    }

}

// auth.interceptor.ts
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');
    
        if (token) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
    
        return next.handle(req).pipe(
            catchError(error => {
                if (error instanceof HttpErrorResponse && error.status === 401) {
                    return this.handle401Error(req, next);
                }
                return throwError(() => error);
            })
        );
    }
    
    private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
        return this.auth.refreshToken().pipe(
            switchMap(() => {
                const token = localStorage.getItem('token');
                return next.handle(request.clone({
    
    
    

## Advanced JavaScript Concepts

### 100. Explain JavaScript decorators and their use cases.

**Answer:** Decorators are special kinds of declarations that can be applied to classes, methods, or properties.

```typescript
// Method decorator
function log(target, key, descriptor) {
    // Store original method
    const original = descriptor.value;
    descriptor.value = function(...args) {
        console.log(`Calling ${key} with`, args);
        return original.apply(this, args);
    };
    return descriptor;
}

class Example {
    @log
    greet(name: string) {
        return `Hello, ${name}`;
    }
}
```

### 101. How does the JavaScript garbage collector work?

**Answer:** JavaScript uses mark-and-sweep algorithm:

1. Marks objects that are reachable from root
2. Sweeps and collects unmarked objects
3. Key concept: reference-counting for memory management

### 102. Explain Web Workers and their use cases.

**Answer:**

```javascript
// Main thread
const worker = new Worker('worker.js');
worker.postMessage({ data: complexData });
worker.onmessage = ({ data }) => console.log('Result:', data);

// worker.js
self.onmessage = ({ data }) => {
    const result = performHeavyCalculation(data);
    self.postMessage(result);
};
```

### 103. What are WeakMap and WeakSet?

**Answer:** They hold weak references to objects, allowing garbage collection:

```javascript
const weakMap = new WeakMap();
let obj = { data: 'value' };
weakMap.set(obj, 'metadata');
obj = null; // object can be garbage collected
```

## Advanced Angular Concepts

### 104. How do you implement custom form validators in Angular?

**Answer:**

```typescript
function customValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const valid = /pattern/.test(control.value);
        return valid ? null : {'custom': true};
    };
}
```

### 105. Explain Angular's Dependency Injection system.

**Answer:** Multiple levels of injector hierarchy:

- ModuleInjector hierarchy (platform > root > feature)
- ElementInjector hierarchy (follows DOM)
  
  ```typescript
  @Injectable({
    providedIn: 'root',
    useFactory: (config: Config) => new Service(config),
    deps: [Config]
  })
  ```

### 106. How do you implement custom change detection strategy?

**Answer:**

```typescript
@Component({
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptimizedComponent {
    constructor(private cd: ChangeDetectorRef) {
        this.cd.detach(); // Manual control
        this.cd.detectChanges(); // Trigger when needed
    }
}
```

### 107. Explain Angular's Zone.js and NgZone.

**Answer:**

```typescript
constructor(private ngZone: NgZone) {
    ngZone.runOutsideAngular(() => {
        // Performance-critical code
    });

    ngZone.run(() => {
        // Code that needs change detection
    });
}
```

### 108. How do you implement custom directives with multiple structural conditions?

**Answer:**

```typescript
@Directive({
    selector: '[customIf]'
})
export class CustomIfDirective {
    @Input() set customIf(condition: boolean) {
        this.viewContainer.clear();
        if (condition) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
    }
}
```

## Advanced Node.js & Express Concepts

### 109. Explain Node.js Streams and their types.

**Answer:**

```javascript
const readable = new Readable({
    read(size) {
        this.push(chunk);
        this.push(null);
    }
});

const writable = new Writable({
    write(chunk, encoding, callback) {
        console.log(chunk);
        callback();
    }
});
```

### 110. How do you implement custom middleware in Express?

**Answer:**

```javascript
const customMiddleware = (req, res, next) => {
    if (condition) {
        next();
    } else {
        res.status(403).send('Forbidden');
    }
};
```

### 111. Explain Node.js clustering.

**Answer:**

```javascript
if (cluster.isMaster) {
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
} else {
    app.listen(3000);
}
```

### 112. How do you implement rate limiting in Express?

**Answer:**

```javascript
const rateLimit = {
    windowMs: 15 * 60 * 1000,
    max: 100,
    handler: (req, res) => {
        res.status(429).send('Too many requests');
    }
};
```

### 113. Explain Node.js event loop phases.

**Answer:**

1. Timers (setTimeout/setInterval)
2. Pending callbacks
3. Idle, prepare
4. Poll (I/O)
5. Check (setImmediate)
6. Close callbacks

## Advanced MongoDB Concepts

### 114. How do you implement database versioning in MongoDB?

**Answer:**

```javascript
{
    _id: ObjectId("..."),
    data: { /* current state */ },
    version: 2,
    history: [
        { version: 1, data: { /* old state */ }, timestamp: ISODate("...") }
    ]
}
```

### 115. Explain MongoDB's $graphLookup.

**Answer:**

```javascript
{
    $graphLookup: {
        from: "employees",
        startWith: "$managerId",
        connectFromField: "managerId",
        connectToField: "_id",
        as: "reportingHierarchy"
    }
}
```

### 116. How do you implement capped collections?

**Answer:**

```javascript
db.createCollection("logs", {
    capped: true,
    size: 1000000,
    max: 1000
});
```

### 117. Explain MongoDB's read concerns and write concerns.

**Answer:**

```javascript
db.collection.find().readConcern("majority");
db.collection.insertOne({}, { writeConcern: { w: "majority" } });
```

## Security Considerations

### 118. How do you prevent XSS attacks in Angular?

**Answer:**

```typescript
// Use DomSanitizer for trusted HTML
import { DomSanitizer } from '@angular/platform-browser';
constructor(private sanitizer: DomSanitizer) {
    this.trustedHtml = this.sanitizer.bypassSecurityTrustHtml(html);
}
```

### 119. How do you implement JWT authentication in Express?

**Answer:**

```javascript
const jwt = require('jsonwebtoken');
const token = jwt.sign({ userId: user._id }, 'secret', { expiresIn: '1h' });
```

### 120. Explain MongoDB injection prevention.

**Answer:**

```javascript
// Use mongoose schema validation
const schema = new Schema({
    username: { 
        type: String, 
        validate: /^[a-zA-Z0-9]+$/
    }
});
```

## Performance Optimization

### 121. How do you optimize Angular bundle size?

**Answer:**

- Use lazy loading
- Enable production mode
- Use tree-shaking
- Implement code splitting
  
  ```typescript
  const routes = [{
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
  }];
  ```

### 122. Explain Node.js performance monitoring.

**Answer:**

```javascript
const profiler = require('v8-profiler-node8');
const snapshot = profiler.takeSnapshot();
snapshot.export();
```

### 123. How do you optimize MongoDB queries?

**Answer:**

```javascript
db.collection.find().explain("executionStats")
db.collection.createIndex({ field: 1 })
```

## Testing

### 124. How do you implement unit tests in Angular?

**Answer:**

```typescript
describe('Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [Component],
            providers: [{ provide: Service, useValue: mockService }]
        });
    });

    it('should work', () => {
        expect(component).toBeTruthy();
    });
});
```

### 125. Explain API testing in Express.

**Answer:**

```javascript
const request = require('supertest');
describe('GET /api', () => {
    it('responds with json', done => {
        request(app)
            .get('/api')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
```

### 126. How do you test MongoDB operations?

**Answer:**

```javascript
describe('Database', () => {
    beforeAll(async () => {
        await mongoose.connect(mongoUri);
    });

    it('should create document', async () => {
        const result = await Collection.create(data);
        expect(result).toBeDefined();
    });
});
```

## Error Handling

### 127. Implement global error handling in Angular.

**Answer:**

```typescript
@Injectable()
class GlobalErrorHandler implements ErrorHandler {
    handleError(error: Error) {
        console.error(error);
        // Log to service
    }
}
```

### 128. How do you handle errors in Express middleware?

**Answer:**

```javascript
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        message: error.message
    });
});
```

### 129. Explain MongoDB error handling best practices.

**Answer:**

```javascript
try {
    await collection.insertOne(doc);
} catch (e) {
    if (e.code === 11000) {
        // Handle duplicate key
    }
    throw e;
}
```

## Advanced Integration

### 130. How do you implement real-time features using Angular and Socket.io?

**Answer:**

```typescript
@Injectable()
class SocketService {
    socket = io('server-url');

    emit(event: string, data: any) {
        this.socket.emit(event, data);
    }

    on(event: string): Observable<any> {
        return new Observable(observer => {
            this.socket.on(event, data => observer.next(data));
        });
    }
}
```

### 131. Explain file uploads with Express and MongoDB GridFS.

**Answer:**

```javascript
const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => ({
        filename: file.originalname,
        bucketName: 'uploads'
    })
});
```

### 132. How do you implement caching in the MEAN stack?

**Answer:**

```typescript
// Angular service caching
@Injectable()
class CacheService {
    private cache = new Map<string, any>();

    get(key: string): any {
        return this.cache.get(key);
    }

    set(key: string, value: any): void {
        this.cache.set(key, value);
    }
}
```

## Deployment & DevOps

### 133. Explain Docker configuration for MEAN stack.

**Answer:**

```dockerfile
FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

### 134. How do you implement CI/CD for Angular applications?

**Answer:**

```yaml
build:
  script:
    - npm install
    - ng build --prod
  artifacts:
    paths:
      - dist/
```

### 135. Explain MongoDB replication setup.

**Answer:**

```javascript
rs.initiate({
    _id: "replicaSet",
    members: [
        { _id: 0, host: "mongodb0:27017" },
        { _id: 1, host: "mongodb1:27017" }
    ]
});
```

## Miscellaneous Advanced Topics

### 136. Implement server-side rendering in Angular.

**Answer:**

```typescript
@NgModule({
    imports: [
        ServerModule,
        AppModule,
        ServerTransferStateModule
    ],
    bootstrap: [AppComponent]
})
export class AppServerModule {}
```

### 137. How do you implement GraphQL with Express?

**Answer:**

```javascript
const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            user: {
                type: UserType,
                resolve: (parent, args) => findUser(args.id)
            }
        }
    })
});
```

### 138. Explain MongoDB change streams with Node.js.

**Answer:**

```javascript
collection.watch().on('change', change => {
    console.log('Change detected:', change);
});
```

### 139. How do you implement microservices with Node.js?

**Answer:**

```javascript
// Service registry
const registry = new Map();
const register = (name, instance) => registry.set(name, instance);
const discover = name => registry.get(name);
```

### 140. Explain Angular elements (Custom Elements).

**Answer:**

```typescript
@Injectable()
class WebComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
}
customElements.define('custom-element', WebComponent);
```

### 141. How do you implement pagination in MongoDB?

**Answer:**

```javascript
const page = parseInt(req.query.page) || 1;
const limit = parseInt(req.query.limit) || 10;
const skip = (page - 1) * limit;
const results = await Collection.find().skip(skip).limit(limit);
```

### 142. Explain Angular's Ivy renderer.

**Answer:**

- Tree-shakable
- Improved debugging
- Faster compilation
- Better template type checking

### 143. How do you implement websocket security?

**Answer:**

```javascript
io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    if (validateToken(token)) next();
    else next(new Error('Authentication error'));
});
```

### 144. Explain MongoDB aggregation optimization.

**Answer:**

```javascript
db.collection.aggregate([
    { $match: { /* early filter */ } },
    { $limit: 100 },
    { $project: { /* only needed fields */ } }
]);
```

### 145. How do you implement service workers in Angular?

**Answer:**

```typescript
@NgModule({
    imports: [
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production
        })
    ]
})
```

### 146. Explain Node.js memory leaks detection.

**Answer:**

```javascript
const heapUsed = process.memoryUsage().heapUsed;
console.log(`Memory: ${Math.round(heapUsed / 1024 / 1024)} MB`);
```

### 147. How do you implement database migrations?

**Answer:**

```javascript
const migration = {
    up: async () => {
        await db.collection.updateMany(
            { oldField: { $exists: true } },
            { $rename: { 'oldField': 'newField' } }
        );
    }
};
```

### 148. Explain Angular's defer loading.

**Answer:**

```typescript
@Component({
    template: `
        @defer {
            <heavy-component />
        } @loading {
            Loading...
        }
    `
})
```

### 149. How do you implement rate limiting in MongoDB?

**Answer:**

### 149. How do you implement server-side rendering (SSR) with Angular Universal?

**Answer:** 

```typescript
// app.server.module.ts
@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}

// server.ts
const app = express();
app.get('*', (req, res) => {
  res.render('index', { req, providers: [
    { provide: APP_BASE_HREF, useValue: req.baseUrl }
  ]});
});
```

### 150. Explain event bubbling and capturing in JavaScript.

**Answer:**

```javascript
// Capturing phase (true parameter)
element.addEventListener('click', handler, true);

// Bubbling phase (default)
element.addEventListener('click', handler);

// Stop propagation
event.stopPropagation();
```

### 151. How do you implement real-time features using MongoDB Change Streams and WebSockets?

**Answer:**

```javascript
// MongoDB change stream
const changeStream = collection.watch();
changeStream.on('change', change => {
  // Emit to connected WebSocket clients
  ws.clients.forEach(client => 
    client.send(JSON.stringify(change))
  );
});
```

### 152. Implement a custom Angular structural directive.

**Answer:**

```typescript
@Directive({
  selector: '[appRepeat]'
})
export class RepeatDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appRepeatTimes(times: number) {
    this.viewContainer.clear();
    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
```

### 153. How do you implement database transactions across multiple MongoDB collections?

**Answer:**

```javascript
const session = client.startSession();
try {
  session.startTransaction();
  await collection1.updateOne({}, {$set: {status: 'processed'}}, {session});
  await collection2.insertOne({log: 'processed'}, {session});
  await session.commitTransaction();
} catch (error) {
  await session.abortTransaction();
}
```

### 154. Explain Angular's Dependency Injection system with multi-providers.

**Answer:**

```typescript
// Token definition
InjectionToken<string[]> TOKEN = 
  new InjectionToken<string[]>('token');

// Providers
{ provide: TOKEN, useValue: ['value1'], multi: true },
{ provide: TOKEN, useValue: ['value2'], multi: true }

// Injection
constructor(@Inject(TOKEN) values: string[][])
```

### 155. Implement a custom MongoDB aggregation pipeline operator.

**Answer:**

```javascript
db.collection.aggregate([
  {
    $addFields: {
      customField: {
        $function: {
          body: function(value) { return value * 2; },
          args: ["$originalField"],
          lang: "js"
        }
      }
    }
  }
]);
```

### 156. How do you handle memory leaks in Node.js applications?

**Answer:**

```javascript
// Memory leak prevention
const WeakMap = require('weak-map');
const cache = new WeakMap();

// Event listener cleanup
let listener = () => {};
element.addEventListener('event', listener);
element.removeEventListener('event', listener);
listener = null;
```

### 157. Implement a custom Angular validator with async validation.

**Answer:**

```typescript
@Injectable()
export class UniqueValidator {
  validate(control: AbstractControl): Promise<ValidationErrors | null> {
    return this.userService.checkUnique(control.value)
      .pipe(
        map(isUnique => isUnique ? null : {unique: true}),
        first()
      ).toPromise();
  }
}
```

### 158. Explain MongoDB's aggregation pipeline optimization techniques.

**Answer:**

```javascript
// Optimized pipeline
db.collection.aggregate([
  { $match: { status: "active" } },  // Early filtering
  { $project: { needed: 1 } },       // Reduce working set
  { $sort: { score: -1 } },         // Use index
  { $limit: 100 }                    // Limit results early
]);
```

### 159. How do you implement JWT authentication in Node.js with refresh tokens?

**Answer:**

```javascript
const token = jwt.sign({ userId }, secret, { expiresIn: '15m' });
const refreshToken = jwt.sign({ userId }, refreshSecret, { expiresIn: '7d' });

// Refresh endpoint
app.post('/refresh', verifyRefreshToken, (req, res) => {
  const newToken = jwt.sign({ userId: req.user.id }, secret, { expiresIn: '15m' });
  res.json({ token: newToken });
});
```

### 160. Implement a custom Angular pipe for complex data transformation.

**Answer:**

```typescript
@Pipe({
  name: 'complexTransform',
  pure: true
})
export class ComplexTransformPipe implements PipeTransform {
  transform(value: any[], criteria: string): any[] {
    return value.reduce((acc, item) => {
      // Complex transformation logic
      return [...acc, transformed];
    }, []);
  }
}
```

### 161. How do you implement rate limiting in Node.js?

**Answer:**

```javascript
const rateLimit = require('express-rate-limit');
app.use('/api/', rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  handler: (req, res) => {
    res.status(429).json({error: 'Too many requests'});
  }
}));
```

### 162. Explain MongoDB's geospatial queries and indexing.

**Answer:**

```javascript
// Create 2dsphere index
db.places.createIndex({ location: "2dsphere" });

// Find nearby locations
db.places.find({
  location: {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [ -73.9667, 40.78 ]
      },
      $maxDistance: 5000
    }
  }
});
```

### 163. How do you implement infinite scrolling in Angular?

**Answer:**

```typescript
@Component({
  template: `
    <div #scrollContainer (scroll)="onScroll($event)">
      <div *ngFor="let item of items">{{item}}</div>
    </div>`
})
export class Component {
  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if (this.isNearBottom()) {
      this.loadMore();
    }
  }
}
```

### 164. Implement a custom error handling strategy in Angular.

**Answer:**

```typescript
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: Error) {
    // Custom error handling logic
    console.error(error);
    // Report to monitoring service
  }
}
```

### 165. How do you optimize MongoDB queries for large datasets?

**Answer:**

```javascript
// Use covered queries
db.collection.find(
  { status: "active" },
  { _id: 0, status: 1 }
).hint({ status: 1 });

// Use projection
db.collection.find({}, { neededField: 1 });
```

### 166. Implement WebSocket integration in Angular.

**Answer:**

```typescript
@Injectable()
export class WebSocketService {
  private socket: WebSocket;

  connect(): Observable<any> {
    this.socket = new WebSocket(URL);
    return new Observable(observer => {
      this.socket.onmessage = event => observer.next(event.data);
    });
  }
}
```

### 167. How do you implement caching in Node.js?

**Answer:**

```javascript
const cache = new Map();

function cachingMiddleware(req, res, next) {
  const key = req.url;
  if (cache.has(key)) {
    return res.json(cache.get(key));
  }
  res.originalJson = res.json;
  res.json = body => {
    cache.set(key, body);
    res.originalJson(body);
  };
  next();
}
```

### 168. Explain Angular's zone.js and how to run code outside Angular's zone.

**Answer:**

```typescript
constructor(private ngZone: NgZone) {
  ngZone.runOutsideAngular(() => {
    // Code that shouldn't trigger change detection
  });

  ngZone.run(() => {
    // Code that should trigger change detection
  });
}
```

### 169. Implement MongoDB's text search with weights.

**Answer:**

```javascript
db.articles.createIndex({
  title: "text",
  content: "text"
}, {
  weights: {
    title: 10,
    content: 5
  }
});
```

### 170. How do you implement file uploads in Node.js with progress tracking?

**Answer:**

```javascript
const upload = multer({
  storage: multer.diskStorage({}),
  limits: { fileSize: 10 * 1024 * 1024 },
}).single('file');

req.on('progress', (progress) => {
  const percent = (progress.loaded / progress.total) * 100;
  // Emit progress via WebSocket
});
```

### 171. Implement a custom Angular router guard with multiple conditions.

**Answer:**

```typescript
@Injectable()
export class ComplexGuard implements CanActivate {
  canActivate(): Observable<boolean> {
    return combineLatest([
      this.authService.isAuthenticated(),
      this.permissionService.hasAccess()
    ]).pipe(
      map(([isAuth, hasAccess]) => isAuth && hasAccess)
    );
  }
}
```

### 172. How do you implement server-side pagination in MongoDB?

**Answer:**

```javascript
const page = parseInt(req.query.page) || 1;
const limit = parseInt(req.query.limit) || 10;
const skip = (page - 1) * limit;

const results = await collection
  .find({})
  .skip(skip)
  .limit(limit)
  .toArray();
```

### 173. Implement a custom Angular decorator for method timing.

**Answer:**

```typescript
function Measure() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      const start = performance.now();
      const result = await original.apply(this, args);
      const end = performance.now();
      console.log(`${propertyKey} took ${end - start}ms`);
      return result;
    };
  };
}
```

### 174. How do you implement bulk operations in MongoDB?

**Answer:**

```javascript
const bulk = collection.initializeUnorderedBulkOp();
documents.forEach(doc => {
  bulk.insert(doc);
});
await bulk.execute();
```

### 175. Implement a custom Angular change detection strategy.

**Answer:**

```typescript
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Component {
  constructor(private cd: ChangeDetectorRef) {
    this.someStream$.pipe(
      tap(() => this.cd.markForCheck())
    ).subscribe();
  }
}
```

### 176. How do you implement database sharding in MongoDB?

**Answer:**

```javascript
// Enable sharding
sh.enableSharding("database");

// Shard collection
sh.shardCollection(
  "database.collection",
  { shardKey: "hashed" }
);
```

### 177. Implement a custom HTTP interceptor for caching in Angular.

**Answer:**

```typescript
@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.cache.has(req.url)) {
      return of(new HttpResponse({ body: this.cache.get(req.url) }));
    }
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.cache.set(req.url, event.body);
        }
      })
    );
  }
}
```

### 178. How do you implement real-time analytics with MongoDB?

**Answer:**

```javascript
const pipeline = [
  { $match: { operationType: "insert" } },
  { $group: { _id: "$fullDocument.category", count: { $sum: 1 } } }
];
collection.watch(pipeline).on('change', data => {
  // Update analytics in real-time
});
```

### 179. Implement custom error boundaries in Angular.

**Answer:**

```typescript
@Component({
  template: `
    <ng-container *ngIf="!error; else errorTpl">
      <ng-content></ng-content>
    </ng-container>
    <ng-template #errorTpl>
      Error occurred: {{error?.message}}
    </ng-template>
  `
})
export class ErrorBoundaryComponent implements OnError {
  error: Error | null = null;
  handleError(error: Error) {
    this.error = error;
  }
}
```

### 180. How do you implement database migrations in MongoDB?

**Answer:**

```javascript
async function migrate() {
  const session = await db.startSession();
  try {
    await session.withTransaction(async () => {
      await db.collection.updateMany(
        {},
        { $rename: { "oldField": "newField" } }
      );
    });
  } finally {
    session.endSession();
  }
}
```

### 181-200. Integration and Advanced Scenarios

[These questions focus on integrating multiple technologies and advanced scenarios. They're typically asked as discussion questions without specific code implementations.]

181. How would you architect a real-time dashboard using Angular, Node.js, and MongoDB?
182. Explain strategies for handling microservices authentication across Node.js services.
183. How would you implement CQRS pattern using MongoDB and Node.js?
184. Describe approaches for handling distributed transactions across microservices.
185. How would you implement event sourcing with MongoDB?
186. Explain strategies for handling eventual consistency in distributed systems.
187. How would you implement a notification system using WebSockets and MongoDB?
188. Describe approaches for implementing a job queue system with Node.js and MongoDB.
189. How would you handle service discovery in a microservices architecture?
190. Explain strategies for implementing circuit breakers in Node.js microservices.
191. How would you implement rate limiting across distributed services?
192. Describe approaches for handling concurrent updates in MongoDB.
193. How would you implement a distributed caching system?
194. Explain strategies for handling database failover scenarios.
195. How would you implement a scalable search functionality?
196. Describe approaches for handling long-running transactions.
197. How would you implement a distributed logging system?
198. Explain strategies for handling API versioning.
199. How would you implement feature flags across services?
200. Describe approaches for handling system-wide configuration management.
