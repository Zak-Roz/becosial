const { Controller } = require('./controller');
const { TransactionService } = require('./../services/transactionService');
const { Wallet, Logs } = require('./../models');
const autoBind = require('auto-bind');

const wallet = new Wallet().getInstance();
const logs = new Logs().getInstance();

const transactionService = new TransactionService(wallet, logs);

class transactionController extends Controller {
  constructor(service, logs) {
    super(service, logs);
    autoBind(this);
  }
}

module.exports = new transactionController(transactionService, logs);
