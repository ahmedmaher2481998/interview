# Technical Interview Multiple Choice Questions - Part 1

## JavaScript Fundamentals and Core Concepts

1. What is the output of: `console.log(typeof typeof 1)`?
   a) "number"
   b) "string"
   c) "undefined"
   d) "object"
   Answer: b) "string" 
   Explanation: First typeof 1 returns "number", then typeof "number" returns "string"

2. In JavaScript, what is hoisting?
   a) Moving all declarations to the top of the current scope
   b) Moving all assignments to the top of the current scope
   c) Moving all function calls to the top of the current scope
   d) Moving all variables to the global scope
   Answer: a) Moving all declarations to the top of the current scope
   Explanation: Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.

3. What is the output of: `console.log([] == ![])`?
   a) true
   b) false
   c) undefined
   d) TypeError
   Answer: a) true
   Explanation: Due to type coercion, [] becomes 0 and ![] becomes false which becomes 0

4. What is closure in JavaScript?
   a) A way to protect variables from being modified
   b) A function that has access to variables in its outer scope
   c) A way to close browser windows
   d) A method to end loops
   Answer: b) A function that has access to variables in its outer scope
   Explanation: Closure is when a function retains access to its outer scope even after the outer function has returned

5. Which of the following is true about `let` and `var`?
   a) let has block scope while var has function scope
   b) var can be redeclared while let cannot
   c) Both a and b
   d) Neither a nor b
   Answer: c) Both a and b
   Explanation: let has block scope and cannot be redeclared, while var has function scope and can be redeclared

6. What is the output of: `console.log(0.1 + 0.2 === 0.3)`?
   a) true
   b) false
   c) undefined
   d) error
   Answer: b) false
   Explanation: Due to floating-point precision in JavaScript, 0.1 + 0.2 is actually 0.30000000000000004

7. What is the event loop in JavaScript?
   a) A mechanism to handle asynchronous operations
   b) A loop that runs continuously checking for events
   c) A way to handle DOM events
   d) A special type of for loop
   Answer: a) A mechanism to handle asynchronous operations
   Explanation: The event loop is how JavaScript handles asynchronous callbacks and promises

8. What does the `this` keyword refer to in an arrow function?
   a) The global object
   b) The object that defined the arrow function
   c) The parent function's this context
   d) undefined
   Answer: c) The parent function's this context
   Explanation: Arrow functions inherit 'this' from their enclosing scope

9. What is the purpose of `use strict`?
   a) To enforce stricter parsing and error handling
   b) To make code run faster
   c) To enable new JavaScript features
   d) To prevent memory leaks
   Answer: a) To enforce stricter parsing and error handling
   Explanation: Strict mode makes debugging easier by preventing silent errors

10. What is the output of: `console.log(typeof null)`?
    a) "null"
    b) "undefined"
    c) "object"
    d) "number"
    Answer: c) "object"
    Explanation: This is a known quirk in JavaScript, typeof null returns "object"

## React Fundamentals

11. What is the virtual DOM in React?
    a) A lightweight copy of the actual DOM
    b) A new web browser feature
    c) A type of JavaScript engine
    d) A database storage system
    Answer: a) A lightweight copy of the actual DOM
    Explanation: Virtual DOM is a programming concept where an ideal representation of UI is kept in memory

12. What is the purpose of React hooks?
    a) To add state to functional components
    b) To create class components
    c) To modify the virtual DOM directly
    d) To handle browser events
    Answer: a) To add state to functional components
    Explanation: Hooks allow you to use state and other React features in functional components

13. Which hook should you use for side effects in React?
    a) useState
    b) useEffect
    c) useContext
    d) useReducer
    Answer: b) useEffect
    Explanation: useEffect is designed to handle side effects like data fetching and subscriptions

14. What is the purpose of the key prop in React lists?
    a) To style list items
    b) To help React identify which items have changed
    c) To make lists sortable
    d) To add event listeners
    Answer: b) To help React identify which items have changed
    Explanation: Keys help React track which items are added, changed, or removed in lists

15. What is prop drilling in React?
    a) A technique to optimize React performance
    b) Passing props through multiple levels of components
    c) A way to create holes in components
    d) A method to store data
    Answer: b) Passing props through multiple levels of components
    Explanation: Prop drilling occurs when props are passed through components that don't need them

## Database Concepts

16. What is ACID in database systems?
    a) A type of database
    b) A set of properties (Atomicity, Consistency, Isolation, Durability)
    c) A query language
    d) A backup strategy
    Answer: b) A set of properties (Atomicity, Consistency, Isolation, Durability)
    Explanation: ACID properties ensure reliable processing of database transactions

17. What is normalization in databases?
    a) A process of organizing data to reduce redundancy
    b) A method of encrypting data
    c) A backup process
    d) A way to index tables
    Answer: a) A process of organizing data to reduce redundancy
    Explanation: Normalization helps eliminate data redundancy and maintain data integrity

