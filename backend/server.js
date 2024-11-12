require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

console.log('Database URL:', process.env.DATABASE_URL);

const authRoutes = require('./routes/auth');
const entryRoutes = require('./routes/entries');

app.use(express.json());

// Mount Routes
app.use('/api/auth', authRoutes);
app.use('/api/entries', entryRoutes);

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    console.log('Request Body:', req.body);
    res.on('finish', () => {
      console.log('Response Status:', res.statusCode);
    });
    next();
  });
  

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
