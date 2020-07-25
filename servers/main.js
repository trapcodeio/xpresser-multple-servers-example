/**
 * This is the main server xpresser boot file.
 */
const xpresser = require('../xpresser');
// Import main config
const mainConfig = require('./main.config');
// Boot Xpresser using mainConfig
const mainServer = xpresser(mainConfig);

/**
 * Here you can add boot middleware that will be used by main server only
 */

mainServer.on.start(next => {
    $.logInfo('Info from Main server.');
    return next()
})


// Boot Main server.
mainServer.boot();
