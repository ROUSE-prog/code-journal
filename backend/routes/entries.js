const express = require('express');
const router = express.Router();
const { logEntry, getSummaries } = require('../controllers/entryController');

// Log new documentation entry
router.post('/log', logEntry);

// Fetch recent summaries
router.get('/summary', getSummaries);

module.exports = router;
