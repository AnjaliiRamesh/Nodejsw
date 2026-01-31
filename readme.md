# Node js Architecture
Node.js follows a single-threaded, event-driven, non-blocking architecture.
When a client sends a request, Node.js processes it on the main thread.
If the request involves a non-blocking operation, it is handled asynchronously and the event loop continues processing other requests.
If the request involves a blocking operation like file system access or cryptographic work, it is offloaded to the libuv thread pool.
Once the operation is completed, its callback is pushed to the event queue and executed by the event loop.
This architecture allows Node.js to handle a large number of concurrent connections efficiently without creating a new thread for each request.

Node.js handles thousands of users on a single main thread
The event loop runs on a single main thread, so if it executes blocking operations, the entire server would stop responding.
That’s why blocking tasks are delegated to the thread pool, allowing the event loop to keep handling other incoming requests without delay.

The event loop starts the non-blocking operation.

The actual work is handled by the OS (not the event loop).

When the work finishes, the event loop picks up the callback/promise and sends the response.

So:
👉 Non-blocking work happens outside the event loop,
👉 but its completion is handled by the event loop.

One correction: 8 CPU cores don't necessarily mean we can only assign 8 threads. We can assign many more threads, but if the number of threads exceeds the number of cores, the CPU will context switch between them, leading to performance degradation. This happens because each thread consumes system memory  in the form of a Thread Control Block (TCB). If frequent Context Switches occur, the CPU core has to frequently read and write the TCB from main memory  to the CPU registers, which can degrade the performance.



Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

# Middleware
Middleware functions can perform the following tasks:

Execute any code.
Make changes to the request and the response objects.
End the request-response cycle.
Call the next middleware function in the stack.

If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.