// Import merge from lodash
const {merge} = require('lodash');
// Import General config
let config = require('../config');

// Merge config with configurations api.domain.com will need.
config = merge(config, {
    name: 'Api Server',

    server: {
        domain: 'localhost',
        // Api runs in 3001
        port: 3001,
    },

    paths: {
        // We would want our subdomain to use a different routes file.
        routesFile: 'backend://api-routes.js'
    }
})

// Export merged config
module.exports = config;