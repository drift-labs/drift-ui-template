import { expect, Page, test } from '@playwright/test';
import HomePage from '../pages/HomePage';
import ExtensionsUtils from '../utils/ExtensionsUtils';
import { generateLimitOrderTestData, recoveryPhrase, walletType } from '../data/limit.testdata';
import PerpsPage from '../pages/PerpsPage';

test.describe.parallel('Drift UI', () => {
    let page: Page;
    let homePage: HomePage;
    let perpsPage: PerpsPage;

    test.beforeEach(async() => {
        page = await ExtensionsUtils.launchPhantomExtension('./temp1');
        await ExtensionsUtils.setUpPhantomExtension(page, recoveryPhrase);
        homePage = new HomePage(page);
        perpsPage = new PerpsPage(page);
    });

    test.afterEach(async() => {
        await page?.close();
    });

    for (const testData of generateLimitOrderTestData()) {
        test(`E2E Limit - ${testData.tradeType} - ${testData.tradeMode} and Cancel Open Order`, { tag: ['@e2e', '@regression'] }, async() => {
            test.setTimeout(180000);
            await test.step('Navigate to DriftUI', async() => {
                await homePage.navigate();
                await expect(page).toHaveTitle('DriftUI - Solana Perps Trading');
            });

            await test.step(`Connect a ${walletType} wallet`, async() => {
                await homePage.connectWalletButton.click();
                await expect(homePage.connectWalletPopupTitle).toHaveText('Connect a wallet on Solana to continue');
                await page.getByAltText(walletType).click();
                await ExtensionsUtils.handlePhantomConnectionPopup({ page, isSetUpApprove: true });
                await expect(page.getByText('Connected')).toBeVisible({ timeout: 10000 });
            });

            await test.step('Place a Perpetual Order', async() => {
                const respPromise = page.waitForResponse((resp) => resp.url().includes(process.env.SOLANA_DEVNET_RPC_ENDPOINT), { timeout: 20000});
                await homePage.perpsTab.click();
                await respPromise;
                await expect(perpsPage.perpsPageHeader).toBeVisible({ timeout: 10000 });
                await perpsPage.placePerpetualOrder(testData.assetPair, testData.orderType,  testData.limitSize, testData.limitPrice);
                await ExtensionsUtils.handlePhantomConnectionPopup({ page, isDepositApprove: true });
                await expect(page.getByText('LIMIT LONG order placed successfully!')).toBeVisible({ timeout: 10000 });
            });

            await test.step('Verify Open Orders', async() => {
                await expect(perpsPage.tablecolumn.first()).toHaveText(testData.assetPair.split(' ')[0]);
                await expect(perpsPage.tablecolumn.nth(1)).toHaveText(testData.tradeType);
                await expect(perpsPage.tablecolumn.nth(2)).toHaveText(testData.orderType);
                await expect(perpsPage.tablecolumn.nth(3)).toHaveText(`0 / ${testData.limitSize}`);
                await expect(perpsPage.tablecolumn.nth(4)).toHaveText(`$${testData.limitPrice}`);
                await expect(perpsPage.tablecolumn.nth(6)).toHaveText(testData.tradeMode);
            });

            await test.step('Cancel Open Orders', async() => {
                await expect(async() => {
                    await perpsPage.cancelBtn.click();
                    await ExtensionsUtils.handlePhantomConnectionPopup({ page, isDepositApprove: true });
                    await expect(page.getByText('No open orders found')).toBeVisible();
                }).toPass({
                    intervals: [8000],
                    timeout: 120_000,
                });
            });
        });
    }
});
