// routes/entries.js
const express = require('express');
const router = express.Router();
const { logEntry, getSummaries } = require('../controllers/entryController');
const authenticateToken = require('../authMiddleware'); // Import the middleware

// Protect the log route and summary route with the authentication middleware
router.post('/log', authenticateToken, logEntry);
router.get('/summary', authenticateToken, getSummaries);

module.exports = router;
