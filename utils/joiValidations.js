const Joi = require('joi');
const { errorMessage } = require('./errorHandler');

// https://stackoverflow.com/questions/15491894/regex-to-validate-date-formats-dd-mm-yyyy-dd-mm-yyyy-dd-mm-yyyy-dd-mmm-yyyy
const regexDate = /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/

const createTaskSchema = Joi.object({
  taskName: Joi.string().min(1).required(),
  createdDate: Joi.string().min(1).regex(regexDate).required(),
  status: Joi.string().valid('Pendente', 'Andamento', 'Pronto').required(),
});

const validateFieldsCreateTask = (taskName, createdDate, status) => {
  const { error } = createTaskSchema.validate({ taskName, createdDate, status });

  if (error) {
    errorMessage('Invalid task entries. Try again.', 400);
  }
  return true;
};

module.exports = { validateFieldsCreateTask }