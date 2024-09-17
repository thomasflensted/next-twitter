import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// Read from ".env" file.
dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  globalSetup: require.resolve('./e2e/global-setup'),
  testDir: './e2e',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.BASE_URL || 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
      testMatch: /pre-signup\.spec\.ts/
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
      testMatch: /pre-signup\.spec\.ts/
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
      testMatch: /pre-signup\.spec\.ts/
    },
    {
      name: 'chromium-authenticated',
      use: {
        ...devices['Desktop Chrome'],
        storageState: './e2e/auth-state/chromium-storage-state.json',
      },
      testMatch: ['02-account.spec.ts', '03-tweet.spec.ts', '04-delete-user.spec.ts'],
      dependencies: ['chromium'],
    },
    {
      name: 'firefox-authenticated',
      use: {
        ...devices['Desktop Firefox'],
        storageState: './e2e/auth-state/firefox-storage-state.json',
      },
      testMatch: ['02-account.spec.ts', '03-tweet.spec.ts', '04-delete-user.spec.ts'],
      dependencies: ['firefox'],
    },
    {
      name: 'webkit-authenticated',
      use: {
        ...devices['Desktop Safari'],
        storageState: './e2e/auth-state/webkit-storage-state.json',
      },
      testMatch: ['02-account.spec.ts', '03-tweet.spec.ts', '04-delete-user.spec.ts'],
      dependencies: ['webkit'],
    },
  ],
  /* Test against mobile viewports. */
  // {
  //   name: 'Mobile Chrome',
  //   use: { ...devices['Pixel 5'] },
  // },
  // {
  //   name: 'Mobile Safari',
  //   use: { ...devices['iPhone 12'] },
  // },

  /* Test against branded browsers. */
  // {
  //   name: 'Microsoft Edge',
  //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
  // },
  // {
  //   name: 'Google Chrome',
  //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
  // },

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run build',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
