const autoBind = require('auto-bind');
const fetch = require('node-fetch');
const { HttpResponse, throwError, addLog } = require('../helpers');
const { APIKEY } = require('./config/config').getConfig();

class Service {
  constructor(model, logs) {
    this.model = model;
    this.logs = logs;
    autoBind(this);
  }

  async getBalanceByUserId({ user_id, currency }) {
    try {
      const item = await this.model.findOne({ user_id });

      if (!item || (Array.isArray(item) && !item?.length)) {
        throwError(404, 'User not found');
      }

      if (currency) {
        const response = await fetch(
          `https://api.apilayer.com/exchangerates_data/convert?to=${currency}&from=USD&amount=${item.balance}&apikey=${APIKEY}`
        );
        if (!response.ok) {
          throwError(response.status, await response.text());
        }
        const data = await response.json();
        const result = { ...data.query, result: data.result, user_id };
        return new HttpResponse(result);
      }

      return new HttpResponse(item);
    } catch (errors) {
      throw errors;
    }
  }

  async updateWallet(user_id, amount) {
    try {
      let item = await this.model.findOne({ user_id });
      if (item) {
        if (item.balance + amount < 0) {
          throwError(400, 'There are not enough funds in the wallet.');
        }
        item.balance += amount;
      } else {
        if (amount > 0) {
          item = await this.model.create({ user_id, balance: amount });
        } else {
          throwError(404, 'User not found');
          throw error;
        }
      }

      if (item) {
        await item.save();
        return item;
      }
      throwError(500, 'Something wrong happened');
    } catch (error) {
      throw error;
    }
  }

  async enrollmentByUserId(user_id, amount, description = '') {
    try {
      const item = await this.updateWallet(user_id, amount);
      await addLog({
        logs: this.logs,
        user_id,
        balance: item.balance,
        description,
        system_description: `Replenishment of the online wallet of the user "${user_id}"`,
      });
      return new HttpResponse(item);
    } catch (error) {
      throw error;
    }
  }

  async withdrawalByUserId(user_id, amount, description = '') {
    try {
      const item = await this.updateWallet(user_id, -amount);
      await addLog({
        logs: this.logs,
        user_id,
        balance: item.balance,
        description,
        system_description: `Debiting from the online wallet of the user "${user_id}"`,
      });
      return new HttpResponse(item);
    } catch (error) {
      throw error;
    }
  }

  async p2p(sender, recipient, amount, description = '') {
    try {
      const senderInfo = await this.updateWallet(sender, -amount);
      const recipientInfo = await this.updateWallet(recipient, amount);

      await addLog({
        logs: this.logs,
        user_id: sender,
        balance: senderInfo.balance,
        description,
        system_description: `Money transfer to the user "${recipient}"`,
      });

      await addLog({
        logs: this.logs,
        user_id: recipient,
        balance: recipientInfo.balance,
        description,
        system_description: `Receiving funds from the user "${sender}"`,
      });

      return new HttpResponse({
        senderBalance: senderInfo.balance,
        recipientBalance: recipientInfo.balance,
        transactionStatus: 'success',
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = { Service };
