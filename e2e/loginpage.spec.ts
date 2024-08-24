import { test, expect } from '@playwright/test';

test('login page renders', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("X++");
});