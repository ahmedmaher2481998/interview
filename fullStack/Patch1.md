
## Patch  1
### **Redis Questions**

#### **1. What is Redis and what are its primary use cases?**  
**Answer:**  
Redis is an open-source, in-memory key-value data store known for its high performance and versatility. It supports various data structures and is often used as:  
- **Cache:** Store frequently accessed data.  
- **Session Store:** Manage user sessions.  
- **Message Broker:** Implement pub/sub or queues.  
- **Analytics:** Fast data aggregation and leaderboard maintenance.

---

#### **2. Explain Redis persistence options: RDB vs AOF**  
**Answer:**  
Redis provides two persistence options:  
- **RDB (Redis Database File):**  
  - Saves a snapshot of data at intervals.  
  - Fast recovery but may lose recent writes.  
  - Suitable for backups.  

- **AOF (Append-Only File):**  
  - Logs every write operation.  
  - Slower but ensures minimal data loss.  
  - Suitable for write-heavy use cases.

**Combined Usage:**  
Use **RDB for backups** and **AOF for durability**.

---

#### **3. How does Redis handle data eviction policies?**  
**Answer:**  
Redis uses eviction policies to manage memory when the max memory limit is reached. Policies include:  
- **noeviction:** Returns errors when memory is full.  
- **allkeys-lru:** Evicts least recently used (LRU) keys.  
- **volatile-lru:** Evicts LRU keys with expiration set.  
- **allkeys-random:** Evicts random keys.  
- **volatile-ttl:** Evicts keys with the shortest time-to-live (TTL).  

Eviction is configured via `maxmemory-policy` in the Redis config.

---

#### **4. What are Redis data types and when would you use each?**  
**Answer:**  

| **Data Type** | **Description**                      | **Use Case**                                    |
|---------------|--------------------------------------|------------------------------------------------|
| **String**    | Binary-safe value (e.g., string, int)| Caching user data or counters (`INCR`).        |
| **Hash**      | Key-value pair map                  | Storing user profiles.                         |
| **List**      | Ordered list of strings             | Queues or message processing.                  |
| **Set**       | Unique unordered collection         | Tags or unique IDs.                            |
| **Sorted Set**| Set with scores for ranking         | Leaderboards or priority queues.               |
| **Stream**    | Append-only log structure           | Event streaming.                               |
| **Bitmap**    | Bit-level operations on strings     | Tracking user activity (bit flags).            |
| **HyperLogLog**| Approximation for unique counts    | Counting unique visitors.                      |

---

#### **5. How would you implement session management using Redis?**  
**Answer:**  
Redis is commonly used to store session data due to its speed and TTL support.

**Steps:**  
1. **Store Session:**  
   Save session data as a Redis key-value pair where the session ID is the key.  
   ```javascript
   const sessionId = 'user123-session';
   redisClient.set(sessionId, JSON.stringify(userData), 'EX', 3600); // Expire in 1 hour
   ```

2. **Retrieve Session:**  
   Validate the session ID on each request.  
   ```javascript
   redisClient.get(sessionId, (err, data) => {
     if (data) {
       console.log(JSON.parse(data)); // Use session data
     } else {
       console.log('Session expired or invalid');
     }
   });
   ```

3. **Delete Session:**  
   Invalidate a session during logout.  
   ```javascript
   redisClient.del(sessionId);
   ```

---

#### **Diagram: Session Management Using Redis**  
```plaintext
+-------------+          +-----------+           +-----------+
|   Browser   |          |   Server  |           |   Redis    |
|             |   Set    |  Validate |  Get/Set  |   Store    |
| Session ID  |--------->|  Session  |<--------->|  Session   |
| in Cookie   |          |  Data     |           |  Data      |
+-------------+          +-----------+           +-----------+
```

Redis's **fast lookups** and **expiration policies** make it ideal for session management. Would you like a deeper dive into any specific Redis feature?

---


  
### **SQL/PostgreSQL/MySQL Questions**

---

#### **1. Explain the difference between INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN with examples**  
**Answer:**  

| **Join Type**         | **Description**                                           | **Example Output**                       |
|------------------------|-----------------------------------------------------------|------------------------------------------|
| **INNER JOIN**         | Matches rows in both tables based on a condition.         | Common rows only.                        |
| **LEFT JOIN**          | All rows from the left table, plus matched rows from the right. | NULL for unmatched rows in the right.   |
| **RIGHT JOIN**         | All rows from the right table, plus matched rows from the left. | NULL for unmatched rows in the left.    |
| **FULL OUTER JOIN**    | All rows from both tables, matched or not.                | NULL for unmatched rows on either side. |

**Example:**  
Consider `Users` and `Orders` tables.

**Tables:**  
`Users`  
| id | name   |  
|----|--------|  
| 1  | Alice  |  
| 2  | Bob    |  
| 3  | Carol  |  

`Orders`  
| id | user_id | product  |  
|----|---------|----------|  
| 1  | 1       | Laptop   |  
| 2  | 3       | Phone    |  

