const express = require('express');
const app = express();
const port = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Use the installation route
const installationRoute = require('./installation/installation');
app.use('/installation', installationRoute);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