18. What is a foreign key?
    a) A key used for encryption
    b) A field that links two tables
    c) The primary key of a table
    d) A unique identifier
    Answer: b) A field that links two tables
    Explanation: A foreign key creates a link between two tables by referencing the primary key of another table

19. What is an index in a database?
    a) A list of contents
    b) A data structure that improves query speed
    c) A primary key
    d) A foreign key
    Answer: b) A data structure that improves query speed
    Explanation: Indexes improve query performance by providing quick access to rows in a table

20. What is a transaction in a database?
    a) A financial operation
    b) A unit of work that must be completed entirely
    c) A table join
    d) A backup process
    Answer: b) A unit of work that must be completed entirely
    Explanation: A transaction is a sequence of operations treated as a single unit of work

## Object-Oriented Programming

21. What is encapsulation in OOP?
    a) Bundling data and methods that operate on that data within a single unit
    b) Breaking down a program into small parts
    c) Hiding unnecessary details
    d) Creating multiple instances of a class
    Answer: a) Bundling data and methods that operate on that data within a single unit
    Explanation: Encapsulation combines data and related behaviors into one package while restricting access

22. What is inheritance in OOP?
    a) A mechanism to create multiple objects
    b) A mechanism where a class can inherit properties from another class
    c) A way to hide data
    d) A way to create interfaces
    Answer: b) A mechanism where a class can inherit properties from another class
    Explanation: Inheritance allows a class to inherit attributes and methods from another class

23. What is polymorphism in OOP?
    a) The ability of objects to take multiple forms
    b) The ability to create multiple objects
    c) The ability to hide data
    d) The ability to create interfaces
    Answer: a) The ability of objects to take multiple forms
    Explanation: Polymorphism allows objects to be treated as instances of their parent class

24. What is abstraction in OOP?
    a) Hiding complex implementation details and showing only necessary features
    b) Creating multiple instances of a class
    c) Inheriting from multiple classes
    d) Combining multiple classes
    Answer: a) Hiding complex implementation details and showing only necessary features
    Explanation: Abstraction reduces complexity by hiding unnecessary details

25. What is the difference between composition and inheritance?
    a) Composition is "has-a" relationship, inheritance is "is-a" relationship
    b) They are the same thing
    c) Composition is only for interfaces
    d) Inheritance is only for abstract classes
    Answer: a) Composition is "has-a" relationship, inheritance is "is-a" relationship
    Explanation: Composition represents ownership while inheritance represents type relationships

## Web Concepts

26. What is CORS?
    a) A security feature that restricts web page requests to other domains
    b) A CSS framework
    c) A JavaScript library
    d) A web server
    Answer: a) A security feature that restricts web page requests to other domains
    Explanation: CORS is a security mechanism that allows or restricts resource requests from other domains

27. What is the difference between GET and POST methods?
    a) GET requests can have a body, POST cannot
    b) POST requests can have a body, GET sends data in URL
    c) They are identical
    d) GET is faster than POST
    Answer: b) POST requests can have a body, GET sends data in URL
    Explanation: GET sends data as URL parameters, while POST sends data in the request body

28. What is a REST API?
    a) A programming language
    b) An architectural style for designing networked applications
    c) A database system
    d) A web browser
    Answer: b) An architectural style for designing networked applications
    Explanation: REST is an architectural style that uses HTTP methods to manipulate resources

29. What is HTTP caching?
    a) Storing files on the server
    b) Storing responses for future requests
    c) Compressing data
    d) Encrypting data
    Answer: b) Storing responses for future requests
    Explanation: HTTP caching stores and reuses previous responses to reduce server load and improve performance

30. What is the purpose of localStorage?
    a) To store data temporarily
    b) To store data permanently in the browser
    c) To store data on the server
    d) To store cookies
    Answer: b) To store data permanently in the browser
    Explanation: localStorage provides persistent storage in the browser across sessions

## Node.js

31. What is Node.js?
    a) A programming language
    b) A runtime environment for JavaScript
    c) A database
    d) A web browser
    Answer: b) A runtime environment for JavaScript
    Explanation: Node.js allows JavaScript to be run outside the browser, on the server side

32. What is the event-driven architecture in Node.js?
    a) A way to handle user interface events
    b) A programming pattern based on events and callbacks
    c) A type of database
    d) A security feature
    Answer: b) A programming pattern based on events and callbacks
    Explanation: Node.js uses events and callbacks to handle asynchronous operations efficiently

33. What is npm?
    a) Node Package Manager
    b) Node Programming Method
    c) New Programming Method
    d) Node Process Manager
    Answer: a) Node Package Manager
    Explanation: npm is the default package manager for Node.js

