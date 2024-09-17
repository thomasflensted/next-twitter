import { test, expect } from '@playwright/test';

test('can delete user', async ({ page, browserName }) => {
    console.log(`${browserName.toUpperCase()} - Running delete user test`);

    await page.goto(`${process.env.BASE_URL}`);

    // Navigate to profile
    const profileBtn = page.locator('h2:has-text("Profile")');
    await expect(profileBtn).toBeVisible();
    await expect(profileBtn).toBeEnabled();
    await profileBtn.click();
    await page.waitForURL('**/*', { timeout: 2000 });

    // Go to account settings
    const accountBtn = page.locator('a:has-text("Edit profile")');
    await expect(accountBtn).toBeVisible();
    await expect(accountBtn).toBeEnabled();
    await accountBtn.click();
    await page.waitForURL('**/account', { timeout: 2000 });

    // Click delete account button
    const deleteBtn = page.locator('button:has-text("Delete Account")');
    await expect(deleteBtn).toBeVisible();
    await expect(deleteBtn).toBeEnabled();
    await deleteBtn.click();

    // Confirm delete
    const confirmBtn = page.locator('#deletebtn');
    await expect(confirmBtn).toBeVisible();
    await expect(confirmBtn).toBeEnabled();
    await confirmBtn.click();

    // Wait for the dialog to close by checking it is detached
    await page.waitForSelector('[role="dialog"]', { state: 'detached', timeout: 2000 });

    // Ensure that the user is redirected correctly
    await page.waitForURL('**/', { timeout: 5000 }); // Adjust the URL to the expected redirect
});