const connect = require('./connection');

const findAllTasksModel = async (taskName, createdDate, status) => {
  const conn = await connect();

  const allTasks = conn.collection('tasks').find({}).toArray();

  return allTasks;
};

const createTaskModel = async (taskName, createdDate, status) => {
  const conn = await connect();

  const createdTask = conn.collection('tasks').insertOne({ taskName, createdDate, status });

  return createdTask;
};

module.exports = { createTaskModel, findAllTasksModel };