// controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../db');

// Register function
const register = async (req, res) => {
    const { username, password } = req.body;
    try {
        const userExists = await pool.query(
            'SELECT * FROM users WHERE username = $1',
            [username]
        );

        if (userExists.rows.length > 0) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await pool.query(
            'INSERT INTO users (username, password) VALUES ($1, $2)',
            [username, hashedPassword]
        );
        res.json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Detailed error:', error); // Log the full error object
        res.status(500).json({ error: 'Error creating user' });
    }
};



  

// Login function
const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        if (user.rows.length === 0) {
            return res.status(401).json({ error: 'User not found' });
        }

        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        if (!validPassword) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        const token = jwt.sign(
            { userId: user.rows[0].user_id },
            process.env.JWT_SECRET, // Use the secret key from .env
            { expiresIn: '1h' }
        );
        res.json({ message: 'Logged in successfully', token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Error logging in' });
    }
};

  

module.exports = { register, login };
