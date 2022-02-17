const taskService = require('../services/task.services');

const getAllTasks = async (req, res, next) => {
  try {
    const allTasks = await taskService.findAllTasksService();

    return res.status(200).json(allTasks);
  } catch (error) {
    console.log('post create task');
    return next(error);
  }
};

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

module.exports = { createTask, getAllTasks };