const express = require('express');
const cors = require('cors');
const connectDB = require('./database');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

app.get('/', (req, res) => {
  res.json("Welcome to my app");
});


const habitRoutes = require('./routes/habitRoutes');
app.use('/api/habits', habitRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
