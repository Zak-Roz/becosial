const { checkValidUserId, checkValidPositiveNum } = require('../helpers')

const changeBalance = (req, res, next) => {
  try {
    const { user_id, amount, description } = req.body;

    checkValidUserId(user_id);
    checkValidPositiveNum(amount);
    
    req.body = { user_id, amount, description };
    next();
  } catch (err) {
    throw err;
  }
};

module.exports = changeBalance;
