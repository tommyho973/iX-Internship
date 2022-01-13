const express = require('express');

const taskController = require('../controllers/task');

const router = express.Router();

router.get('/tasks', taskController.getTasks);
router.post('/task', taskController.createTask);
router.delete('/:id', taskController.deleteTask);
router.put('/:id', taskController.updateTask);

module.exports = router;