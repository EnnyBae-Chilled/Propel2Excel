const express = require('express');
const router = express.Router();
const Application = require('../models/Application');

// Submit Application
router.post('/', async (req, res) => {
  const { name, email, details } = req.body;

  try {
    const newApplication = new Application({
      name,
      email,
      details
    });

    await newApplication.save();
    res.json({ msg: 'Application submitted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
