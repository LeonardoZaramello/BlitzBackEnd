const errorMessage = (message, error) => {
  const defaultMessage = {
    message,
    status: error,
  };
  throw (defaultMessage);
};

module.exports = { errorMessage }