const connect = require('./connection');

const createTaskModel = async (taskName, createdDate, status) => {
  const conn = await connect();

  const createdTask = conn.collection('tasks').insertOne({ taskName, createdDate, status });

  return createdTask;
};

module.exports = { createTaskModel };