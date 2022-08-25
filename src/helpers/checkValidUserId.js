const checkValidUserId = (user_id, user = 'user_id') => {
  try {
    if (!user_id) {
      const error = new Error(`"${user}" is a require for this operation!`);
      error.statusCode = 400;
      throw error;
    }
  
    if (typeof user_id !== 'string' && typeof user_id !== 'number') {
      const error = new Error(`"${user}" must be a string or number!`);
      error.statusCode = 400;
      throw error;
    }
  
    if (!/^[a-z\d]+$/.test(user_id)) {
      const error = new Error(`"${user}" must be only numbers or lowercase letters with numbers!`);
      error.statusCode = 400;
      throw error;
    }
  } catch(err) {
    throw err;
  }
}

module.exports = checkValidUserId;