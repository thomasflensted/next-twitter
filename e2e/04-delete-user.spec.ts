import { test, expect } from '@playwright/test';

test('can delete user', async ({ page, browserName }) => {
    console.log(`${browserName.toUpperCase()} - Starting delete user test`);

    // Increase the overall test timeout
    test.setTimeout(120000); // 2 minutes

    try {
        console.log('Navigating to base URL');
        await page.goto(`${process.env.BASE_URL}`, { timeout: 30000 });

        console.log('Locating and clicking Profile button');
        const profileBtn = page.locator('h2:has-text("Profile")');
        await expect(profileBtn).toBeVisible({ timeout: 10000 });
        await expect(profileBtn).toBeEnabled();
        await profileBtn.click();

        console.log('Waiting for navigation after Profile click');
        await page.waitForURL('**/*', { timeout: 10000 });

        console.log('Locating and clicking Edit profile button');
        const accountBtn = page.locator('a:has-text("Edit profile")');
        await expect(accountBtn).toBeVisible({ timeout: 10000 });
        await expect(accountBtn).toBeEnabled();
        await accountBtn.click();

        console.log('Waiting for navigation to account page');
        await page.waitForURL('**/account', { timeout: 10000 });

        console.log('Locating and clicking Delete Account button');
        const deleteBtn = page.locator('button:has-text("Delete Account")');
        await expect(deleteBtn).toBeVisible({ timeout: 10000 });
        await expect(deleteBtn).toBeEnabled();
        await deleteBtn.click();

        console.log('Locating and clicking Confirm Delete button');
        const confirmBtn = page.locator('#deletebtn');
        await expect(confirmBtn).toBeVisible({ timeout: 10000 });
        await expect(confirmBtn).toBeEnabled();
        await confirmBtn.click();

        console.log('Waiting for dialog to close');
        await page.waitForSelector('[role="dialog"]', { state: 'detached', timeout: 20000 });

        console.log('Waiting for redirect after account deletion');
        await page.waitForURL('**/', { timeout: 30000 }); // Increased timeout for redirect

        console.log('User deletion test completed successfully');
    } catch (error) {
        console.error(`Error in delete user test: ${error}`);

        // Capture a screenshot on error
        await page.screenshot({ path: `e2e/delete-user-error-${browserName}.png` });

        // Rethrow the error to fail the test
        throw error;
    }
});