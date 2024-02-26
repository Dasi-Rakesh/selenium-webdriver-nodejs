# BrowserStack Selenium Example with Jasmine

This project provides examples for running tests using Jasmine and Selenium Webdriver with BrowserStack. The tests are written in Node.js and use the Jasmine testing framework.

## Setup

### Prerequisites

Ensure you have the following dependencies installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone this repository:

```bash
git clone https://github.com/Dasi-Rakesh/selenium-webdriver-nodejs.git
```

### Install dependencies:
 ```bash
npm install
```

### Set environment variables for BrowserStack credentials:

```bash
export BROWSERSTACK_USERNAME=your_browserstack_username
export BROWSERSTACK_ACCESS_KEY=your_browserstack_access_key
```
Alternatively, you can set these environment variables in your CI/CD environment or directly in your code.

### Running Tests
Execute the following command to run the tests:

```bash
npm test
```

This will run the mainScript.js file, initiating tests on Safari and Chrome browsers using BrowserStack.

### Configuration
The configuration settings, such as BrowserStack username, access key, and browser configurations, can be adjusted in the config.js file.

## Project Structure

The project is organized with the following structure:

- **config.js:** Contains BrowserStack and browser configuration settings.

- **LoginPage.js:** Page Object Model class for the login page.

- **mainScript.js:** Main script for running tests using Jasmine and Selenium Webdriver.

- **package.json:** Node.js project configuration file.

- **Tests/:** Directory containing test scripts.


### Dependencies

selenium-webdriver: Selenium WebDriver for Node.js.