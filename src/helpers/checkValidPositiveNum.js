const checkValidPositiveNum = (number, name = 'amount') => {
  try {
    if (!number) {
      const error = new Error(`"${name}" is a require for this operation!`);
      error.statusCode = 400;
      throw error;
    }

    if (typeof number !== 'number') {
      const error = new Error(`"${name}" must be a number!`);
      error.statusCode = 400;
      throw error;
    }
    
    if (number <= 0) {
      const error = new Error(`"${name}" must be greater than 0!`);
      error.statusCode = 400;
      throw error;
    }
  } catch(err) {
    throw err;
  }
};

module.exports = checkValidPositiveNum;