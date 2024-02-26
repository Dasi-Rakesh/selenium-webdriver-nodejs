const { By, until } = require('selenium-webdriver');

class LoginPage {
  constructor(driver) {
    this.driver = driver;
    this.useridInput = By.css('*[name="userid"]');
    this.passwordInput = By.css('*[name="password"]');
    this.submitButton = By.xpath('//*[@type="submit"]');
    this.statcardNumber = By.css('.statcard-success:nth-child(2) > .statcard-number');
  }

  async navigateToWebsite() {
    await this.driver.get('https://filemasterdev.enerlex.com/');
  }

  async enterUsername(username) {
    await this.driver.findElement(this.useridInput).sendKeys(username);
  }

  async clickOnUsername() {
    await this.driver.findElement(this.useridInput).click();
  }

  async enterPassword(password) {
    await this.driver.findElement(this.passwordInput).sendKeys(password);
  }

  async clickOnSubmitButton() {
    const submitButton = await this.driver.findElement(this.submitButton);
    await submitButton.click();
  }

  async waitForStatcardNumberVisible() {
    return this.driver.wait(until.elementLocated(this.statcardNumber), 5000);
  }

  async isStatcardNumberVisible() {
    const statcardNumber = await this.driver.findElement(this.statcardNumber);
    return statcardNumber.isDisplayed();
  }
}

module.exports = LoginPage;
