const express = require('express');
const router = express.Router();
const connection = require('../config/db');

router.post('/activity', async (req, res) => {
  const { userStatus, userId } = req.body;
  if (!userId || !userStatus) {
    return res.status(400).json({ error: 'userId and userStatus are required' });
  }
  try {
    const checkUserStatus = `
      SELECT * FROM Status WHERE userId = ?;
    `;
    connection.query(checkUserStatus, [userId], (err, results) => {
      if (err) {
        console.error('Error checking user status:', err);
        return res.status(500).send('Error checking user status');
      }
      if (results.length > 0) {
        const updateUserStatus = `
          UPDATE Status
          SET userStatus = ?
          WHERE userId = ?;
        `;
        connection.query(updateUserStatus, [userStatus, userId], (err, updateResults) => {
          if (err) {
            console.error('Error updating user activity:', err);
            return res.status(500).send('Error updating user activity');
          }
          res.status(200).send({ status: 'User activity updated successfully' });
        });
      } else {
        // Record does not exist, insert a new one with the provided userStatus or default to "tab hidden"
        const insertUserStatus = `
          INSERT INTO Status (userStatus, userId)
          VALUES (?, ?);
        `;
        const statusToInsert = userStatus === 'tab visible' ? 'tab visible' : 'tab hidden';
        connection.query(insertUserStatus, [statusToInsert, userId], (err, insertResults) => {
          if (err) {
            console.error('Error inserting user activity:', err);
            return res.status(500).send('Error inserting user activity');
          }
          res.status(201).send({ status: 'User activity stored successfully' });
        });
      }
    });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Error processing request');
  }
});

module.exports = router;