34. What is middleware in Express.js?
    a) Functions that have access to request and response objects
    b) A database connection
    c) A routing mechanism
    d) A security feature
    Answer: a) Functions that have access to request and response objects
    Explanation: Middleware functions can modify request and response objects or end the request-response cycle

35. What is the purpose of `package.json`?
    a) To store JavaScript code
    b) To manage project dependencies and scripts
    c) To store database configurations
    d) To manage server settings
    Answer: b) To manage project dependencies and scripts
    Explanation: package.json contains project metadata and manages dependencies

## Angular

36. What is Angular?
    a) A JavaScript library
    b) A full-featured JavaScript framework
    c) A database system
    d) A web server
    Answer: b) A full-featured JavaScript framework
    Explanation: Angular is a platform and framework for building single-page client applications

37. What are Angular decorators?
    a) CSS styles
    b) Metadata about a class
    c) JavaScript functions
    d) HTML templates
    Answer: b) Metadata about a class
    Explanation: Decorators provide configuration metadata for Angular classes

38. What is dependency injection in Angular?
    a) A design pattern where dependencies are provided to components
    b) A way to inject CSS styles
    c) A method to include JavaScript files
    d) A database connection pattern
    Answer: a) A design pattern where dependencies are provided to components
    Explanation: DI is a way to create and deliver dependent objects to classes

39. What is the purpose of NgModule?
    a) To define a module in JavaScript
    b) To group related components and services
    c) To create database schemas
    d) To handle routing
    Answer: b) To group related components and services
    Explanation: NgModule helps organize an application into cohesive blocks of functionality

40. What is the difference between one-way and two-way binding?
    a) One-way binding is faster
    b) Two-way binding updates both model and view
    c) They are the same
    d) Two-way binding is always better
    Answer: b) Two-way binding updates both model and view
    Explanation: One-way binding flows in one direction, while two-way binding synchronizes model and view

## More JavaScript

41. What is Promise in JavaScript?
    a) A proxy for a value that will be available in future
    b) A guarantee that a function will execute
    c) A way to store data
    d) A type of loop
    Answer: a) A proxy for a value that will be available in future
    Explanation: Promises represent values that may not be available immediately

42. What is the difference between null and undefined?
    a) They are identical
    b) null is assigned, undefined is default value
    c) undefined is more secure
    d) null is faster
    Answer: b) null is assigned, undefined is default value
    Explanation: undefined means a variable has been declared but not defined, null is an assigned value

43. What is the purpose of async/await?
    a) To make code run faster
    b) To handle promises more elegantly
    c) To create loops
    d) To define variables
    Answer: b) To handle promises more elegantly
    Explanation: async/await provides cleaner syntax for working with promises

44. What is the difference between map and forEach?
    a) map returns a new array, forEach doesn't
    b) forEach is faster
    c) map is only for numbers
    d) They are identical
    Answer: a) map returns a new array, forEach doesn't
    Explanation: map creates a new array with results, forEach just iterates

45. What is prototypal inheritance?
    a) Classical inheritance
    b) Objects inheriting from other objects
    c) Class-based inheritance
    d) Multiple inheritance
    Answer: b) Objects inheriting from other objects
    Explanation: JavaScript uses prototypal inheritance where objects inherit directly from other objects

## Web Security

46. What is XSS?
    a) A programming language
    b) A type of cross-site scripting attack
    c) A security protocol
    d) A database system
    Answer: b) A type of cross-site scripting attack
    Explanation: XSS allows attackers to inject client-side scripts into web pages

47. What is SQL injection?
    a) A way to optimize SQL queries
    b) A type of database attack
    c) A database design pattern
    d) A backup method
    Answer: b) A type of database attack
    Explanation: SQL injection is when malicious SQL code is inserted into queries

48. What is CSRF?
    a) A security token
    b) A cross-site request forgery attack
    c) A type of encryption
    d) A authentication method
    Answer: b) A cross-site request forgery attack
    Explanation: CSRF tricks users into executing unwanted actions on a different website

49. What is the same-origin policy?
    a) A security concept that restricts how documents/





# Technical Interview Multiple Choice Questions - Part 2

## Advanced JavaScript Concepts

51. What is the output of `Promise.all([1, Promise.resolve(2), Promise.reject(3)])`?
    a) [1, 2, 3]
    b) Rejection with value 3
    c) [1, 2, Error]
    d) Never resolves
    Answer: b) Rejection with value 3
    Explanation: Promise.all rejects immediately if any promise rejects

52. What is the difference between `let`, `const`, and `var`?
    a) They are all the same
    b) let and const are block-scoped, var is function-scoped
    c) const cannot be reassigned, let and var can
    d) Both b and c
    Answer: d) Both b and c
    Explanation: let/const are block-scoped, and const prevents reassignment

