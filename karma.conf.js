process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function(config) {
  config.set({
    browsers: ['ChromeHeadlessNoSandbox'], // Use headless mode
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
          '--disable-gpu',
          '--disable-software-rasterizer',
          '--disable-dev-shm-usage'
        ]
      }
    },
    reporters: ['progress', 'junit', 'allure'],
    junitReporter: {
      outputDir: 'test-results/junit', // Test results for SonarQube
      outputFile: 'junit-report.xml',
      useBrowserName: false
    },
    allureReport: {
      outputDir: 'test-results/allure' // Test results for Allure
    }
  });
};
