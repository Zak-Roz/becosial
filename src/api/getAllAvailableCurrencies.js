const fetch = require('node-fetch');
const { APIKEY } = require('../services/config/config').getConfig();
const { HttpResponse, throwError } = require('../helpers');

async function getAllAvailableCurrencies() {
  try {
    const response = await fetch(
      `https://api.apilayer.com/exchangerates_data/symbols?apikey=${APIKEY}`
    );
    if (!response.ok) {
      throwError(response.status, await response.text());
    }
    const data = await response.json();
    return new HttpResponse(data);
  } catch (err) {
    throw err;
  }
}

module.exports = getAllAvailableCurrencies;