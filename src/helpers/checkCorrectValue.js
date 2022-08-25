const checkCorrectValue = (sorterElement) => {
  try {

    if (typeof sorterElement !== 'string') {
      const error = new Error(`Sorter element must be a string!`);
      error.statusCode = 400;
      throw error;
    }
    
    if (sorterElement !== 'DESC' && sorterElement !== 'ASC') {
      const error = new Error(`Sorter element must be "DESC" or "ASC"!`);
      error.statusCode = 400;
      throw error;
    }
  } catch(err) {
    throw err;
  }
};

module.exports = checkCorrectValue;