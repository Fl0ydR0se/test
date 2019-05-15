exports.config = {
    host: process.env.SELENIUM_HUB_PORT_4444_TCP_ADDR || '0.0.0.0',
    port: 4444,
    path: '/wd/hub',
    specs: ['./specs/desktop/*.spec.js'],
    capabilities: 
    [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ["--headless", "--lang=ru", "--disable-gpu"]
        }
       // "--window-size=1920,1080", "--start-maximized"
    }/*,
    {
            browserName:'firefox',
            'fire:firefoxOptions': {}
    }*/],
    logLevel: 'trace',
    baseUrl: 'http://booking.com',
    waitforTimeout: 150000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 30,
    framework: 'mocha',
    reporters: ['spec'],
    // services: ['selenium-standalone'],
    mochaOpts: 
    {
        ui: 'bdd', timeout: 60000, compilers: ['js:babel-register']
    },   
    onPrepare: function() 
    {
        console.log('Tests have been started.')
    }
      
}