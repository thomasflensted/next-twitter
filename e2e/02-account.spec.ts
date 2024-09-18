import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.BASE_URL}/account`);
})

test.describe('Account page test', () => {

    test('page loads', async ({ page, browserName }) => {

        console.log(`${browserName.toUpperCase()} - Running account test`)

        await expect(page).toHaveTitle("X++")
        await expect(page.locator('h2:has-text("Account details")')).toBeVisible();
        await expect(page.locator('form')).toBeVisible();
    })

    test('form has correct fields', async ({ page }) => {
        const visiblefieldNames = ['name', 'handle', 'bio', 'location', 'website'];
        for (const fieldName of visiblefieldNames) {
            const field = fieldName !== 'bio'
                ? page.locator(`input[name="${fieldName}"]`)
                : page.locator(`textarea[name="${fieldName}"]`)
            await Promise.all([
                expect(field).toBeVisible(),
                expect(field).toHaveAttribute('name', fieldName)
            ]);
        }

        const hiddenFieldNames = ['profilepic', 'coverphoto']
        for (const fieldName of hiddenFieldNames) {
            const field = page.locator(`input[name="${fieldName}"]`)
            await Promise.all([
                expect(field).not.toBeVisible(),
                expect(field).toHaveAttribute('name', fieldName)
            ]);

        }

    })

    test('form has correct buttons', async ({ page }) => {
        const buttons = ['Cancel', 'Delete Account', 'Save'];
        for (const button of buttons) {
            const btn = page.locator(`button:has-text("${button}")`)
            await Promise.all([
                expect(btn).toBeVisible(),
                expect(btn).toHaveText(button)
            ]);
        }
    })

    test('validation fails with invalid fields', async ({ page }) => {

        const [nameField, handleField, submitBtn] = await Promise.all([
            page.locator('input[name="name"]'),
            page.locator('input[name="handle"]'),
            page.locator('button:has-text("Save")')
        ]);

        await Promise.all([
            nameField.fill(''),
            handleField.fill('')
        ]);

        await submitBtn.click();
        await Promise.all([
            page.locator('p:has-text("Name must be at least 1 character.")'),
            page.locator('p:has-text("Handle must be at least 3 characters.")')
        ]);

        await handleField.fill('thomas');
        await submitBtn.click();
        await page.locator('p:has-text("Another user with that handle already exists")');

    })
})