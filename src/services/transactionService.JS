const { Service } = require('./service');

class TransactionService extends Service {
  constructor(model, logs) {
    super(model, logs);
  }
}

module.exports = { TransactionService };
