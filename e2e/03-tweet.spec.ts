import { test, expect } from '@playwright/test';

const TWEET_CONTENT = 'This is a test tweet made from a';

test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.BASE_URL}/`);
})

test.describe('Tweet page test', () => {

    test('can post new tweet', async ({ page, browserName }) => {

        console.log(`${browserName.toUpperCase()} - Running tweet test`)

        const [tweetForm, tweetInput, submitBtn] = [
            page.locator(`form[name="tweetform"]`),
            page.locator(`textarea[name="content"]`),
            page.locator('button[type="submit"]:has-text("Post")')
        ]

        await Promise.all([
            expect(tweetForm).toBeVisible(),
            expect(submitBtn).toBeDisabled(),
        ])

        await tweetInput.fill(`${TWEET_CONTENT} ${browserName} browser`);
        await expect(submitBtn).toBeVisible({ timeout: 1000 });
        await expect(submitBtn).toBeEnabled({ timeout: 1000 });
        await submitBtn.click();

        await Promise.all([
            await expect(tweetInput).toBeEmpty({ timeout: 1000 }),
            expect(page.locator('p:has-text("Tweet was successfully posted.")')).toBeVisible({ timeout: 5000 })
        ])

    })

    test('tweet shows up in feed', async ({ page, browserName }) => {

        const tweetText = `${TWEET_CONTENT} ${browserName} browser`

        const tweetContainer = await page.locator('#tweet');
        await expect(tweetContainer).toBeVisible({ timeout: 10000 });

        const tweetContent = tweetContainer.locator(`p:has-text("${tweetText}")`);
        await expect(tweetContent).toBeVisible();

        const anchorTags = tweetContainer.locator('a');
        await expect(anchorTags).toHaveCount(3);

    })

    test('tweet can be deleted', async ({ page }) => {
        const tweetContainer = page.locator('#tweet');

        const deleteMenu = tweetContainer.locator('#delete-menu');
        await expect(deleteMenu).toBeVisible();
        await expect(deleteMenu).toBeEnabled();
        await deleteMenu.click();

        const deleteBtn = page.locator('#delete-btn');
        await expect(deleteBtn).toBeVisible();
        await expect(deleteBtn).toBeEnabled();
        await deleteBtn.click();

        await page.waitForTimeout(1000); // Adjust delay as needed
    });

    test('tweet was deleted successfully', async ({ page }) => {
        const tweetContainer = page.locator('#tweet');
        await expect(tweetContainer).not.toBeAttached({ timeout: 1000 });
    })


})