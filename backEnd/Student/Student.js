const express = require('express');
const router = express.Router();
const connection = require('../config/db');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const multer = require('multer');
const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

const upload = multer({ dest: 'uploads/' }); // Directory for temporary storage of uploaded files

// Upload and save data from Excel file
router.post('/upload', upload.single('file'), async (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).send('No file uploaded');
  }

  try {
    const workbook = xlsx.readFile(file.path);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const rows = xlsx.utils.sheet_to_json(sheet);
    for (const row of rows) {
      const { studentId, firstName, lastName, Grade, Password, schoolId, userName } = row;
      if (!firstName || !lastName || !studentId || !userName || !Grade || !schoolId || !Password) {
        return res.status(400).send('firstName, lastName, studentId, userName, Grade, schoolId, and Password are required');
      }
      console.log('Original Password:', Password);
      const hashedPassword = await bcrypt.hash(Password, saltRounds);
      const insertStudentQuery = `
        INSERT INTO Student (studentId, firstName, lastName, userName, Password, Grade, schoolId)
        VALUES (?, ?, ?, ?, ?, ?, ?);
      `;
      connection.query(insertStudentQuery, [studentId, firstName, lastName, userName, hashedPassword, Grade, schoolId], (err, results) => {
        if (err) {
          if (err.code === 'ER_DUP_ENTRY') {
            console.error('Duplicate studentId:', studentId);
            return res.status(400).send(`Duplicate studentId: ${studentId}`);
          } else {
            console.error('Error inserting student:', err);
            return res.status(500).send('Error inserting student');
          }
        }
      });
    }

    fs.unlink(file.path, (err) => {
      if (err) console.error('Error deleting temporary file:', err);
    });

    res.status(201).send({ status: 'All records stored successfully' });
  } catch (err) {
    console.error('Error processing file:', err);
    res.status(500).send('Error processing file');
  }
});
router.post('/login', async (req, res) => {
  const { userName, Password } = req.body;
  console.log(req.body);

  if (!userName || !Password) {
    return res.status(400).send('userName and Password are required');
  }

  const findUserQuery = `
    SELECT userName, Password, schoolId FROM Student WHERE userName = ?;
  `;

  try {
    const [results] = await connection.query(findUserQuery, [userName]);
    if (results.length === 0) {
      console.log('No user found with userName:', userName);
      return res.status(400).send('Invalid userName or Password');
    }

    const user = results[0];
    console.log('User found:', user);

    const match = await bcrypt.compare(Password, user.Password);
    console.log('Password match result:', match);

    if (!match) {
      console.log('Passwords do not match:', Password, user.Password);
      return res.status(400).send('Invalid userName or Password');
    }

    res.status(200).send({ 
      status: 'Login successful',
      userId: user.schoolId
    });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
