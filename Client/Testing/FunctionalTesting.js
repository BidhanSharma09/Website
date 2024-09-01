const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('chromedriver');
const assert = require('assert');

(async function testLogin() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://your-frontend-url.com');

        // Example interaction with the frontend
        await driver.findElement(By.name('username')).sendKeys('testuser');
        await driver.findElement(By.name('password')).sendKeys('password', Key.RETURN);

        // Wait for the backend response and check the result
        await driver.wait(until.elementLocated(By.id('welcome-message')), 10000);
        let welcomeMessage = await driver.findElement(By.id('welcome-message')).getText();

        // Assertion to verify the outcome
        assert.strictEqual(welcomeMessage, 'Expected Message', 'Welcome message does not match!');
        
    } catch (error) {
        console.error('Test failed:', error);
    } finally {
        await driver.quit();
    }
})();
