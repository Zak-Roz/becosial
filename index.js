require('dotenv').config();
require('./src/services/config/database');

const { MODE, PORT } = require('./src/services/config/config').getConfig();

console.log(`Mode: ${MODE}`);
console.log(`Port: ${PORT}`);

const { server } = require('./src/services/config/server');

server.listen(PORT).on('error', (err) => {
    console.log('Application failed to start');
    console.error('Error: ', err.message);
    process.exit(0);
}).on('listening', () => {
    console.log('Application Started');
});

module.exports = { server };
