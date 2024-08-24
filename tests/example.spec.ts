import { test, expect } from '@playwright/test';

test('login page renders', async ({ page }) => {
  await page.goto(`${process.env.BASE_URL}/`);

  // Log the current title and URL to confirm where we are
  console.log('Page URL:', page.url());
  console.log('Page Title:', await page.title());
});