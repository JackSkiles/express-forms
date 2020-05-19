const express = require('express');

const router = express.Router();

// GET /contact
router.get('/', (req, res) => {
  res.render('contact', {
    title: "Contact Me. Please. I'm lonely.",
    submitted: false,
  });
});

// POST /contact
router.post('/', (req, res) => {
  res.render('contact', {
    title: 'Thank You',
    submitted: true,
  });
});

module.exports = router;
