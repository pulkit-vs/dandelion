const argv = require('./argv');
console.log('callling port')
module.exports = parseInt(argv.port || process.env.PORT || '3001', 10);
