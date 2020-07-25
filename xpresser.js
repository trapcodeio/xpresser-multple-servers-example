/**
 * This file will export a function that will return the xpresser instance that will be used by other
 * servers/subdomains
 */
const xpresser = require('xpresser');

module.exports = (config) => {
    const $ = xpresser(config);

    /**
     * Here you can add boot middlewares that will be used by both servers.
     * Eg Database connection
     */
    $.on.start(next => {
        $.logInfo('Database connection successful.');
        return next();
    })

    // return xpresser instance to be used in other servers.
    return $;
}

