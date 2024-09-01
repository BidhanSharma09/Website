const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('chromedriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Navigate to the application
        await driver.get('http://your-frontend-url.com');

        // Interact with the frontend
        await driver.findElement(By.name('username')).sendKeys('testuser');
        await driver.findElement(By.name('password')).sendKeys('password', Key.RETURN);

        // Wait for some condition (e.g., a specific element to be present)
        await driver.wait(until.elementLocated(By.id('welcome-message')), 10000);

        // Check the interaction with the backend
        let welcomeMessage = await driver.findElement(By.id('welcome-message')).getText();
        console.log(`Welcome message: ${welcomeMessage}`);

        // Optionally, assert the result
        if (welcomeMessage !== 'Expected Message') {
            throw new Error('Test failed: Unexpected welcome message');
        }
    } finally {
        await driver.quit();
    }
})();
