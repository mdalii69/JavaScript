
## JavaScript Execution Context & Call Stack

### Execution Context

**Key Concepts:**

* Single-Threaded Nature: JavaScript executes code line-by-line in a single thread, handling one task at a time.

**Execution Context Types:**

* Global Execution Context (GEC):
    * Created when the script starts.
    * Includes a global object (window in browsers) and this pointing to it.
* Function Execution Context (FEC):
    * Created each time a function is called.

**Phases of Execution Context:**

* Memory Creation Phase (Hoisting):
    * `var` variables are initialized as `undefined`.
    * `let`/`const` are hoisted but not initialized (Temporal Dead Zone).
    * Functions are stored in full (entire definition).
    * **Example:**

        ```javascript
        val1: uninitialized (TDZ)  // let
        val2: uninitialized (TDZ)
        result1: uninitialized (TDZ)
        result2: uninitialized (TDZ)
        addNum: function definition
        ```

* Execution Phase:
    * Variables are assigned values (e.g., val1 = 10).
    * Functions are executed, creating a new FEC for each call.

---
## Step-by-Step Execution Process


* Example Code:
    ```javascript
    let val1 = 10;
        let val2 = 5;
        function addNum(num1, num2) {
            let total = num1 + num2;
            return total;
        }
        let result1 = addNum(val1, val2);
        let result2 = addNum(3, 4);
    ```

1. Global Execution Context (GEC) Creation:

    * this is set to the global object (e.g., window).

2. Memory Creation Phase:

    * All variables (val1, val2, result1, result2) are hoisted but not initialized (since they use let).

    * Function addNum is stored in memory with its definition.

3. Execution Phase:

    * val1 and val2 are assigned 10 and 5, respectively.

    * First addNum(val1, val2) Call:

        - New Function Execution Context (FEC) is created.

        - Memory Phase for FEC:

            * num1, num2, and total are hoisted (but total is undefined).

        - Execution Phase for FEC:

            * num1 = 10, num2 = 5 (arguments passed).

            * total = 15 is calculated.

            * total is returned to the GEC and assigned to result1.

        - FEC is destroyed after execution.

    * Second addNum(3, 4) Call:

        - Repeat the same steps, returning 7 to result2.

4. Global Context Deletion:

    * Once all code runs, the GEC is removed from the call stack.

---
# Call Stack (LIFO)

* A stack structure that tracks execution contexts.

* Mechanism:

    - When a function is called, its context is pushed onto the stack.

    - When execution finishes, the context is popped off (LIFO: Last-In-First-Out).

* Example Flow for Your Code:
    ```javascript
    1. GEC is pushed.
    2. addNum() FEC is pushed during first call.
    3. addNum() FEC is popped after first call.
    4. addNum() FEC is pushed again during second call.
    5. addNum() FEC is popped after second call.
    6. GEC is popped when script ends.
    ```


