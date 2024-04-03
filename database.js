const { Pool } = require('pg');
require('dotenv').config();

// Get database connection string from environment variables
const connectionString = process.env.DB_CONNECTION_STRING;

// Create a new PostgreSQL Pool instance
const pool = new Pool({
 connectionString: connectionString,
});

// Test the database connection
async function connection() {
 const connect = await pool.query('SELECT NOW()', (err, res) => {

  if (err) {
   console.log('Error connecting to the database:', err);
  } else {
   console.log('Connected to the database at:', res.rows[0].now);
  }

 });
}

module.exports = { connection };