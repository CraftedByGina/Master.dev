In the context of Node.js, a server is a program that listens for incoming network requests and responds to those requests by executing code or returning data. Servers are fundamental to the architecture of web applications and enable communication between clients (mobile apps or websites) and databases or other backend services.

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

### Status Codes

`statusCode` is a way for applications to notify other applications about the status of a request.

- **200–299:** Successful responses.
- **300–399:** Redirection responses. The requested resource may have moved or require another action. Some responses can involve caching.
- **400–499:** Client errors, such as when a user sends a bad request.
- **500–599:** Server errors, when something goes wrong on the server.

### Headers

A header is a collection of key-value pairs. One of the most common headers is `Content-Type`. This tells the client what kind of data is being sent back.

You specify the MIME type, or the type of data, such as `text/plain` or `application/json`.

Headers help the browser understand what kind of data the server is sending.

```javascript
res.setHeader('Content-Type', 'text/plain');
```

### Ports

Servers listen on ports and wait for incoming requests.

A **port** is a number used to identify a specific communication endpoint on a computer. Ports allow network communication to reach the appropriate application or service.

Common development ports include `3000`, `4000`, and `5000`. Deployed websites typically use port `80` for HTTP and port `443` for HTTPS. These ports are usually hidden in the URL when they are the defaults for their protocols.


- `http.createServer()` is used to create an HTTP server, which takes a callback function with `request` and `response` parameters.

- `res.writeHead()` is used to set the status code and headers, and `res.end(html)` is used to send the final HTML content back to the client.

- The `start()` function creates the server using `createServer()`, listens on a specified port, and opens the server address in a browser.

- The content type is set to `'text/html'` to instruct the browser to render the response as HTML.