const mongoose = require( 'mongoose' );
const config = require( './config' ).getConfig();

class Connection {
  constructor() {
    const url = config.MONGO_URL;
    this.connect(url).then(() => {
      console.log('Database Connected');
    }).catch((err) => {
      console.error('MONGODB ERROR: ', err.message);
    });
  }

  async connect(url) {
    try {
      await mongoose.connect(url);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new Connection();
