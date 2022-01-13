const express = require('express');

const contactController = require('../controllers/contact');

const router = express.Router();

router.get('/contacts', contactController.getContacts);
router.post('/contact', contactController.createContact);
router.delete('/:id', contactController.deleteContact);
router.put('/:id', contactController.updateContact);

module.exports = router;