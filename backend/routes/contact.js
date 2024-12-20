const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @route POST /api/contact
// @desc Save contact form data
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validate fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, Email, and Message are required.' });
    }

    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact saved successfully.' });
  } catch (err) {
    console.error('Error saving contact:', err);
    res.status(500).json({ error: 'Server error.' });
  }
});

module.exports = router;
