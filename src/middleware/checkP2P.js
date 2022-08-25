const { checkValidUserId, checkValidPositiveNum } = require('../helpers')

const checkP2P = (req, res, next) => {
  try {
    const { sender, receiver, amount, description } = req.body;

    checkValidUserId(sender, 'sender');
    checkValidUserId(receiver, 'receiver');
    checkValidPositiveNum(amount);
    
    req.body = { sender, receiver, amount, description };
    next();
  } catch (err) {
    throw err;
  }
};

module.exports = checkP2P;
