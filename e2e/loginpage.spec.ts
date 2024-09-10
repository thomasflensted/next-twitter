import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto(process.env.BASE_URL || '/');
})

test.describe('Initial tests', () => {

    test('page loads', async ({ page }) => {
        await expect(page).toHaveTitle("X++");
    });

    test('Sign up form has appropriate field and button', async ({ page }) => {
        // Check if the form exists
        const form = await page.locator('form');
        await expect(form).toBeVisible();

        const fieldNames = ['email', 'password', 'confirmpw'];
        for (const fieldName of fieldNames) {
            const field = page.locator(`input[name="${fieldName}"]`)
            await expect(field).toBeVisible();
            await expect(field).toHaveAttribute('name', fieldName);
        }

        const submitBtn = page.locator('button[type="submit"]');
        await expect(submitBtn).toBeVisible();
        await expect(submitBtn).toHaveText('Sign Up');

    });
});
