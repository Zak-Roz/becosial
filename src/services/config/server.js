const express = require('express');
const bodyParser = require('body-parser');
const { setRoutes } = require('./routes');
const server = express();

server.use(bodyParser.json());
setRoutes(server);

module.exports = { server };
