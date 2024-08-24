import { test, expect } from '@playwright/test';

test('login page renders', async ({ page }) => {
    await page.goto(process.env.BASE_URL || '/'); // Use the BASE_URL here

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("X++");
});