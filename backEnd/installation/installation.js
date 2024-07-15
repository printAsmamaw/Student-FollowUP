const express = require('express');
const router = express.Router();
const connection = require('../config/db');

// Route to handle creating the Teacher table
router.post('/Teacher', (req, res) => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS Teacher (
      teacherId VARCHAR(255) PRIMARY KEY,
      firstName VARCHAR(50),
      lastName VARCHAR(50),
      Password VARCHAR(50)
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

// Route to handle creating the Parent table
router.post('/Parent', (req, res) => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS Parent (
      parentId VARCHAR(255) PRIMARY KEY,
      firstName VARCHAR(50),
      lastName VARCHAR(50),
      Password VARCHAR(50)
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

// Route to handle creating the Message table
router.post('/Message', (req, res) => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS Message (
      messageID INT AUTO_INCREMENT PRIMARY KEY,
      senderId VARCHAR(255) NOT NULL,
      receiverId VARCHAR(255) NOT NULL,
      content VARCHAR(255),
      filePath VARCHAR(255),
      timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      messageStatus VARCHAR(50),
      FOREIGN KEY (senderId) REFERENCES Teacher(teacherId),
      FOREIGN KEY (receiverId) REFERENCES Parent(parentId)
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

module.exports = router;
