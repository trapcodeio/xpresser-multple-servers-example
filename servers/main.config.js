// Import merge from lodash
const {merge} = require('lodash');
// Import General config
let config = require('../config');

// Merge config with configurations domain.com will need.
config = merge(config, {
    name: 'Main Server',

    server: {
        domain: 'localhost',
        // Api runs in 3001
        port: 3000,
    },
})


// Export merged config
module.exports = config;