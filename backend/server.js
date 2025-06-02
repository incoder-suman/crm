const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const mongoose = require('mongoose');
require('dotenv').config({ path: './config/.env' });

dotenv.config(); // Load .env variables


const app = express();
app.use(cors());
// Middleware
app.use(express.json());

// MongoDB Connection
const connectDatabase = async () => {
  const uri = process.env.DB_URI;
//   console.log("Loaded DB_URI:", process.env.DB_URI);
  if (!uri) {
    console.error("❌ Error: MongoDB URI is missing in .env file!");
    process.exit(1);
  }

  try {
    await mongoose.connect(uri );
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

connectDatabase(); // Call the function to connect DB

// Default route
app.get('/', (req, res) => {
  res.send('CRM backend is running!');
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/dev', require('./routes/manualUser')); // for user creation

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
