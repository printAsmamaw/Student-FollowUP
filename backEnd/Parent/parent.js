const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const connection = require('../config/db');
router.post('/add', (req, res) => {
  const { firstName, lastName, password } = req.body;

  if (!firstName || !lastName || !password) {
    return res.status(400).send('firstName, lastName, and password are required');
  }

  const parentId = uuidv4();
  const insertParentQuery = `
    INSERT INTO Parent (parentId, firstName, lastName, password)
    VALUES (?, ?, ?, ?);
  `;

  connection.query(insertParentQuery, [parentId, firstName, lastName, password], (err, results) => {
    if (err) {
      console.error('Error inserting parent:', err);
      res.status(500).send('Error inserting parent');
      return;
    }
    res.status(201).send({ status: 'Parent stored successfully', parentId });
  });
});
router.post('/sendMessage', (req, res) => {
  const { parentId, teacherId, content } = req.body;
  if (!parentId || !teacherId || !content) {
    return res.status(400).send('parentId, teacherId, and content are required');
  }
  const messageId = uuidv4();
  const insertMessageQuery = `
    INSERT INTO Message (messageId, senderId, receiverId, sentBy, content, timestamp, messageStatus)
    VALUES (?, ?, ?, ?, ?, NOW(), 'unread');
  `;
  connection.query(insertMessageQuery, [messageId, teacherId, parentId, parentId, content], (err, results) => {
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
    if (message.sentBy !== receiverId) {
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