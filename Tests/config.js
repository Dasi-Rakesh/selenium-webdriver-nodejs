// config.js
module.exports = {
    BROWSERSTACK_USERNAME: process.env.BROWSERSTACK_USERNAME,
    BROWSERSTACK_ACCESS_KEY: process.env.BROWSERSTACK_ACCESS_KEY ,
    commonCapabilities: {
      'browserstack.user': process.env.BROWSERSTACK_USERNAME,
      'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY,
    },
    safariConfig: {
      'bstack:options': {
        osVersion: '14',
        deviceName: 'iPhone 12',
        realMobile: 'true',
        projectName: process.env.PROJECT_NAME || global.projectName,
        buildName: process.env.BUILD_NAME || global.buildName,
        debug: 'true',
      },
      browserName: 'safari',
    },
    chromeConfig: {
      'bstack:options': {
        os: 'OS X',
        osVersion: 'Sonoma',
        browserVersion: 'latest',
        consoleLogs: 'info',
        projectName: process.env.PROJECT_NAME || global.projectName,
        buildName: process.env.BUILD_NAME || global.buildName,
      },
      browserName: 'Chrome',
    },
  };
  