**SQL Queries:**  
- **INNER JOIN:** `SELECT * FROM Users u INNER JOIN Orders o ON u.id = o.user_id;`  
  **Output:** Alice, Laptop; Carol, Phone.  

- **LEFT JOIN:** `SELECT * FROM Users u LEFT JOIN Orders o ON u.id = o.user_id;`  
  **Output:** Alice, Laptop; Bob, NULL; Carol, Phone.  

- **RIGHT JOIN:** `SELECT * FROM Users u RIGHT JOIN Orders o ON u.id = o.user_id;`  
  **Output:** Alice, Laptop; Carol, Phone.  

- **FULL OUTER JOIN:** `SELECT * FROM Users u FULL OUTER JOIN Orders o ON u.id = o.user_id;`  
  **Output:** Alice, Laptop; Bob, NULL; Carol, Phone.

---

#### **2. How would you optimize a slow-performing SQL query?**  
**Answer:**  
- **Indexing:** Ensure columns in WHERE, JOIN, and ORDER BY are indexed.  
- **Query Rewrite:** Avoid SELECT *; only fetch required columns.  
- **Analyze Execution Plan:** Use `EXPLAIN` or `EXPLAIN ANALYZE`.  
- **Partitioning:** Split large tables to reduce scanning time.  
- **Caching:** Cache frequent queries.  
- **Avoid Complex Joins/Subqueries:** Use common table expressions (CTEs) if needed.  
- **Optimize Index Usage:** Consider covering indexes or composite indexes.  
- **Limit Rows:** Use `LIMIT` for paginated queries.  

---

#### **3. Explain the concept of database normalization and its forms**  
**Answer:**  
Normalization organizes data to reduce redundancy and improve consistency.

| **Form**          | **Rule**                                                                 |
|--------------------|--------------------------------------------------------------------------|
| **1NF**           | Data is atomic (no repeating groups).                                    |
| **2NF**           | 1NF + no partial dependency on primary keys.                             |
| **3NF**           | 2NF + no transitive dependencies.                                        |
| **BCNF**          | Every determinant is a candidate key.                                    |

**Example:**  

| **Non-Normalized Table** |  
| product_id | product_name | supplier_id | supplier_name |  
|------------|--------------|-------------|---------------|  
| 1          | Laptop       | 100         | TechSupply    |  

**3NF Table:**  
- **Products:** `(product_id, product_name, supplier_id)`  
- **Suppliers:** `(supplier_id, supplier_name)`

---

#### **4. What is the difference between WHERE and HAVING clauses?**  
**Answer:**  

| **WHERE**                       | **HAVING**                          |
|----------------------------------|--------------------------------------|
| Filters rows before grouping.    | Filters groups after aggregation.   |
| Works on individual rows.        | Works on aggregate functions.       |

**Example:**  
```sql
SELECT department, COUNT(*) 
FROM employees 
WHERE salary > 5000         -- Filter individual rows
GROUP BY department
HAVING COUNT(*) > 10;       -- Filter grouped results
```

---

#### **5. How do you handle deadlocks in a database system?**  
**Answer:**  
- **Detect Deadlocks:** Use database logs or monitoring tools.  
- **Prevent Deadlocks:**  
  - Use consistent locking order (e.g., Table A → Table B).  
  - Use shorter transactions to minimize contention.  
  - Use lower isolation levels if acceptable.  
- **Resolve Deadlocks:**  
  - Database automatically picks a victim transaction and rolls it back.  
  - Handle errors with retry logic in the application.  

**Example:**  

```plaintext
Process 1: Locks Table A → Waits for Table B  
Process 2: Locks Table B → Waits for Table A  

Solution: Ensure both processes lock tables in the same order.
```
---


A **deadlock** happens when two or more processes (or transactions) wait indefinitely for each other to release a resource, preventing further progress.

---

### **Simple Example of a Deadlock:**

#### Scenario:  
Two processes need to access **two shared tables** (Table A and Table B) to complete their tasks.

