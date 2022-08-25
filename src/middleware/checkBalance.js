const { checkValidUserId } = require('../helpers')


const checkBalance = (req, res, next) => {
  try {
    const { user_id } = req.body;
    const { currency } = req.query;

    checkValidUserId(user_id);

    if(currency && (typeof currency !== 'string' || currency.length !== 3)) {
      const error = new Error('"currency" must be a string of 3 letters');
      error.statusCode = 400;
      throw error;
    }

    req.body = { user_id };
    req.query = currency ? { currency: currency.toLowerCase() } : {};
    next();
  } catch (err) {
    throw err;
  }
};

module.exports = checkBalance;