53. What is a generator function in JavaScript?
    a) A function that generates random numbers
    b) A function that can be paused and resumed
    c) A function that creates objects
    d) A function that generates arrays
    Answer: b) A function that can be paused and resumed
    Explanation: Generator functions use yield to pause and resume execution

## React Advanced Topics

54. What is the purpose of React.memo()?
    a) To memorize component data
    b) To prevent unnecessary re-renders
    c) To cache API responses
    d) To store global state
    Answer: b) To prevent unnecessary re-renders
    Explanation: React.memo is a higher-order component for performance optimization

55. What is the difference between controlled and uncontrolled components?
    a) Controlled components manage their own state
    b) Uncontrolled components manage their own state
    c) They are the same
    d) Neither manages state
    Answer: b) Uncontrolled components manage their own state
    Explanation: Controlled components have their state controlled by React

56. What is the purpose of useCallback?
    a) To memoize functions
    b) To create new functions
    c) To call functions automatically
    d) To store function results
    Answer: a) To memoize functions
    Explanation: useCallback returns a memoized version of the callback

57. What is React Suspense?
    a) A way to handle errors
    b) A way to handle loading states
    c) A state management solution
    d) A routing solution
    Answer: b) A way to handle loading states
    Explanation: Suspense lets components "wait" for something before rendering

58. What is the purpose of useMemo?
    a) To memoize values
    b) To memoize functions
    c) To create refs
    d) To manage state
    Answer: a) To memoize values
    Explanation: useMemo returns a memoized value to optimize performance

## Database Advanced Concepts

59. What is database sharding?
    a) Backing up a database
    b) Splitting a database across multiple machines
    c) Encrypting a database
    d) Optimizing queries
    Answer: b) Splitting a database across multiple machines
    Explanation: Sharding is partitioning data across multiple databases

60. What is a deadlock in databases?
    a) When a database crashes
    b) When two transactions wait for each other to release resources
    c) When queries are too slow
    d) When data is corrupted
    Answer: b) When two transactions wait for each other to release resources
    Explanation: Deadlock occurs when transactions are waiting for resources in a circular manner

61. What is database replication?
    a) Copying data to multiple locations
    b) Backing up data
    c) Encrypting data
    d) Compressing data
    Answer: a) Copying data to multiple locations
    Explanation: Replication maintains copies of data across multiple databases

62. What is eventual consistency?
    a) Data will never be consistent
    b) Data will be consistent immediately
    c) Data will become consistent over time
    d) Data is always consistent
    Answer: c) Data will become consistent over time
    Explanation: In distributed systems, data becomes consistent after some delay

## Advanced Node.js

63. What is clustering in Node.js?
    a) Running multiple instances of Node.js
    b) Grouping data together
    c) A database feature
    d) A security feature
    Answer: a) Running multiple instances of Node.js
    Explanation: Clustering allows running multiple Node.js processes to handle load

64. What is the Node.js Event Loop?
    a) A UI event handler
    b) A mechanism to handle asynchronous operations
    c) A type of database
    d) A security feature
    Answer: b) A mechanism to handle asynchronous operations
    Explanation: The Event Loop handles async operations and callbacks

65. What is Stream in Node.js?
    a) A way to handle video
    b) A way to handle data in chunks
    c) A database connection
    d) A security feature
    Answer: b) A way to handle data in chunks
    Explanation: Streams handle reading/writing data in chunks efficiently

66. What is the purpose of process.nextTick()?
    a) To schedule a task for the next iteration of the event loop
    b) To end the process
    c) To restart the process
    d) To pause the process
    Answer: a) To schedule a task for the next iteration of the event loop
    Explanation: process.nextTick defers execution until the next tick

## Angular Advanced

67. What is AOT compilation in Angular?
    a) A type of testing
    b) Ahead-of-Time compilation
    c) A build process
    d) A deployment strategy
    Answer: b) Ahead-of-Time compilation
    Explanation: AOT compiles templates during build instead of runtime

68. What are Angular pipes?
    a) Data transformation tools
    b) Network connections
    c) Security features
    d) Routing mechanisms
    Answer: a) Data transformation tools
    Explanation: Pipes transform displayed values in templates

69. What is lazy loading in Angular?
    a) Loading modules on demand
    b) Slow loading of pages
    c) Loading all modules at start
    d) A type of preloading
    Answer: a) Loading modules on demand
    Explanation: Lazy loading loads features when they're needed

70. What is the purpose of ViewChild?
    a) To access child components
    b) To create child components
    c) To style child components
    d) To delete child components
    Answer: a) To access child components
    Explanation: ViewChild provides access to child elements in components

## Web Performance

71. What is code splitting?
    a) Breaking code into smaller files
    b) Deleting unused code
    c) Combining code files
    d) Encrypting code
    Answer: a) Breaking code into smaller files
    Explanation: Code splitting breaks bundles into smaller chunks

