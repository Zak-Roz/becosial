const { checkValidUserId, checkValidPositiveNum, checkCorrectValue } = require('../helpers')


const checkLogs = (req, res, next) => {
  try {
    const { page, limit, sortBy, user_id } = req.body;

    checkValidUserId(user_id);
    page && checkValidPositiveNum(page, 'page');
    limit && checkValidPositiveNum(limit, 'limit');

    if (sortBy) {
      if (typeof sortBy !== 'object') {
        const error = new Error(`"sortBy" must be an object!`);
        error.statusCode = 400;
        throw error;
      }
      sortBy?.date && checkCorrectValue(sortBy.date);
      sortBy?.balance && checkCorrectValue(sortBy.balance);
    }

    req.body = { page, limit, sortBy, user_id };
    next();
  } catch (err) {
    throw err;
  }
};

module.exports = checkLogs;
