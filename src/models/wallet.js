const mongoose = require('mongoose');

class Wallet {
  initSchema() {
    const schema = new mongoose.Schema(
      {
        user_id: {
          type: String,
        },
        balance: {
          type: Number,
        },
      },
      { timestamps: false, versionKey: false }
    );
    try {
      mongoose.model('wallet', schema);
    } catch (e) {}
  }

  getInstance() {
    this.initSchema();
    return mongoose.model('wallet');
  }
}

module.exports = { Wallet };