72. What is tree shaking?
    a) A visualization technique
    b) Removing unused code
    c) Organizing code structure
    d) A build process
    Answer: b) Removing unused code
    Explanation: Tree shaking eliminates dead code from bundles

73. What is the purpose of service workers?
    a) To handle background tasks
    b) To manage services
    c) To connect to servers
    d) To handle routing
    Answer: a) To handle background tasks
    Explanation: Service workers enable offline functionality and background tasks

74. What is browser caching?
    a) Storing files locally
    b) Clearing browser data
    c) Compressing files
    d) Encrypting data
    Answer: a) Storing files locally
    Explanation: Browser caching stores resources locally for faster access

## Security and Authentication

75. What is JWT?
    a) JavaScript Web Token
    b) JSON Web Token
    c) Java Web Token
    d) JSON Web Type
    Answer: b) JSON Web Token
    Explanation: JWT is a standard for creating tokens that assert claims

76. What is OAuth?
    a) A authentication protocol
    b) A programming language
    c) A database system
    d) A web server
    Answer: a) A authentication protocol
    Explanation: OAuth enables authorized access to resources

77. What is the purpose of HTTPS?
    a) To make websites faster
    b) To secure data transmission
    c) To compress data
    d) To cache data
    Answer: b) To secure data transmission
    Explanation: HTTPS encrypts data transmitted between client and server

78. What is salt in password hashing?
    a) Random data added to passwords before hashing
    b) A type of encryption
    c) A security protocol
    d) A password requirement
    Answer: a) Random data added to passwords before hashing
    Explanation: Salt makes hash output unique even for identical passwords

## State Management

79. What is Redux?
    a) A state container
    b) A database
    c) A framework
    d) A programming language
    Answer: a) A state container
    Explanation: Redux is a predictable state container for JavaScript apps

80. What is the purpose of reducers in Redux?
    a) To handle side effects
    b) To modify state
    c) To handle routing
    d) To manage components
    Answer: b) To modify state
    Explanation: Reducers specify how state changes in response to actions

81. What is context in React?
    a) A way to pass data through component tree
    b) A type of component
    c) A routing mechanism
    d) A state management tool
    Answer: a) A way to pass data through component tree
    Explanation: Context provides a way to share values between components

82. What is the difference between props and state?
    a) Props are internal, state is external
    b) State is internal, props are external
    c) They are the same
    d) Neither stores data
    Answer: b) State is internal, props are external
    Explanation: Props are passed down, state is managed internally

## Testing

83. What is unit testing?
    a) Testing individual components
    b) Testing entire applications
    c) Testing user interfaces
    d) Testing databases
    Answer: a) Testing individual components
    Explanation: Unit testing tests individual units of code in isolation

84. What is integration testing?
    a) Testing individual components
    b) Testing component interactions
    c) Testing user interfaces
    d) Testing databases
    Answer: b) Testing component interactions
    Explanation: Integration testing tests how components work together

85. What is Jest?
    a) A testing framework
    b) A programming language
    c) A database system
    d) A web server
    Answer: a) A testing framework
    Explanation: Jest is a JavaScript testing framework

86. What is mocking in testing?
    a) Making fun of code
    b) Simulating dependencies
    c) Writing fake tests
    d) Skipping tests
    Answer: b) Simulating dependencies
    Explanation: Mocking replaces real dependencies with simulated ones

## API Design

87. What is REST?
    a) A programming language
    b) An architectural style
    c) A database system
    d) A testing framework
    Answer: b) An architectural style
    Explanation: REST is an architectural style for distributed systems

88. What is GraphQL?
    a) A query language for APIs
    b) A database
    c) A programming language
    d) A testing framework
    Answer: a) A query language for APIs
    Explanation: GraphQL enables declarative data fetching

89. What is webhook?
    a) A type of API
    b) A callback HTTP POST
    c) A security feature
    d) A database connection
    Answer: b) A callback HTTP POST
    Explanation: Webhooks are automated messages sent from apps when something happens

90. What is API versioning?
    a) Managing different API versions
    b) Testing APIs
    c) Securing APIs
    d) Creating APIs
    Answer: a) Managing different API versions
    Explanation: API versioning helps maintain backward compatibility

## Build Tools and Deployment

91. What is Webpack?
    a) A module bundler
    b) A programming language
    c) A database system
    d) A web server
    Answer: a) A module bundler
    Explanation: Webpack bundles JavaScript files for usage in a browser

92. What is continuous integration?
    a) Continuously writing code
    b) Automated build and test
    c) Continuous deployment
    d) Continuous monitoring
    Answer: b) Automated build and test
    Explanation: CI automates building and testing code changes

93. What is Docker?
    a) A container platform
    b) A programming language
    c) A database system
    d) A web server
    Answer: a) A container platform
    Explanation: Docker packages applications and dependencies together

