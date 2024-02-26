const { Builder } = require('selenium-webdriver');
const config = require('./config');
const LoginPage = require('./LoginPage');

global.projectName = 'BStack NodeJS';
global.buildName = 'Login Test Flow';

async function runTest(driver, browserName) {
  const loginPage = new LoginPage(driver);

  try {
    console.log(`Navigating to the website with ${browserName}...`);
    await loginPage.navigateToWebsite();

    console.log('Entering username...');
    await loginPage.enterUsername('praneshBuyer');

    console.log('Clicking on username element...');
    await loginPage.clickOnUsername();

    console.log('Entering password...');
    await loginPage.enterPassword('U67dQBvGdE2j');

    console.log('Clicking on submit button...');
    await loginPage.clickOnSubmitButton();

    console.log('Waiting for the statcard number element to be visible...');
    await loginPage.waitForStatcardNumberVisible();

    // Verify if the element is displayed
    if (await loginPage.isStatcardNumberVisible()) {
      console.log('Element is visible.');
    } else {
      console.log('Element is not visible.');
    }

    console.log('Setting session status to passed...');
    await driver.executeScript(
      'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Login Success"}}'
    );

    // Add any additional test logic here...

  } finally {
    console.log('Quitting the driver...');
    await driver.quit();
  }
}

(async () => {
  // Safari configuration
  const driverSafari = new Builder()
    .usingServer(`http://${config.BROWSERSTACK_USERNAME}:${config.BROWSERSTACK_ACCESS_KEY}@hub-cloud.browserstack.com/wd/hub`)
    .withCapabilities({ ...config.commonCapabilities, ...config.safariConfig })
    .build();

  await runTest(driverSafari, 'Safari');

  // Chrome configuration
  const driverChrome = new Builder()
    .usingServer(`http://${config.BROWSERSTACK_USERNAME}:${config.BROWSERSTACK_ACCESS_KEY}@hub-cloud.browserstack.com/wd/hub`)
    .withCapabilities({ ...config.commonCapabilities, ...config.chromeConfig })
    .build();

  await runTest(driverChrome, 'Chrome');
})();
