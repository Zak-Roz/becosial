const mongoose = require('mongoose');

class Logs {
  initSchema() {
    const schema = new mongoose.Schema(
      {
        user_id: {
          type: String,
        },
        balance: {
          type: Number,
        },
        description: {
          type: String,
        },
        date: {
          type: Date,
        },
        system_description: {
          type: String,
        },
      },
      { timestamps: false, versionKey: false }
    );
    try {
      mongoose.model('logs', schema);
    } catch (e) {}
  }

  getInstance() {
    this.initSchema();
    return mongoose.model('logs');
  }
}

module.exports = { Logs };