94. What is nginx?
    a) A web server
    b) A programming language
    c) A database system
    d) A testing framework
    Answer: a) A web server
    Explanation: nginx is a web server that can also be used as a reverse proxy

## Browser and DOM

95. What is the DOM?
    a) Document Object Model
    b) Data Object Model
    c) Document Oriented Model
    d) Data Oriented Model
    Answer: a) Document Object Model
    Explanation: DOM is a programming interface for HTML documents

96. What is event bubbling?
    a) Events bubble up through ancestors
    b) Events moving down
    c) Events being cancelled
    d) Events being created
    Answer: a) Events bubble up through ancestors
    Explanation: Events propagate up through the DOM tree

97. What is a shadow DOM?
    a) A hidden DOM tree
    b) A virtual DOM
    c) A DOM copy
    d) A DOM backup
    Answer: a) A hidden DOM tree
    Explanation: Shadow DOM enables encapsulated styling and markup

98. What is the purpose of data attributes?
    a) To store custom data
    b) To style elements
    c) To handle events
    d) To create elements
    Answer: a) To store custom data
    Explanation: Data attributes store extra information on elements

## Performance Optimization

99. What is lazy loading?
    a) Loading resources on demand
    b) Slow loading
    c) Preloading resources
    d) Not loading resources
    Answer: a) Loading resources on demand
    Explanation: Lazy loading defers loading until resources are needed

100. What is debouncing?
     a) Limiting function calls
     b) Removing functions
     c) Creating functions
     d) Copying functions
     Answer: a) Limiting function calls
     Explanation: Debouncing limits how often a function can be called







# Technical Interview Multiple Choice Questions - Part 3

## Advanced JavaScript Patterns

101. What is the Module Pattern in JavaScript?
     a) A way to create private and public methods
     b) A way to create classes
     c) A way to import modules
     d) A way to export modules
     Answer: a) A way to create private and public methods
     Explanation: Module Pattern uses closures to create private and public scope

102. What is the Observer Pattern?
     a) A pattern for one-way data flow
     b) A pattern where objects notify other objects of changes
     c) A pattern for creating objects
     d) A pattern for destroying objects
     Answer: b) A pattern where objects notify other objects of changes
     Explanation: Observer Pattern enables pub/sub functionality

103. What is currying in JavaScript?
     a) Converting a function with multiple arguments into a sequence of functions
     b) Adding spice to functions
     c) Combining multiple functions
     d) Creating async functions
     Answer: a) Converting a function with multiple arguments into a sequence of functions
     Explanation: Currying transforms multi-argument functions into single-argument functions

104. What is the Singleton Pattern?
     a) A pattern that ensures only one instance exists
     b) A pattern for creating multiple instances
     c) A pattern for inheritance
     d) A pattern for modules
     Answer: a) A pattern that ensures only one instance exists
     Explanation: Singleton restricts instantiation to a single instance

## React Performance Optimization

105. What is the purpose of React.PureComponent?
     a) To create pure functions
     b) To implement shallow comparison of props and state
     c) To prevent component rendering
     d) To force component updates
     Answer: b) To implement shallow comparison of props and state
     Explanation: PureComponent implements shouldComponentUpdate with shallow comparison

106. When should you use useLayoutEffect instead of useEffect?
     a) When you need to make DOM measurements
     b) When you need to fetch data
     c) When you need to set state
     d) When you need to handle events
     Answer: a) When you need to make DOM measurements
     Explanation: useLayoutEffect fires synchronously after DOM mutations

107. What is code splitting in React?
     a) Breaking code into smaller chunks
     b) Splitting components
     c) Dividing state
     d) Separating props
     Answer: a) Breaking code into smaller chunks
     Explanation: Code splitting helps reduce bundle size by splitting code into chunks

## Advanced Database Concepts

108. What is database partitioning?
     a) Breaking a database into smaller parts
     b) Combining databases
     c) Backing up databases
     d) Encrypting databases
     Answer: a) Breaking a database into smaller parts
     Explanation: Partitioning divides tables into smaller manageable parts

109. What is a materialized view?
     a) A stored query result
     b) A regular view
     c) A table
     d) An index
     Answer: a) A stored query result
     Explanation: Materialized views store query results for faster access

110. What is ACID compliance?
     a) A database security measure
     b) A set of properties ensuring reliable transactions
     c) A backup strategy
     d) An encryption method
     Answer: b) A set of properties ensuring reliable transactions
     Explanation: ACID ensures database transactions are processed reliably

## Node.js Architecture

111. What is the Node.js event emitter?
     a) A class that handles events
     b) A type of database
     c) A security feature
     d) A routing mechanism
     Answer: a) A class that handles events
     Explanation: EventEmitter enables event-driven programming in Node.js

