import { test, expect } from '@playwright/test';

test('can delete user', async ({ page }) => {
    await page.goto(`${process.env.BASE_URL}`, { timeout: 2000 });

    const profileBtn = page.locator('h2:has-text("Profile")');
    await expect(profileBtn).toBeVisible({ timeout: 2000 });
    await expect(profileBtn).toBeEnabled();
    await profileBtn.click();

    await page.waitForURL('**/*', { timeout: 2000 });

    const accountBtn = page.locator('a:has-text("Edit profile")');
    await expect(accountBtn).toBeVisible({ timeout: 2000 });
    await expect(accountBtn).toBeEnabled();
    await accountBtn.click();

    await page.waitForURL('**/account', { timeout: 2000 });

    const deleteBtn = page.locator('button:has-text("Delete Account")');
    await expect(deleteBtn).toBeVisible({ timeout: 2000 });
    await expect(deleteBtn).toBeEnabled();
    await deleteBtn.click();

    const confirmBtn = page.locator('#deletebtn');
    await expect(confirmBtn).toBeVisible({ timeout: 2000 });
    await expect(confirmBtn).toBeEnabled();
    await confirmBtn.click();

    await page.waitForSelector('[role="dialog"]', { state: 'detached', timeout: 5000 });

    await page.waitForURL('**/', { timeout: 10000 });
});