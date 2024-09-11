import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto(process.env.BASE_URL || '/');
})

test.describe('Sign up page tests', () => {

    test('page loads', async ({ page }) => {
        await expect(page).toHaveTitle("X++");
        await expect(page.locator('h2')).toHaveText('Sign Up');
    });

    test('Sign up form has appropriate fields and button', async ({ page }) => {
        // Check if the form exists
        const form = await page.locator('form');
        await expect(form).toBeVisible();

        const fieldNames = ['email', 'password', 'confirmpw'];
        for (const fieldName of fieldNames) {
            const field = page.locator(`input[name="${fieldName}"]`)
            await expect(field).toBeVisible();
            await expect(field).toHaveAttribute('name', fieldName);
        }

        const submitBtn = page.locator('button[type="submit"]');
        await expect(submitBtn).toBeVisible();
        await expect(submitBtn).toHaveText('Sign Up');
    });

});

test.describe('Sign in page test', () => {

    test('Locate and click sign in link, check if url is correct', async ({ page }) => {
        const signInLink = page.locator('a[href="/signin"]');
        await Promise.all([
            expect(signInLink).toBeVisible(),
            expect(signInLink).toHaveText('Sign in here.'),
            signInLink.click()
        ])
        await page.waitForURL('/signin')
    })

    test('Sign in form has appropriate fields and button', async ({ page }) => {

        const signInLink = page.locator('a[href="/signin"]');
        signInLink.click()
        await page.waitForURL('/signin')

        await expect(page.locator('h2')).toHaveText('Sign In');

        const form = await page.locator('form');
        await expect(form).toBeVisible();

        const fieldNames = ['email', 'password'];
        for (const fieldName of fieldNames) {
            const field = page.locator(`input[name="${fieldName}"]`)
            await Promise.all([
                await expect(field).toBeVisible(),
                await expect(field).toHaveAttribute('name', fieldName)
            ])
        }

        const submitBtn = page.locator('button[type="submit"]');
        await Promise.all([
            await expect(submitBtn).toBeVisible(),
            await expect(submitBtn).toHaveText('Sign In')
        ])
    });

    test('Locate and click sign up link, check if url is correct', async ({ page }) => {

        const signInLink = page.locator('a[href="/signin"]');
        signInLink.click()
        await page.waitForURL('/signin')

        const signUpLink = page.locator('a[href="/signup"]');
        await Promise.all([
            expect(signUpLink).toBeVisible(),
            expect(signUpLink).toHaveText('Sign up here.'),
        ])
    })
})
