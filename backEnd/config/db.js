const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'studentFollowUp'
});

(async () => {
  try {
    const conn = await connection.getConnection();
    console.log('Connected to MySQL');
    conn.release();
  } catch (err) {
    console.error('Error connecting to MySQL:', err);
  }
})();

module.exports = connection;
