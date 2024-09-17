import { test, expect } from '@playwright/test';

test.use({ storageState: { cookies: [], origins: [] } }); // Ensure clean state

test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.BASE_URL}/` || '/');
})

test.describe('Sign up page test', () => {

    test('page loads', async ({ page, browserName }) => {

        console.log(`${browserName.toUpperCase()} - Running pre-signup test`)

        await Promise.all([
            expect(page).toHaveTitle("X++"),
            page.waitForSelector('h2'),
            expect(page.locator('h2')).toHaveText('Sign Up')
        ])
    });

    test('can go to sign in page', async ({ page }) => {
        const signInLink = await page.locator('a:has-text("Sign in here")');
        await expect(signInLink).toBeVisible()
        await signInLink.click()
        await page.waitForURL('**/signin')
    })

    test('Sign up form has appropriate fields and button', async ({ page }) => {
        const form = await page.locator('form');
        await expect(form).toBeVisible();

        const fieldNames = ['email', 'password', 'confirmpw'];
        for (const fieldName of fieldNames) {
            const field = page.locator(`input[name="${fieldName}"]`)
            await Promise.all([
                expect(field).toBeVisible(),
                expect(field).toHaveAttribute('name', fieldName)
            ]);
        }
    });

    test('Sign up fails with invalid credentials', async ({ page, browserName }) => {

        const submitBtn = page.locator('button[type="submit"]');
        const emailField = await page.locator('input[name="email"]')
        const passwordField = await page.locator('input[name="password"]')
        const confirmField = await page.locator('input[name="confirmpw"]')

        await emailField.fill('test@user.com');
        await passwordField.fill('testtest123');
        await confirmField.fill('test123');
        await submitBtn.click();
        await page.locator('p:has-text("Passwords do not match.")');

        await emailField.fill('test@user.com');
        await passwordField.fill('test');
        await confirmField.fill('test');
        await submitBtn.click();
        await page.locator('p:has-text("Password must be at least 8 characters.")');

        await emailField.fill('thomasflensted@hotmail.com');
        await passwordField.fill('testtest123');
        await confirmField.fill('testtest123');
        await submitBtn.click();
        await page.locator('p:has-text("User already registered")');

    })

});