112. What is the purpose of Buffer in Node.js?
     a) To handle binary data
     b) To store cache
     c) To manage memory
     d) To handle routing
     Answer: a) To handle binary data
     Explanation: Buffer class handles raw binary data

113. What is the difference between process.nextTick() and setImmediate()?
     a) nextTick executes before I/O, setImmediate after
     b) They are the same
     c) setImmediate is faster
     d) nextTick is deprecated
     Answer: a) nextTick executes before I/O, setImmediate after
     Explanation: process.nextTick fires before I/O events event loop current tick , setImmediate after

## Advanced Angular Concepts

114. What is Change Detection in Angular?
     a) A process of updating the view
     b) A security feature
     c) A routing mechanism
     d) A form of validation
     Answer: a) A process of updating the view
     Explanation: Change Detection updates the view when data changes

115. What are Angular resolvers?
     a) Route guards that resolve data
     b) Components that resolve promises
     c) Services that resolve dependencies
     d) Modules that resolve imports
     Answer: a) Route guards that resolve data
     Explanation: Resolvers pre-fetch data before activating a route

116. What is the purpose of NgZone?
     a) Managing change detection
     b) Creating zones in templates
     c) Handling routing
     d) Managing state
     Answer: a) Managing change detection
     Explanation: NgZone handles Angular's change detection mechanism

## Advanced Web Security

117. What is Content Security Policy (CSP)?
     a) A security policy for content
     b) A content management system
     c) A caching policy
     d) A routing policy
     Answer: a) A security policy for content
     Explanation: CSP helps prevent XSS and other injection attacks

118. What is HSTS?
     a) HTTP Strict Transport Security
     b) High Security Transport System
     c) HTTP Security Transport Service
     d) High Security Transfer System
     Answer: a) HTTP Strict Transport Security
     Explanation: HSTS forces secure connections to the server

119. What is clickjacking?
     a) A UI redressing attack
     b) A type of virus
     c) A security protocol
     d) A testing method
     Answer: a) A UI redressing attack
     Explanation: Clickjacking tricks users into clicking disguised elements

## State Management Patterns

120. What is the Flux architecture?
     a) A unidirectional data flow pattern
     b) A database architecture
     c) A server architecture
     d) A network protocol
     Answer: a) A unidirectional data flow pattern
     Explanation: Flux enforces unidirectional data flow in applications

121. What are Redux middleware?
     a) Functions that intercept actions
     b) State containers
     c) Route handlers
     d) Data validators
     Answer: a) Functions that intercept actions
     Explanation: Middleware provides a third-party extension point for Redux

122. What is the purpose of Redux Thunk?
     a) To handle async actions
     b) To manage state
     c) To handle routing
     d) To validate data
     Answer: a) To handle async actions
     Explanation: Redux Thunk enables handling asynchronous actions in Redux

## Testing Best Practices

123. What is Test-Driven Development (TDD)?
     a) Writing tests before code
     b) Writing code before tests
     c) Not writing tests
     d) Testing after deployment
     Answer: a) Writing tests before code
     Explanation: TDD involves writing tests before implementing features

124. What is snapshot testing?
     a) Testing UI components
     b) Taking screenshots
     c) Testing performance
     d) Testing security
     Answer: a) Testing UI components
     Explanation: Snapshot testing captures and verifies UI components

125. What is code coverage?
     a) Percentage of code tested
     b) Amount of code written
     c) Code performance
     d) Code security
     Answer: a) Percentage of code tested
     Explanation: Code coverage measures how much code is tested

## Modern Web APIs

126. What is the Intersection Observer API?
     a) Observing element visibility
     b) Handling network requests
     c) Managing state
     d) Handling events
     Answer: a) Observing element visibility
     Explanation: Intersection Observer detects element visibility changes

127. What is the Web Workers API?
     a) Running scripts in background threads
     b) Managing worker processes
     c) Handling HTTP requests
     d) Managing state
     Answer: a) Running scripts in background threads
     Explanation: Web Workers enable parallel processing in browsers

128. What is the WebSocket API?
     a) Full-duplex communication protocol
     b) A security protocol
     c) A routing protocol
     d) A state management protocol
     Answer: a) Full-duplex communication protocol
     Explanation: WebSocket enables two-way communication with servers

## Build and Development Tools

129. What is Babel?
     a) A JavaScript compiler
     b) A testing framework
     c) A bundler
     d) A package manager
     Answer: a) A JavaScript compiler
     Explanation: Babel transforms modern JavaScript into backward-compatible versions

130. What is ESLint?
     a) A code linter
     b) A compiler
     c) A bundler
     d) A package manager
     Answer: a) A code linter
     Explanation: ESLint analyzes code for potential errors

131. What is Hot Module Replacement?
     a) Updating modules without refresh
     b) Replacing hardware modules
     c) Updating packages
     d) Replacing components
     Answer: a) Updating modules without refresh
     Explanation: HMR updates modules during development without page refresh

