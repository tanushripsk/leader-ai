const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoutes = require('./routes/contact');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../build")));
app.use('/api/contact', contactRoutes);

// MongoDB Connection
mongoose
  .connect('mongodb://localhost:27017/Leader-ai')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

  app.use(express.static(path.join(__dirname, "../build")));
// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