1. **Process 1**:
   - Locks **Table A**.
   - Tries to lock **Table B** (but it's already locked by Process 2).

2. **Process 2**:
   - Locks **Table B**.
   - Tries to lock **Table A** (but it's already locked by Process 1).

**Result:** Both processes are waiting for the other to release its lock. Neither can proceed, creating a deadlock.

---

### **Visual Representation:**

```plaintext
    Process 1                Process 2
    -----------              -----------
    Lock Table A             Lock Table B
    Wait for Table B   <-->  Wait for Table A
```

Both processes are stuck, forming a "circular wait."

---

### **How to Prevent Deadlocks:**
1. **Consistent Lock Order:** Always lock tables in the same order (e.g., Table A first, then Table B).
2. **Timeouts:** Set a timeout for locks so transactions don't wait forever.
3. **Smaller Transactions:** Keep transactions short to reduce the likelihood of conflicts.

---

### **Node.js Questions**

---

#### **1. Explain the Event Loop in Node.js**  
**Answer:**  
The **Event Loop** is a mechanism in Node.js that handles non-blocking I/O operations by offloading tasks to the operating system or worker threads and processing them asynchronously.  
- **Phases in the Event Loop:**  
  1. **Timers:** Executes `setTimeout` and `setInterval` callbacks.  
  2. **Pending Callbacks:** Handles I/O callbacks deferred from the previous loop.  
  3. **Idle/Prepare:** Internal phase used by Node.js.  
  4. **Poll:** Retrieves new I/O events and executes callbacks.  
  5. **Check:** Executes `setImmediate` callbacks.  
  6. **Close Callbacks:** Executes `close` event callbacks like `socket.on('close')`.

```plaintext
Timers → Pending Callbacks → Poll → Check → Close Callbacks
```

---

#### **2. How does Node.js handle child processes?**  
**Answer:**  
Node.js provides the `child_process` module to create and manage child processes. These processes run independently and can communicate with the parent process via messaging or streams.  

- **Key Methods:**
  - `spawn`: Starts a new process for streaming data.
  - `exec`: Executes a command and buffers the output.
  - `fork`: Spawns a child process for Node.js scripts, with IPC (Inter-Process Communication).

**Example: Fork a Child Process:**
```javascript
const { fork } = require('child_process');
const child = fork('./child.js');

// Communicate with child
child.send({ hello: 'world' });
child.on('message', (msg) => console.log('Message from child:', msg));
```

---

#### **3. What are Streams in Node.js and how do they work?**  
**Answer:**  
Streams are objects in Node.js for handling continuous data flows efficiently. They use an **event-driven** approach, allowing data to be processed in chunks instead of loading everything into memory.  

- **Types of Streams:**
  1. **Readable:** Read data (e.g., file streams, HTTP requests).
  2. **Writable:** Write data (e.g., HTTP responses, file writes).
  3. **Duplex:** Both readable and writable (e.g., sockets).
  4. **Transform:** A duplex stream that modifies data (e.g., compression).  

**Example: Readable Stream:**
```javascript
const fs = require('fs');
const stream = fs.createReadStream('file.txt', { encoding: 'utf8' });
stream.on('data', chunk => console.log('Chunk:', chunk));
```

---

#### **4. Explain the difference between process.nextTick() and setImmediate()**  
**Answer:**  

| **`process.nextTick`**                   | **`setImmediate`**                 |
|------------------------------------------|-------------------------------------|
| Executes callbacks **before** the Event Loop continues to the next phase. | Executes callbacks in the **Check phase** of the Event Loop. |
| Higher priority than `setImmediate`.     | Lower priority compared to `process.nextTick`. |
| Used for deferring execution of code during the current phase. | Used for executing code **after** I/O events are processed. |

**Example:**
```javascript
process.nextTick(() => console.log('Next Tick'));
setImmediate(() => console.log('Immediate'));

// Output: 
// Next Tick
// Immediate
```

---

#### **5. How does clustering work in Node.js?**  
**Answer:**  
Clustering allows Node.js to utilize multiple CPU cores by creating a master process that spawns worker processes to share the workload.

- **Cluster Module:**
  - The `cluster` module creates workers that handle incoming requests independently.
  - The master process listens for requests and distributes them to workers.

**Example:**
```javascript
const cluster = require('cluster');
const http = require('http');

if (cluster.isMaster) {
  // Fork workers
  const numCPUs = require('os').cpus().length;
  for (let i = 0; i < numCPUs; i++) cluster.fork();
  
  cluster.on('exit', (worker) => console.log(`Worker ${worker.process.pid} died`));
} else {
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello World!');
  }).listen(8000);
}
```

- **How it Works:**  
  - **Master Process:** Manages the lifecycle of workers.
  - **Worker Processes:** Handle client requests independently.  
  - Improves scalability by utilizing all CPU cores efficiently.
  ---
  

### **ReactJS Questions**

---

#### **1. Explain the Virtual DOM and its Benefits**  
**Answer:**  
The **Virtual DOM** is an in-memory representation of the real DOM. React updates the Virtual DOM first, then efficiently reconciles the changes with the actual DOM using a process called **diffing**.

**Benefits:**
- **Efficiency:** Minimizes direct DOM manipulation.
- **Performance:** Updates only the changed parts instead of re-rendering the whole DOM.
- **Cross-platform:** Works on browsers and other platforms like React Native.

---

#### **2. What are React Hooks? Explain `useCallback` and `useMemo`**  
**Answer:**  
React Hooks allow you to use state and lifecycle features in functional components.  

- **`useCallback`**: Memorizes a callback function to prevent unnecessary re-creations on re-renders.  
  ```javascript
  const memoizedCallback = useCallback(() => {
    doSomething(dep);
  }, [dep]);
  ```

- **`useMemo`**: Memorizes the result of a computation to avoid expensive recalculations.  
  ```javascript
  const memoizedValue = useMemo(() => computeExpensiveValue(dep), [dep]);
  ```

**When to Use:**
- Use `useCallback` for functions passed as props to child components.
- Use `useMemo` for expensive calculations or derived values.

---

#### **3. How Does React Fiber Architecture Work?**  
**Answer:**  
React Fiber is the reimplementation of React’s reconciliation algorithm to improve rendering performance by breaking rendering work into **small units** that can be paused and resumed.

**Key Features:**
- **Time-slicing:** Prioritizes rendering based on urgency (e.g., animations over background tasks).
- **Concurrency:** Allows interruptible updates, enabling smooth UI interactions.
- **Phases:**
  1. **Render Phase:** Builds a "work-in-progress" tree (can be paused).
  2. **Commit Phase:** Applies changes to the DOM (synchronous).

---

#### **4. Explain the Concept of Lifting State Up in React**  
**Answer:**  
**Lifting state up** means moving shared state to the closest common ancestor of components that need it.

**Scenario:**  
Two sibling components need access to the same data. Instead of duplicating state, move it to their parent and pass it down as props.

**Example:**
```javascript
function Parent() {
  const [value, setValue] = useState("");

  return (
    <>
      <Input value={value} onChange={setValue} />
      <Display value={value} />
    </>
  );
}
```

---

#### **5. What are Higher Order Components (HOCs) and When Should You Use Them?**  
**Answer:**  
An **HOC** is a function that takes a component and returns a new component with additional functionality.  
**Example:**
```javascript
function withLogging(WrappedComponent) {
  return function EnhancedComponent(props) {
    useEffect(() => console.log('Component Rendered'));
    return <WrappedComponent {...props} />;
  };
}
```

**Use Cases:**
- Reusing logic across multiple components (e.g., authentication, logging).  
- Enhancing component functionality without modifying the original.  

**Note:** React now favors **hooks** over HOCs for code reuse.
---
### **Docker Questions**

---

#### **1. What is Docker Containerization and How is it Different from Virtualization?**  
**Answer:**  
**Docker Containerization**: It allows you to package an application and its dependencies into a standardized unit called a **container**. Containers share the host OS kernel but run isolated environments, making them lightweight and fast.

**Difference from Virtualization**:
- **Containers** share the same host OS kernel, and only the application and its dependencies are isolated.
- **Virtualization** uses a hypervisor to create separate virtual machines (VMs), each with its own OS, making it heavier and slower than containers.

**Diagram:**
```
               Virtualization
        -------------------------
        |  Virtual Machine 1     |
        |  OS, App, Dependencies |
        -------------------------
        |  Virtual Machine 2     |
        |  OS, App, Dependencies |
        -------------------------
                (Hypervisor)
```

```
               Docker Containers
        -------------------------
        |  Container 1           |
        |  App, Dependencies     |
        -------------------------
        |  Container 2           |
        |  App, Dependencies     |
        -------------------------
                (Host OS Kernel)
```

---

#### **2. Explain Docker Networking Concepts**  
**Answer:**  
Docker networking allows containers to communicate with each other and with external systems. Key concepts include:

- **Bridge Network**: Default network for containers on the same host, isolated from external networks.
- **Host Network**: Shares the host’s network stack. The container uses the host’s IP address.
- **None Network**: No networking. Useful for isolated containers.
- **Overlay Network**: Used in multi-host networking (e.g., with Docker Swarm), allowing containers on different hosts to communicate.

**Example:**
```bash
docker network create --driver bridge my-bridge-network
```

---

#### **3. How Do You Optimize Docker Image Size?**  
**Answer:**  
To optimize Docker image size:

1. **Use smaller base images** (e.g., Alpine Linux).
   - `FROM node:14-alpine` instead of `FROM node:14`.
2. **Minimize layers**: Combine commands like `RUN apt-get update && apt-get install -y <pkg>`.
3. **Remove unnecessary files**: Use `.dockerignore` to avoid including files like `node_modules` or `.git`.
4. **Clean up** after installations:
   ```Dockerfile
   RUN apt-get clean && rm -rf /var/lib/apt/lists/*
   ```
5. **Use multi-stage builds**: Separate build and runtime dependencies to reduce image size.

---

#### **4. Explain Docker Volumes and Their Use Cases**  
**Answer:**  
**Docker Volumes** are persistent storage that can be shared between containers or between a container and the host. Unlike container filesystems, volumes are not deleted when a container is removed.

**Use Cases**:
- **Data persistence**: Store data outside of containers to persist after restarts.
- **Sharing data**: Share data between containers.
- **Database storage**: Use volumes to store databases that need persistence across container restarts.

**Example:**
```bash
docker volume create my-volume
docker run -v my-volume:/data my-image
```

---

#### **5. What is Docker Compose and When Would You Use It?**  
**Answer:**  
**Docker Compose** is a tool for defining and running multi-container Docker applications. Using a `docker-compose.yml` file, you can configure services, networks, and volumes in a single file and run them together with a single command.

**When to Use**:
- **Multi-container applications**: For applications with multiple services (e.g., web app, database, cache).
- **Development environments**: Quickly set up local environments for testing and development.

**Example `docker-compose.yml`:**
```yaml
version: "3"
services:
  web:
    image: my-web-app
    ports:
      - "5000:5000"
  db:
    image: postgres
    environment:
      POSTGRES_PASSWORD: example
```

**Command to start:**
```bash
docker-compose up
```
----

### **Cloud Questions**

---

#### **1. Explain the Difference Between IaaS, PaaS, and SaaS**  
**Answer:**  
- **IaaS (Infrastructure as a Service)**: Provides virtualized hardware resources like servers, storage, and networking. You manage the OS and applications.
  - Example: **AWS EC2**, **Google Compute Engine**.
  
- **PaaS (Platform as a Service)**: Provides a platform for developing, running, and managing applications without worrying about the underlying infrastructure.
  - Example: **Google App Engine**, **AWS Elastic Beanstalk**.

- **SaaS (Software as a Service)**: Provides fully managed software applications over the internet, where users don’t have to worry about infrastructure or platforms.
  - Example: **Google Workspace**, **Salesforce**.

**Diagram:**

```
                   IaaS             PaaS              SaaS
                 (VMs, Storage)   (App Platform)    (Full Apps)
                   /                   /                 /
        Example: AWS EC2     Example: Google App Engine    Example: Google Docs
```

---

#### **2. What Are Microservices and Their Advantages?**  
**Answer:**  
**Microservices** are an architectural style where an application is built as a collection of loosely coupled, independently deployable services. Each service focuses on a single business functionality and communicates via APIs.

**Advantages**:
- **Scalability**: Individual services can be scaled independently.
- **Resilience**: Fault in one service doesn’t affect the entire system.
- **Flexibility**: Different technologies can be used for different services.
- **Faster development**: Teams can work on services independently.

**Diagram**:
```
      +-----------+      +-----------+      +-----------+
      | Service A |----->| Service B |----->| Service C |
      +-----------+      +-----------+      +-----------+
```

---

#### **3. How Do You Handle Service Discovery in a Cloud Environment?**  
**Answer:**  
**Service discovery** is the process of automatically detecting and locating services in a distributed system. In cloud environments, this is typically done using:

1. **DNS-based Discovery**: Services register their IP addresses with DNS, and clients query the DNS to find services.
2. **Service Registries**: Tools like **Consul**, **Eureka**, or **AWS Cloud Map** store the locations of available services, and clients can query the registry for service instances.
3. **Kubernetes**: Uses built-in service discovery features via **Kubernetes DNS** to locate services in a cluster.

---

#### **4. Explain Horizontal vs Vertical Scaling**  
**Answer:**  
- **Horizontal Scaling (Scaling Out/In)**: Adding more instances of resources (e.g., additional servers, containers).
  - **Use case**: Web applications with high traffic that require distributing load.
  - **Example**: Adding more EC2 instances to handle more requests.

- **Vertical Scaling (Scaling Up/Down)**: Increasing the power (CPU, RAM, storage) of a single instance.
  - **Use case**: Database applications that need more power but don’t need additional instances.
  - **Example**: Upgrading the instance size in AWS EC2.

**Diagram:**

```
Horizontal Scaling:
        +---------+     +---------+
        | Server 1|     | Server 2|
        +---------+     +---------+
        | Server 3|     | Server 4|
        +---------+     +---------+

Vertical Scaling:
        +-----------------+
        | Server (Bigger) |
        +-----------------+
```

---

#### **5. What Is Container Orchestration?**  
**Answer:**  
**Container orchestration** refers to the management of containerized applications across multiple hosts, automating deployment, scaling, networking, and availability. Tools like **Kubernetes**, **Docker Swarm**, and **Apache Mesos** handle container lifecycle management, including:

- **Automating deployments**: Distributing containers across nodes.
- **Scaling applications**: Automatically adjusting the number of containers based on load.
- **Load balancing**: Distributing requests among containers.
- **Self-healing**: Automatically restarting failed containers.

**Example**:  
In **Kubernetes**, containers are grouped into **Pods**, and the system automatically schedules and manages the pods across a cluster.

---

### **Full Stack General (Mid-Advanced)**

---

#### **1. How Would You Implement Authentication in a MERN Stack Application?**  
**Answer:**  
In a **MERN stack** application, authentication can be implemented using **JWT (JSON Web Tokens)** for stateless authentication.

- **Backend (Express)**:  
  - **User logs in**: Backend verifies credentials (e.g., via MongoDB) and generates a JWT.
  - **JWT sent to client**: After successful login, the JWT is sent to the frontend, typically stored in **localStorage** or **sessionStorage**.
  - **Protected routes**: The JWT is sent in the `Authorization` header for requests to protected routes, where it’s verified on the server.

- **Frontend (React)**:  
  - Store the JWT and use it in the request headers for API calls.
  - Use **React Context** or **Redux** to manage the user’s authentication state.

**Example Flow:**
```
1. User submits login form --> backend validates and issues JWT
2. Frontend stores JWT in localStorage
3. For subsequent requests, frontend sends JWT in Authorization header
4. Backend validates JWT on each request
```

---

#### **2. Explain the Concept of Server-side Rendering vs Client-side Rendering**  
**Answer:**  
- **Server-side Rendering (SSR)**:  
  - The HTML is generated on the server, and the client receives a fully rendered page.
  - SEO-friendly, faster initial load.
  - Example: **Next.js** provides SSR by default.
  - **Drawback**: The server is responsible for rendering each request, which can increase load.

- **Client-side Rendering (CSR)**:  
  - The server sends minimal HTML, and the client (browser) loads JavaScript to fetch and render the content.
  - Example: **React**, **Vue.js** use CSR by default.
  - **Drawback**: Slower initial load time, but the app becomes more interactive once fully loaded.

**Diagram:**

```
  SSR                                  CSR
+------------------+         +-------------------+
|  Server renders  |         |  Minimal HTML sent |
|  the full page   |         |  JavaScript runs   |
+------------------+         +-------------------+
       |                          |
       V                          V
   User sees fully-rendered    User sees skeleton, then data loads
   page faster.                 after JS loads.
```

---

#### **3. How Do You Handle State Management in a Large Application?**  
**Answer:**  
For **large applications**, managing state can become complex. The most common solutions are:

1. **React Context**: Good for smaller to medium-sized applications. It allows passing data between components without manually prop drilling.
   
2. **Redux**: Ideal for large-scale applications. It centralizes the state in a store, which makes state management more predictable and easier to debug, especially with **Redux Toolkit**.
   - Use **Redux Thunk** or **Redux Saga** for handling async operations.
   
3. **MobX**: An alternative to Redux that uses observables and provides a simpler, less boilerplate way to manage state.

4. **React Query / Apollo Client**: These are specialized for **data fetching** and cache management, making it easier to manage server-side state.

**Tip**: Use a combination of these depending on the complexity and size of the app.

---

#### **4. Explain CORS and How to Handle It**  
**Answer:**  
**CORS (Cross-Origin Resource Sharing)** is a mechanism that allows web browsers to make requests to servers in different domains than the one that served the web page. Without proper configuration, browsers will block requests due to **security concerns** (same-origin policy).

- **How to Handle CORS**:  
  - **Backend**: Add proper headers to the response:
    - For **Express**, use the **cors** package.
    ```js
    const cors = require('cors');
    app.use(cors({ origin: 'http://yourfrontend.com' }));
    ```

  - **Frontend**: Ensure the request is being made to the correct server with the right credentials or headers.

  - **Preflight Requests**: Browsers may send a **preflight** OPTIONS request to check if the server allows CORS. Ensure your server handles this as well.

**Diagram**:

```
+---------------------+     Preflight Request     +---------------------+
|   Browser (Client)  |  -----------------------> |   Server (Backend)  |
|  Sends request to   |                           |  Handles CORS policy|
|  different domain   |                           |    and responds     |
+---------------------+ <----------------------- |                     |
    (Cross-Origin)                                (Allow CORS)
```

---

#### **5. What Are Design Patterns and When Would You Use Them?**  
**Answer:**  
**Design patterns** are reusable solutions to common problems that occur in software design. They provide templates to solve common issues in a consistent and efficient manner.

**Common Design Patterns**:
1. **Singleton**: Ensures a class has only one instance and provides a global point of access.  
   - Use Case: Database connections, logging systems.

2. **Factory Method**: Provides an interface for creating objects, but allows subclasses to alter the type of objects that will be created.  
   - Use Case: When the creation process is complex or you need different objects based on certain conditions.

3. **Observer**: Allows a subject to notify its observers about changes without knowing who or what those observers are.  
   - Use Case: Event handling in front-end frameworks like React.

4. **Strategy**: Defines a family of algorithms and makes them interchangeable.  
   - Use Case: Sorting algorithms, payment methods in e-commerce.

5. **Decorator**: Adds functionality to an object dynamically.  
   - Use Case: Adding features to UI components without altering their structure.

**When to use**:  
Use design patterns when the problem is well-defined and the pattern helps in solving the problem in a scalable and maintainable way.

---

### **HTML/CSS/JS/TS (Mid-Advanced)**

---

#### **1. Explain the Box Model in CSS**  
**Answer:**  
The **CSS box model** defines how the elements on a webpage are structured and how their size is calculated. It consists of four parts:

1. **Content**: The actual content of the element (text, images, etc.).
2. **Padding**: Space between the content and the border. Padding is inside the box, and it increases the element's size.
3. **Border**: Surrounds the padding (if any) and content.
4. **Margin**: Space outside the border. It separates the element from others.

**Diagram**:
```
|------------ Margin ------------|
|  |-------- Border --------|     |
|  |  |------ Padding ------|     |
|  |  |  | Content Here  |     |
|  |  |                  |     |
|  |  |                  |     |
|  |  |                  |     |
|  |  |                  |     |
|  |----------------------|     |
|----------------------------|
```

---

#### **2. What Are Promises and Async/Await in JavaScript?**  
**Answer:**  
- **Promises**:  
  A Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It can be in three states:
  - **Pending**: Operation not yet completed.
  - **Fulfilled**: Operation completed successfully.
  - **Rejected**: Operation failed.

  Example:
  ```js
  let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) resolve("Data fetched!");
    else reject("Error occurred.");
  });

  promise.then(result => console.log(result)).catch(err => console.log(err));
  ```

- **Async/Await**:  
  These are syntactic sugar over Promises for better readability.  
  - **async**: Declares a function that returns a Promise.
  - **await**: Pauses execution of the async function until the Promise is resolved.

  Example:
  ```js
  async function fetchData() {
    let result = await fetch('https://api.example.com');
    let data = await result.json();
    console.log(data);
  }
  ```

---

#### **3. How Does Prototypal Inheritance Work in JavaScript?**  
**Answer:**  
**Prototypal inheritance** allows objects to inherit properties and methods from other objects. Every object in JavaScript has a hidden internal property called `[[Prototype]]` (often accessed via `__proto__`). When accessing a property or method, JavaScript first checks the object itself. If not found, it checks the object's prototype chain.

**Example:**
```js
// Parent object
const animal = {
  speak() {
    console.log("Animal speaks");
  }
};

// Child object inherits from parent
const dog = Object.create(animal);
dog.speak(); // Output: "Animal speaks"
```

In this example, the `dog` object doesn't have its own `speak` method, so it looks up the prototype chain to find it in the `animal` object.

---

#### **4. Explain TypeScript Generics and Their Use Cases**  
**Answer:**  
**Generics** in TypeScript allow you to write flexible, reusable functions and classes while maintaining type safety. They let you define a placeholder type that will be specified when the function or class is used.

**Example Use Case**:
```ts
function identity<T>(value: T): T {
  return value;
}

let numberIdentity = identity(42);  // Type inferred as number
let stringIdentity = identity("hello");  // Type inferred as string
```

**When to use**:  
Generics are useful when you need to create functions or classes that can handle multiple types but you want to retain type safety, such as in **collections**, **API responses**, or **utility functions**.

---

#### **5. What Are CSS Grid and Flexbox? When Would You Use Each?**  
**Answer:**  
- **CSS Grid**:  
  A 2D layout system that allows you to control both rows and columns, providing powerful control over complex layouts. It's ideal when you need to create complex, grid-based layouts.

  **Use case**:  
  When you need to create a layout with rows and columns (e.g., dashboards, product grids).

  **Example**:
  ```css
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  ```

- **CSS Flexbox**:  
  A 1D layout system that is best for arranging items in rows or columns. It’s great for aligning elements along a single axis (horizontal or vertical).

  **Use case**:  
  When you need a simple, responsive layout or to align items within a container (e.g., navigation bars, form controls).

  **Example**:
  ```css
  .container {
    display: flex;
    justify-content: space-between;
  }
  ```

**When to use**:
- **CSS Grid**: Complex layouts with multiple rows and columns.
- **Flexbox**: Simple linear layouts or alignment of items within a container.

**Diagram** (Grid vs Flex):
```
CSS Grid:      |   CSS Flex:
+-----+-----+  |   +-----+-----+
|     |     |  |   |     |     |
|     |     |  |   |     |     |
+-----+-----+  |   +-----+-----+
|     |     |  |   |     |     |
+-----+-----+  |   +-----+-----+
```

---

### **9. Thread Pool (Node.js Specific)**

---

#### **1. What is the Thread Pool in Node.js?**
**Answer:**  
The **Thread Pool** in Node.js is a set of threads used by the **libuv** library to handle tasks that are CPU-intensive or involve blocking I/O operations, such as file system access, DNS lookups, and cryptography. Since Node.js uses a single-threaded event loop for asynchronous I/O, the thread pool allows offloading blocking tasks to worker threads without blocking the main event loop.

---

#### **2. How Does the Thread Pool Handle CPU-Intensive Tasks?**
**Answer:**  
The Thread Pool is primarily responsible for handling **CPU-bound tasks** that require intensive computation or blocking operations. These tasks are offloaded from the single-threaded event loop to the worker threads in the thread pool. This allows Node.js to continue processing I/O operations without being blocked by the CPU-intensive tasks. For example, operations like **file compression, encryption, or hashing** are executed in the thread pool to keep the event loop free.

**Example Scenario**:  
When reading a large file from disk, Node.js will delegate the disk read operation to a worker thread in the thread pool. Once the task is complete, the result is returned to the event loop for further processing.

---

#### **3. Explain libuv and Its Role in Node.js**
**Answer:**  
**libuv** is a cross-platform C library that provides **asynchronous I/O** and event-driven capabilities. It acts as the bridge between Node.js and the underlying OS, abstracting away platform-specific I/O details (e.g., event loops, file system operations, networking).

- **Role of libuv**:  
  - **Manages the event loop** for handling asynchronous operations.
  - **Handles non-blocking I/O** operations, like networking and file access.
  - Uses a **thread pool** to handle CPU-intensive tasks asynchronously without blocking the main event loop.

Libuv is the core component that makes Node.js highly scalable by offloading tasks to worker threads or other OS-level processes.

---

#### **4. How Many Threads Are in the Default Thread Pool?**
**Answer:**  
The default **thread pool** in Node.js is made up of **4 threads**. These threads are used for handling blocking I/O tasks, such as filesystem operations, DNS resolution, and cryptographic functions.

**Note:**  
This number can be adjusted based on the needs of the application.

---

#### **5. When Should You Increase Thread Pool Size?**
**Answer:**  
You should consider increasing the **thread pool size** when:
1. **CPU-bound tasks** are blocking the event loop for a long time, such as complex calculations, data processing, or encryption.
2. Your application performs **high-volume I/O operations** (e.g., file reading/writing) that need more concurrent worker threads.
3. **Performance monitoring** indicates that the default pool size (4 threads) is insufficient to handle the load, leading to tasks being queued and delayed.

**How to increase thread pool size**:  
The thread pool size can be modified by setting the `UV_THREADPOOL_SIZE` environment variable. For example, to set it to 8:

```bash
UV_THREADPOOL_SIZE=8 node app.js
```

Increasing the pool size improves the ability to handle concurrent blocking tasks, but be cautious—having too many threads can lead to context-switching overhead.

---

**Summary Diagram:**

```
+--------------------------+             +--------------------------+
|         Event Loop        |             |   libuv Thread Pool      |
|    (Single Thread)        |             |  (4 Threads by Default)  |
|                          |<----->(Tasks)--->(Handles Blocking I/O)|
+--------------------------+             +--------------------------+
      Main Event Loop                          Worker Threads (Async)
```

### **10. Database General Concepts**

---

#### **1. What is Database Sharding and When Would You Use It?**
**Answer:**  
**Sharding** is the process of distributing data across multiple servers (or databases) to improve scalability and performance. Each server, or **shard**, contains a subset of the data, and together they form the entire dataset.

- **When to use sharding**:
  - **Large datasets**: When a database grows too large for a single server, sharding helps distribute the load.
  - **High traffic**: For applications with heavy read/write traffic, sharding reduces bottlenecks.
  - **Scaling horizontally**: Sharding enables horizontal scaling by adding more servers to the system.

**Example Scenario**:  
In an e-commerce platform, the customer database might be sharded by geographic region, where each shard holds data for customers in a specific region.

---

#### **2. Explain the CAP Theorem**
**Answer:**  
The **CAP Theorem** (Consistency, Availability, Partition Tolerance) states that a distributed database system can only guarantee two out of the three properties:

- **Consistency**: Every read operation will return the most recent write.
- **Availability**: Every request will receive a response (success or failure).
- **Partition Tolerance**: The system will continue to operate even if network partitions (communication breakdowns between nodes) occur.

**Example**:  
A system that prioritizes **Consistency and Partition Tolerance** (CP) will always ensure the latest data but may become unavailable in case of network partitioning. A system that prioritizes **Availability and Partition Tolerance** (AP) ensures the system is always available, even if data is inconsistent during partitions.

---

#### **3. How Do You Handle Database Migrations in a Production Environment?**
**Answer:**  
Database migrations are used to modify the database schema (e.g., add or remove tables, change column types). Handling migrations in a production environment requires careful planning:

1. **Version control**: Use a tool like **Liquibase**, **Flyway**, or **TypeORM migrations** to keep track of schema changes.
2. **Testing**: Always test migrations on a staging environment before applying to production.
3. **Rolling out changes**: Apply migrations during low-traffic periods to minimize downtime. If possible, **apply in batches** for large databases.
4. **Backup**: Always back up the production database before applying any migration.
5. **Monitoring**: After migration, monitor the application for any performance issues or failures.

**Example**:  
When adding a new column to a table, apply the migration first in staging, then in production after validating its impact.

---

#### **4. What is Connection Pooling and Why is it Important?**
**Answer:**  
**Connection pooling** is the practice of maintaining a pool of database connections that can be reused, rather than opening and closing a new connection for each request. This improves performance by reducing the overhead of creating new connections repeatedly.

- **Why it’s important**:
  - **Reduces latency**: Reusing connections eliminates the need for time-consuming connection establishment.
  - **Improves throughput**: Connection pooling allows the database to handle multiple concurrent requests efficiently.
  - **Resource management**: Pools can limit the number of concurrent connections to prevent overloading the database.

**Example**:  
A web app handling user sign-ins can use connection pooling to handle multiple login attempts concurrently without overwhelming the database.

---

#### **5. Explain ACID Properties in Databases**
**Answer:**  
ACID stands for the four essential properties that ensure database transactions are processed reliably:

1. **Atomicity**: A transaction is **all-or-nothing**. If one part of the transaction fails, the entire transaction is rolled back.
2. **Consistency**: The database is always in a valid state after a transaction. It follows all rules (constraints, triggers) to maintain integrity.
3. **Isolation**: Transactions are **isolated** from each other, meaning intermediate states are not visible to other transactions. This prevents race conditions.
4. **Durability**: Once a transaction is committed, the changes are **permanent**, even in the event of a crash.

**Example**:  
If you transfer money from one account to another, both the debit and credit operations must either both succeed or both fail (Atomicity). The account balances must always be valid (Consistency), no other transaction should interfere (Isolation), and the changes should persist after a system failure (Durability).

---

### **Summary Diagram:**

```
ACID Properties:
+------------------+    +--------------------+    +------------------+    +-----------------+
|   Atomicity     |<-->|    Consistency     |<-->|   Isolation      |<-->|   Durability    |
+------------------+    +--------------------+    +------------------+    +-----------------+
   "All or Nothing"        "Valid State"           "No Interference"         "Persistent Data"
```

---
