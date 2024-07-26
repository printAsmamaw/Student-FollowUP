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
router.post('/attendance', async (req, res) => {
  const { attendance } = req.body;

  if (!attendance || !Array.isArray(attendance)) {
    return res.status(400).send('Attendance data is required and must be an array');
  }

  const insertAttendanceQuery = `
    INSERT INTO Attendance (studentId, date, status, savedBy)
    VALUES (?, ?, ?, ?);
  `; 
  try {
    const conn = await connection.getConnection();
    await conn.beginTransaction();

    const tasks = attendance.map(record => {
      return conn.query(insertAttendanceQuery, [
        record.studentId,
        record.date,
        record.status ? 'Present' : 'Absent',
        record.savedBy
      ]);
    });

    await Promise.all(tasks);
    await conn.commit();
    conn.release();

    res.status(201).send({ status: 'Attendance records stored successfully' });
  } catch (err) {
    console.error('Error inserting attendance records:', err);
    res.status(500).send('Error inserting attendance records');
  }
});
router.get('/students', async (req, res) => {
  try {
    const [students] = await connection.query('SELECT studentId, firstName FROM student');
    res.json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).send('Internal Server Error');
  }
});
router.get('/lastAttendance', async (req, res) => {
  try {
    const [attendanceRecords] = await connection.query(`
      SELECT a.studentId, s.name, a.date, a.status
      FROM Attendance a
      JOIN Students s ON a.studentId = s.id
      WHERE (a.studentId, a.date) IN (
        SELECT studentId, date
        FROM Attendance
        ORDER BY date DESC
        LIMIT 3
      )
      ORDER BY a.studentId, a.date DESC
    `);
    res.json(attendanceRecords);
  } catch (error) {
    console.error('Error fetching attendance records:', error);
    res.status(500).send('Internal Server Error');
  }
}); 
router.post('/AddQuestion', async (req, res) => {
  const { question, choiceA, choiceB, choiceC, choiceD, correctAnswer, choiceFlag } = req.body;

  if (!question || !choiceA || !choiceB || !choiceC || !choiceD || !correctAnswer || !choiceFlag) {
    return res.status(400).send('All fields are required');
  }
  const insertQuestionQuery = `
    INSERT INTO Question (question, choiceA, choiceB, choiceC, choiceD, correctAnswer, choiceFlag)
    VALUES (?, ?, ?, ?, ?, ?, ?);
  `;
  try {
    const [results] = await connection.query(insertQuestionQuery, [question, choiceA, choiceB, choiceC, choiceD, correctAnswer, choiceFlag]);
    res.status(201).send({ status: 'Question inserted successfully', id: results.insertId });
  } catch (err) {
    console.error('Error inserting question:', err);
    res.status(500).send('Error inserting question');
  }
});
router.get('/questions', async (req, res) => { 
  const fetchQuestionsQuery = `
    SELECT id, question, choiceA, choiceB, choiceC, choiceD, correctAnswer, choiceFlag
    FROM Question;
  `;

  try {
    const [results] = await connection.query(fetchQuestionsQuery);
    res.status(200).json(results);
  } catch (err) {
    console.error('Error fetching questions:', err);
    res.status(500).send('Error fetching questions');
  }
});
module.exports = router;
