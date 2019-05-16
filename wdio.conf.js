/* eslint-disable no-mixed-spaces-and-tabs */
exports.config = {
	host: "selenium-hub" || "0.0.0.0",
	port: 4444,
	path: "/wd/hub",
	specs: ["./specs/desktop/*.spec.js"],
	capabilities:
        [{
        	browserName: "chrome",
        	// eslint-disable-next-line no-mixed-spaces-and-tabs
        	"goog:chromeOptions": {
        		args: ["--headless", "--lang=ru", "--disable-gpu"]
        	}
        	// "--window-size=1920,1080", "--start-maximized"
        }/*,
    {
            browserName:'firefox',
            'fire:firefoxOptions': {}
    }*/],
	logLevel: "info",
	baseUrl: "http://booking.com",
	waitforTimeout: 150000,
	connectionRetryTimeout: 90000,
	connectionRetryCount: 30,
	framework: "mocha",
	reporters: ["spec"],

	// services: ['selenium-standalone'],
	mochaOpts:
    {
    	ui: "bdd", timeout: 60000, compilers: ["js:babel-register"]
    },
	onPrepare: function () {
		console.log("Tests have been started.");
	}

};