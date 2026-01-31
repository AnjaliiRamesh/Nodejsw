const express = require('express');
const users = require("./MOCK_DATA.json")
const app = express();
const port = 3000;

// Add Content Security Policy to allow DevTools local probe and app connections
app.use((req, res, next) => {
  // Allow same-origin resources and localhost devtools probe for connect-src
  res.setHeader('Content-Security-Policy', "default-src 'self'; connect-src 'self' http://localhost:3000");
  next();
});

//Routes
app.get("/users", (req, res) => {
    const html = `
    <ul>
      ${users.map(user => `<li>${user.first_name}</li>`).join('')}
    </ul>
    `;
    res.send(html);
}
);

app.get("/api/users", (req, res) => {
  return res.json(users);
}
);

//dynamic path parameter


app.route("/api/users/:id")
.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);   
    const user = users.find(user => user.id === id);
    return res.json(user);
}).post((req, res) => {
  return res.json({ status: "POST request pending" });   
}).patch("/api/users/:id", (req, res) => {
  return res.json({ status: "PATCH request pending" });
}).delete("/api/users/:id", (req, res) => {
  return res.json({ status: "DELETE request pending" });
});




// Route to satisfy Chrome DevTools probe and prevent a 404 that uses finalhandler's restrictive CSP
app.get('/.well-known/appspecific/com.chrome.devtools.json', (req, res) => {
  // 204 No Content is fine — DevTools just checks for existence
  res.status(204).send();
});

// Catch-all 404 handler: set CSP and return a controlled 404 response so finalhandler doesn't overwrite headers
app.use((req, res) => {
  res.setHeader('Content-Security-Policy', "default-src 'self'; connect-src 'self' http://localhost:3000");
  res.status(404).send('404 Not Found');
});

// Error handler to ensure CSP header is present on error responses
app.use((err, req, res, next) => {
  console.error(err);
  res.setHeader('Content-Security-Policy', "default-src 'self'; connect-src 'self' http://localhost:3000");
  res.status(err.status || 500).send('Internal Server Error');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
