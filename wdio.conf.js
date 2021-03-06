exports.config = {

    runner: 'local',

    specs: [
         './test/smoke/*.js',
         './test/extended/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        './test/smoke/elementsExist.js',
        '.test/smoke/labelsCorrect.js'
    ],

    maxInstances: 10,

    capabilities: [{
    

        maxInstances: 1,
        //
        browserName: 'chrome',
        acceptInsecureCerts: true

    }],

    logLevel: 'info',

    bail: 0,

    baseUrl: ' https://qa-apps.netlify.app/hero/fix',

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    services: ['selenium-standalone'],
    

    framework: 'mocha',

    reporters: ['spec','dot'],


    mochaOpts: {
        require: ['@babel/register'],
        ui: 'bdd',
        timeout: 60000
    },

}
