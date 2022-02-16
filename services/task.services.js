const { validateFieldsCreateTask } = require('../utils/joiValidations');
const { createTaskModel } = require('../models/task.models');

const createTaskService = async (taskName, createdDate, status) => {
  validateFieldsCreateTask(taskName, createdDate, status);

  const insertedTask = await createTaskModel(taskName, createdDate, status);

  return { taskName, createdDate, status };
};

module.exports = { createTaskService };