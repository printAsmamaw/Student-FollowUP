const express = require('express');
const router = express.Router();
const connection = require('../config/db');

// Create School Table
router.post('/School', (req, res) => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS School (
      schoolId VARCHAR(255) PRIMARY KEY,
      Address VARCHAR(255) NOT NULL,
      schoolName VARCHAR(255) NOT NULL,
      adminName VARCHAR(255) NOT NULL,
      Password VARCHAR(255) NOT NULL,
      schoolLevel VARCHAR(255) NOT NULL
    );
  `;
  connection.query(createTableQuery, (err, results) => {
    if (err) {
      console.error('Error creating School table:', err);
      res.status(500).send('Error creating School table');
      return;
    }
    res.status(201).send('School table created successfully');
  });
});


// Create Student Table
router.post('/Student', (req, res) => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS Student (
      studentId VARCHAR(255) PRIMARY KEY,
      firstName VARCHAR(50),
      lastName VARCHAR(50),
      userName VARCHAR(50),
      Password VARCHAR(255),
      Grade VARCHAR(255) NOT NULL,
      schoolId VARCHAR(255),
      FOREIGN KEY (schoolId) REFERENCES school(schoolId)
    );
  `;
  connection.query(createTableQuery, (err, results) => {
    if (err) {
      console.error('Error creating Student table:', err);
      res.status(500).send('Error creating Student table');
      return;
    }  
    res.status(201).send('Student table created successfully');
  });
});

// Create Teacher Table
router.post('/Teacher', (req, res) => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS Teacher (
      teacherId VARCHAR(255) PRIMARY KEY,
      firstName VARCHAR(50),
      lastName VARCHAR(50),
      Password VARCHAR(255)
    );
  `;
  connection.query(createTableQuery, (err, results) => {
    if (err) {
      console.error('Error creating Teacher table:', err);
      res.status(500).send('Error creating Teacher table');
      return;
    }
    res.status(201).send('Teacher table created successfully');
  });
});
// Create Attendance Table
router.post('/Attendance', (req, res) => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS Attendance (
      savedBy VARCHAR(255),
      studentId VARCHAR(50),
      Date VARCHAR(50),
      Status VARCHAR(255)
    );
  `;
  connection.query(createTableQuery, (err, results) => {
    if (err) {
      console.error('Error creating Attendance table:', err);
      res.status(500).send('Error creating Attendance table');
      return;
    }
    res.status(201).send('Attendance table created successfully');
  });
});
// router.post('/Attendance', async (req, res) => {
//   const createTableQuery = `
//     CREATE TABLE IF NOT EXISTS Attendance (
//       savedBy VARCHAR(255),
//       studentId VARCHAR(50),
//       Date VARCHAR(50),
//       Status VARCHAR(255)
//     );
//   `;

//   try {
//     const [results] = await connection.query(createTableQuery);
//     res.status(201).send('Attendance table created successfully');
//   } catch (err) {
//     console.error('Error creating Attendance table:', err);
//     res.status(500).send('Error creating Attendance table');
//   }
// });
router.post('/InsertQuestion', async (req, res) => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS Question (
      id INT AUTO_INCREMENT PRIMARY KEY,
      question VARCHAR(255),
      choiceA VARCHAR(255),
      choiceB VARCHAR(255),
      choiceC VARCHAR(255),
      choiceD VARCHAR(255),
      correctAnswer VARCHAR(255),
      choiceFlag VARCHAR(255)
    );
  `;

  try {
    const [results] = await connection.query(createTableQuery);
    res.status(201).send('Question table created successfully');
  } catch (err) {
    console.error('Error creating question table:', err);
    res.status(500).send('Error creating question table');
  }
});

// Create Parent Table
router.post('/Parent', (req, res) => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS Parent (
      parentId VARCHAR(255) PRIMARY KEY,
      firstName VARCHAR(50),
      lastName VARCHAR(50),
      Password VARCHAR(255),
      phoneNo VARCHAR(50),
      studentId VARCHAR(255),
      schoolId VARCHAR(255),
      FOREIGN KEY (studentId) REFERENCES Student(studentId),
      FOREIGN KEY (schoolId) REFERENCES school(schoolId)
    );
  `;

  connection.query(createTableQuery, (err, results) => {
    if (err) {
      console.error('Error creating Parent table:', err);
      res.status(500).send('Error creating Parent table');
      return;
    }
    res.status(201).send('Parent table created successfully');
  });
});
router.post('/Message', (req, res) => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS Message (
      messageId VARCHAR(255) PRIMARY KEY,
      senderId VARCHAR(255) NOT NULL,
      receiverId VARCHAR(255) NOT NULL,
      sentBy VARCHAR(255) NOT NULL,
      content VARCHAR(255),
      filePath VARCHAR(255),
      timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      messageStatus VARCHAR(50),
      FOREIGN KEY (senderId) REFERENCES Teacher(teacherId)
    );
  `;
  connection.query(createTableQuery, (err, results) => {
    if (err) {
      console.error('Error creating Message table:', err);
      res.status(500).send('Error creating Message table');
      return;
    }
    res.status(201).send('Message table created successfully');
  });
});
router.post('/Status', (req, res) => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS Status (
      userStatus VARCHAR(50),
      userId VARCHAR(50) 
    );
  `;
  connection.query(createTableQuery, (err, results) => {
    if (err) {
      console.error('Error creating Status table:', err);
      res.status(500).send('Error creating Status table');
      return;
    }
    res.status(201).send('Status table created successfully');
  });
});

module.exports = router;
