const express = require('express');

const suggestionController = require('../controllers/suggestion');

const router = express.Router();

router.get('/suggestions', suggestionController.getSuggestions);
router.post('/suggestion', suggestionController.createSuggestion);
router.delete('/:id', suggestionController.deleteSuggestion);
router.put('/:id', suggestionController.updateSuggestion);

module.exports = router;