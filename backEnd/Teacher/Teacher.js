const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const connection = require('../config/db');

router.post('/add', (req, res) => {
  const { firstName, lastName, password } = req.body;

  if (!firstName || !lastName || !password) {
    return res.status(400).send('firstName, lastName, and password are required');
  }

  const teacherId = uuidv4();
  const insertTeacherQuery = `
    INSERT INTO Teacher (teacherId, firstName, lastName, password)
    VALUES (?, ?, ?, ?);
  `;

  connection.query(insertTeacherQuery, [teacherId, firstName, lastName, password], (err, results) => {
    if (err) {
      console.error('Error inserting teacher:', err);
      res.status(500).send('Error inserting teacher');
      return;
    }
    res.status(201).send({ status: 'Teacher stored successfully', teacherId });
  });
});
router.post('/sendMessage', (req, res) => {
  const { parentId, teacherId, content } = req.body;

  if (!parentId || !teacherId || !content) {
    return res.status(400).send('parentId, teacherId, and content are required');
  }

  const messageId = uuidv4();
  const insertMessageQuery = `
    INSERT INTO Message (messageID, senderId, receiverId, sentBy, content, timestamp, messageStatus)
    VALUES (?, ?, ?, ?, ?, NOW(), 'unread');
  `;

  connection.query(insertMessageQuery, [messageId, teacherId, parentId, teacherId, content], (err, results) => {
    if (err) {
      console.error('Error inserting message:', err);
      res.status(500).send('Error inserting message');
      return;
    }
    res.status(201).send({ status: 'Message stored successfully', messageId });
  });
});
router.post('/updateMessageStatus', (req, res) => {
  const { receiverId, messageId, senderId } = req.body;
  if (!receiverId || !messageId || !senderId) {
    return res.status(400).send('receiverId, messageId, and senderId are required');
  }
  const findMessageQuery = `
    SELECT * FROM message WHERE messageId = ? AND receiverId = ? AND senderId = ?;
  `;
  connection.query(findMessageQuery, [messageId, receiverId, senderId], (err, results) => {
    if (err) {
      console.error('Error finding message:', err);
      res.status(500).send('Error finding message');
      return;
    }
    if (results.length === 0) {
      res.status(404).send('Message not found');
      return;
    }
    const message = results[0];
    if (message.sentBy !== senderId) {
      const updateMessageStatusQuery = `
        UPDATE Message SET messageStatus = 'read' WHERE messageId = ?;
      `;
     connection.query(updateMessageStatusQuery, [messageId], (err, updateResults) => {
        if (err) {
          console.error('Error updating message status:', err);
          res.status(500).send('Error updating message status');
          return;
        }
        res.status(200).send('Message status updated to read');
      });
    } else {
      res.status(200).send('Message status remains unread');
    }
  });
});
module.exports = router;
