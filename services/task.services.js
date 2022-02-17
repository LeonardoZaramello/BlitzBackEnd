const { validateFieldsCreateTask } = require('../utils/joiValidations');
const { createTaskModel, findAllTasksModel } = require('../models/task.models');

const findAllTasksService = async (taskName, createdDate, status) => {
  const allTasks = await findAllTasksModel();

  return allTasks;
};

const createTaskService = async (taskName, createdDate, status) => {
  validateFieldsCreateTask(taskName, createdDate, status);

  const insertedTask = await createTaskModel(taskName, createdDate, status);

  return { taskName, createdDate, status };
};

module.exports = { createTaskService, findAllTasksService };