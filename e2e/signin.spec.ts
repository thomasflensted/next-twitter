import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.BASE_URL}/` || '/');
    const signInLink = page.locator('a[href="/signin"]');
    await Promise.all([
        expect(signInLink).toBeVisible(),
        expect(signInLink).toHaveText('Sign in here.'),
        signInLink.click()
    ])
    await page.waitForURL('/signin')

})

test.describe('Sign in page test', () => {

    test('page loads', async ({ page }) => {
        await expect(page).toHaveTitle("X++");
        await page.waitForSelector('h2');
        await expect(page.locator('h2')).toHaveText('Sign In');
    });

    test('Sign in form has appropriate fields and button', async ({ page }) => {
        const form = await page.locator('form');
        await expect(form).toBeVisible();

        const fieldNames = ['email', 'password'];
        for (const fieldName of fieldNames) {
            const field = page.locator(`input[name="${fieldName}"]`)
            await Promise.all([
                expect(field).toBeVisible(),
                expect(field).toHaveAttribute('name', fieldName)
            ]);
        }

        const submitBtn = page.locator('button[type="submit"]');
        await Promise.all([
            expect(submitBtn).toBeVisible(),
            expect(submitBtn).toHaveText('Sign In')
        ])
    });

    test('Sign in with test user', async ({ page }) => {

        const emailField = await page.locator('input[name="email"]')
        const passwordField = await page.locator('input[name="password"]')
        const submitBtn = await page.locator('button[type="submit"]');
        await expect(emailField).toBeVisible();
        await expect(passwordField).toBeVisible();

        // await emailField.fill(`${process.env.TEST_USER_EMAIL!}`);
        // await passwordField.fill(`${process.env.TEST_USER_PASSWORD!}`);
        // await submitBtn.click();
        // await page.waitForURL('/')

    })

});
