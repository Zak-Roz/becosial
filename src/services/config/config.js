module.exports.getConfig = () => {
  const config = {
    MODE: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 5000,
    MONGO_URL: process.env.MONGO_URL,
    APIKEY: process.env.APIKEY,
  };

  return config;
};
