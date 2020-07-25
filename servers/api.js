/**
 * This is the api server xpresser boot file.
 */
const xpresser = require('../xpresser');
// Import api config
const apiConfig = require('./api.config');
// Boot Xpresser using mainConfig
const apiServer = xpresser(apiConfig);

/**
 * Here you can add boot middleware that will be used by api server only
 */
apiServer.on.start(next => {
    $.logInfo('Info from API server.');
    return next()
})


// Boot Main server.
apiServer.boot();
