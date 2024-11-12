const pool = require('../db');

// Log documentation entry
const logEntry = async (req, res) => {
  const { userId, documentation, summary } = req.body;

  console.log('Received data:', { userId, documentation, summary }); // Log received data

  try {
    const newEntry = await pool.query(
      'INSERT INTO entries (user_id, documentation, summary) VALUES ($1, $2, $3) RETURNING *',
      [userId, documentation, summary]
    );
    console.log('Insert successful:', newEntry.rows[0]); // Log successful insert
    res.json(newEntry.rows[0]);
  } catch (err) {
    console.error('Error logging entry:', err.message); // Log specific error message
    console.error('Full error details:', err);           // Log entire error object
    console.error('Stack trace:', err.stack);            // Log stack trace for debugging
    res.status(500).json({ error: 'Error logging entry', details: err.message });
  }
};

// Fetch recent summaries
const getSummaries = async (req, res) => {
  const userId = parseInt(req.query.userId, 10); // Convert to integer
  console.log('Parsed userId:', userId); // Log parsed userId

  try {
    const summaries = await pool.query(
      'SELECT * FROM entries WHERE user_id = $1 ORDER BY created_at DESC LIMIT 10',
      [userId]
    );
    console.log('Summaries found:', summaries.rows); // Log retrieved rows
    res.json(summaries.rows);
  } catch (err) {
    console.error('Error fetching summaries:', err.message);
    res.status(500).json({ error: 'Error fetching summaries', details: err.message });
  }
};


module.exports = { logEntry, getSummaries };
