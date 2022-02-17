const { createTask, getAllTasks } = require('../controllers/task.controllers');

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({message: 'funcionando'});
});

router.get('/tasks', getAllTasks);
router.post('/tasks', createTask);

module.exports = router;