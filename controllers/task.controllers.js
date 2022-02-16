const taskService = require('../services/task.services');

const createTask = async (req, res, next) => {
  try {
    const { taskName, createdDate, status } = req.body;

    const newTask = await taskService.createTaskService(taskName, createdDate, status);

    return res.status(201).json(newTask);
  } catch (error) {
    console.log('post create task');
    return next(error);
  }
};

module.exports = { createTask };