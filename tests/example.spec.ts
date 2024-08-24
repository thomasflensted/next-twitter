import { test, expect } from '@playwright/test';

test('debugging', async ({ page }) => {
  await page.goto(`${process.env.BASE_URL}/`);
  console.log('Page content:', await page.content()); // Log the entire HTML content
  await expect(page).toHaveTitle("X++");
});

test('login page renders', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("X++");
});