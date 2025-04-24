const mysql = require('mysql2/promise');
require('dotenv').config();

const db = mysql.createPool({
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
});
db.getConnection()
  .then(() => console.log('✅ MySQL DB connected!'))
  .catch((err) => console.error('❌ MySQL connection failed:', err));


module.exports = db;
