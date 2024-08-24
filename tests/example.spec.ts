import { test, expect } from '@playwright/test';

test('login page renders', async ({ page }) => {
  await page.goto(`${process.env.BASE_URL}/`);

  // Wait for 3 seconds to give the Vercel page time to disappear
  await page.waitForTimeout(3000);

  // Now continue with your test
  await expect(page).toHaveTitle("X++");
});