## Microservices and Architecture

132. What is a microservice?
     a) A small, independent service
     b) A small component
     c) A small database
     d) A small server
     Answer: a) A small, independent service
     Explanation: Microservices are small, independent services that work together

133. What is service discovery?
     a) Finding available services
     b) Creating services
     c) Testing services
     d) Deploying services
     Answer: a) Finding available services
     Explanation: Service discovery helps locate services in a network

134. What is API Gateway?
     a) A single entry point for APIs
     b) A database gateway
     c) A security gateway
     d) A network gateway
     Answer: a) A single entry point for APIs
     Explanation: API Gateway provides a single entry point for multiple services

## Progressive Web Apps (PWA)

135. What is a service worker?
     a) A script that runs in background
     b) A worker process
     c) A server process
     d) A database worker
     Answer: a) A script that runs in background
     Explanation: Service workers enable offline functionality in PWAs

136. What is App Shell architecture?
     a) Minimal HTML/CSS/JavaScript
     b) A complete application
     c) A database structure
     d) A server architecture
     Answer: a) Minimal HTML/CSS/JavaScript
     Explanation: App Shell provides minimal UI for instant loading

137. What is a Web App Manifest?
     a) A JSON file with app information
     b) A JavaScript file
     c) A CSS file
     d) An HTML file
     Answer: a) A JSON file with app information
     Explanation: Manifest provides information about the web application

## Performance Monitoring

138. What is First Contentful Paint (FCP)?
     a) First visual content rendering
     b) First user interaction
     c) First server response
     d) First data load
     Answer: a) First visual content rendering
     Explanation: FCP measures when first content is rendered

139. What is Time to Interactive (TTI)?
     a) When page becomes interactive
     b) When page loads
     c) When data loads
     d) When CSS loads
     Answer: a) When page becomes interactive
     Explanation: TTI measures when page becomes fully interactive

140. What is the RAIL model?
     a) Performance model
     b) Design pattern
     c) Architecture pattern
     d) Testing pattern
     Answer: a) Performance model
     Explanation: RAIL is a user-centric performance model

## Advanced CSS and Styling

141. What is CSS Grid?
     a) Two-dimensional layout system
     b) One-dimensional layout system
     c) A positioning system
     d) A flexbox alternative
     Answer: a) Two-dimensional layout system
     Explanation: CSS Grid enables complex two-dimensional layouts

142. What are CSS Custom Properties?
     a) Dynamic CSS variables
     b) Static CSS rules
     c) CSS functions
     d) CSS selectors
     Answer: a) Dynamic CSS variables
     Explanation: Custom Properties allow creating reusable CSS values

143. What is CSS-in-JS?
     a) Writing CSS within JavaScript
     b) Using JavaScript in CSS
     c) Converting CSS to JavaScript
     d) Converting JavaScript to CSS
     Answer: a) Writing CSS within JavaScript
     Explanation: CSS-in-JS enables component-scoped styling

## Accessibility (A11y)

144. What is ARIA?
     a) Accessible Rich Internet Applications
     b) Advanced Rich Internet Applications
     c) Automated Rich Internet Applications
     d) Active Rich Internet Applications
     Answer: a) Accessible Rich Internet Applications
     Explanation: ARIA provides accessibility information to assistive technologies

145. What is the purpose of alt text?
     a) Describing images
     b) Styling images
     c) Loading images
     d) Caching images
     Answer: a) Describing images
     Explanation: Alt text provides text alternatives for images

146. What is keyboard navigation?
     a) Navigating with keyboard
     b) Using mouse shortcuts
     c) Using touch gestures
     d) Using voice commands
     Answer: a) Navigating with keyboard
     Explanation: Keyboard navigation enables use without a mouse

## Browser Storage

147. What is IndexedDB?
     a) Low-level storage API
     b) High-level storage API
     c) A database system
     d) A caching system
     Answer: a) Low-level storage API
     Explanation: IndexedDB is a low-level API for client-side storage

148. What is the difference between localStorage and sessionStorage?
     a) localStorage persists, sessionStorage doesn't
     b) They are the same
     c) sessionStorage is larger
     d) localStorage is newer
     Answer: a) localStorage persists, sessionStorage doesn't
     Explanation: localStorage persists across sessions, sessionStorage doesn't

149. What are cookies?
     a) Small text files stored by browsers
     b) Database entries
     c) Server files
     d) JavaScript objects
     Answer: a) Small text files stored by browsers
     Explanation: Cookies store small pieces of data on the client

150. What is cache storage?
     a) Storage for offline resources
     b) Memory cache
     c) Database cache
     d) Server cache
     Answer: a) Storage for offline resources
     Explanation: Cache storage enables storing resources for offline use




