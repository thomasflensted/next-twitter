
import { BrowserType, chromium, firefox, webkit } from '@playwright/test';

const credentials = {
    chromium: {
        email: `chromium@test.com`,
        password: 'testpassword123'
    },
    firefox: {
        email: `firefox@test.com`,
        password: 'testpassword123'
    },
    webkit: {
        email: `webkit@test.com`,
        password: 'testpassword123'
    },
} as const

async function signUpAndSaveState(browserType: BrowserType, browserName: 'chromium' | 'firefox' | 'webkit') {
    const browser = await browserType.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(`${process.env.BASE_URL}/` || '/');

    const emailField = page.locator('input[name="email"]');
    const passwordField = page.locator('input[name="password"]');
    const confirmField = page.locator('input[name="confirmpw"]');
    const submitBtn = page.locator('button[type="submit"]');

    await emailField.fill(credentials[browserName].email);
    await passwordField.fill(credentials[browserName].password);
    await confirmField.fill(credentials[browserName].password);
    await submitBtn.click();

    await page.waitForURL('**/account', { timeout: 10000 });

    await context.storageState({ path: `./e2e/auth-state/${browserName}-storage-state.json` });
    await browser.close();
}

async function globalSetup() {
    console.log('Setting up browsers');

    await signUpAndSaveState(chromium, 'chromium');
    console.log('- Chromium set up');

    await signUpAndSaveState(firefox, 'firefox');
    console.log('- Firefox set up');

    await signUpAndSaveState(webkit, 'webkit');
    console.log('- Webkit set up');

    console.log('Finished browser setup');
}

export default globalSetup;