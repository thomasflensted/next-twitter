import { test, expect } from '@playwright/test';

test('login page renders', async ({ page }) => {
  await page.goto(`${process.env.BASE_URL}/`);
  await page.waitForSelector('h2:has-text("Get Started")', { timeout: 10000 });
  await expect(page).toHaveTitle("X++");
});