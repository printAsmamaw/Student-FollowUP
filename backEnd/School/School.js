const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const connection = require('../config/db');
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/add', async (req, res) => {
  const { schoolName, Address, schoolLevel, adminName, Password } = req.body;

  if (!Address || !schoolName || !adminName || !schoolLevel || !Password) {
    return res.status(400).send('Address, schoolName, adminName, schoolLevel, and Password are required');
  }

  try {
    const hashedPassword = await bcrypt.hash(Password, saltRounds);
    const schoolId = uuidv4();
    const insertSchoolQuery = `
      INSERT INTO School (schoolId, Address, schoolName, adminName, schoolLevel, Password)
      VALUES (?, ?, ?, ?, ?, ?);
    `;

    connection.query(insertSchoolQuery, [schoolId, Address, schoolName, adminName, schoolLevel, hashedPassword], (err, results) => {
      if (err) {
        console.error('Error inserting school:', err); 
        res.status(500).send('Error inserting school');
        return;
      }
      res.status(201).send({ status: 'School stored successfully', schoolId });
    });
  } catch (err) {
    console.error('Error hashing password:', err);
    res.status(500).send('Error hashing password');
  }
});
module.exports = router;