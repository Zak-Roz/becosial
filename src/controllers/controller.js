const autoBind = require('auto-bind');
const { getLogs, getAllAvailableCurrencies } = require('../api');

class Controller {
  constructor(service, logs) {
    this.service = service;
    this.logs = logs;
    autoBind(this);
  }

  async getAllAvailableCurrencies(req, res, next) {
    try {
      const response = await getAllAvailableCurrencies();

      return res.status(response.statusCode).json(response);
    } catch (e) {
      next(e);
    }
  }

  async getLogs(req, res, next) {
    let { page, limit, sortBy, user_id } = req.body;
    
    try {
      const response = await getLogs({ logs: this.logs, page, limit, sortBy, user_id });

      return res.status(response.statusCode).json(response);
    } catch (e) {
      next(e);
    }
  }

  async getBalanceByUserId(req, res, next) {
    const { user_id } = req.body;
    const { currency } = req.query;

    try {
      const response = await this.service.getBalanceByUserId({ user_id, currency });

      return res.status(response.statusCode).json(response);
    } catch (e) {
      next(e);
    }
  }

  async enrollmentByUserId(req, res, next) {
    const { user_id, amount, description } = req.body;

    try {
      const response = await this.service.enrollmentByUserId(user_id, amount, description);

      return res.status(response.statusCode).json(response);
    } catch (e) {
      next(e);
    }
  }

  async withdrawalByUserId(req, res, next) {
    const { user_id, amount, description } = req.body;

    try {
      const response = await this.service.withdrawalByUserId(user_id, amount, description);

      return res.status(response.statusCode).json(response);
    } catch (e) {
      next(e);
    }
  }

  async p2p(req, res, next) {
    const { sender, receiver, amount, description } = req.body;

    try {
      const response = await this.service.p2p(sender, receiver, amount, description);

      return res.status(response.statusCode).json(response);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = { Controller };
