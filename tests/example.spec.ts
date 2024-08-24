import { test } from '@playwright/test';

test('login page renders', async ({ page }) => {
  await page.goto(`${process.env.BASE_URL}/`);
  console.log("BASE URL:", process.env.BASE_URL)


  // Now continue with your test
  // await expect(page).toHaveTitle("X++");
});