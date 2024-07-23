const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to handle CORS
app.use(cors());

// Root route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Use the installation route
const installationRoute = require('./installation/installation');
app.use('/installation', installationRoute);

// Use the parent route
const parentRoute = require('./parent/parent');
app.use('/parent', parentRoute);

// Use the Teacher route
const teacherRoute = require('./Teacher/Teacher');
app.use('/teacher', teacherRoute);

// Use the Student route
const studentRoute = require('./Student/Student');
app.use('/student', studentRoute);

// Use the School route
const schoolRoute = require('./School/School');
app.use('/school', schoolRoute); 

// Use the School route
const userRoute = require('./Users/Users');
app.use('/Users', userRoute); 

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
