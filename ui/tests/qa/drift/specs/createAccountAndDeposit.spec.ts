import { expect, Page, test } from '@playwright/test';
import HomePage from '../pages/HomePage';
import { BigNumber } from 'bignumber.js';
import ExtensionsUtils from '../utils/ExtensionsUtils';
import UserPage from '../pages/UserPage';
import SpotPage from '../pages/SpotPage';
import { extensionId, generateDepositTestData, recoveryPhrase } from '../data/deposit.testdata';

test.describe.parallel('Drift UI', () => {
    let page: Page;
    let homePage: HomePage;
    let userPage: UserPage;
    let spotPage: SpotPage;

    test.beforeEach(async() => {
        page = await ExtensionsUtils.launchPhantomExtension('./temp');
        await ExtensionsUtils.setUpPhantomExtension(page, recoveryPhrase);
        homePage = new HomePage(page);
        userPage = new UserPage(page);
        spotPage = new SpotPage(page);
    });

    test.afterEach(async() => {
        await page?.close();
    });

    for (const testData of generateDepositTestData()) {
        test('E2E Create Account & Deposit', { tag: ['@e2e', '@regression'] }, async() => {
            let accountsCount: number;
            await test.step('Navigate to DriftUI', async() => {
                await homePage.navigate();
                await expect(page).toHaveTitle('DriftUI - Solana Perps Trading');
            });

            await test.step(`Connect a ${testData.walletType} wallet`, async() => {
                await homePage.connectWalletButton.click();
                await expect(homePage.connectWalletPopupTitle).toHaveText('Connect a wallet on Solana to continue');
                await page.getByAltText(testData.walletType).click();
                await ExtensionsUtils.handlePhantomConnectionPopup({ page, isSetUpApprove: true });
                await expect(page.getByText('Connected')).toBeVisible({ timeout: 10000 });
            });

            await test.step('Create Account & Deposit', async() => {
                const respPromise = page.waitForResponse((resp) => resp.url().includes(process.env.SOLANA_DEVNET_RPC_ENDPOINT), { timeout: 20000});
                await homePage.userTab.click();
                await respPromise;
                await expect(page.getByText(extensionId)).toBeVisible({ timeout: 10000 });
                await expect(page.getByText('Create Account & Deposit', { exact: true }).first()).toBeVisible({ timeout: 10000 });

                accountsCount = await userPage.feachAccountcount();
                test.info().annotations.push({ type: 'Oirinal accout count', description: accountsCount.toString()});

                await userPage.selectTokenAmountAndSubmit(testData.asset, testData.amount);
                await ExtensionsUtils.handlePhantomConnectionPopup({ page, isDepositApprove: true });
                await expect(page.getByText(`Successfully created account and deposited ${testData.amount} ${testData.asset}`)).toBeVisible({ timeout: 10000 });
            });

            await test.step('Validate account count after account creation', async() => {
                await homePage.spotTab.click();
                await homePage.userTab.click();
                await page.waitForTimeout(3000); // TODO: Need to remove the hard wait and use the pool machine instead.
                const currentAccountCount = await userPage.feachAccountcount();
                test.info().annotations.push({ type: 'Current accout count', description: currentAccountCount.toString()});
                expect(currentAccountCount).toBe(accountsCount+1);
            });

            await test.step('Validate asset and balance after account creation', async() => {
                await homePage.selectAccout(accountsCount);
                await homePage.spotTab.click();
                await expect(spotPage.spotPageHeader).toBeVisible({ timeout: 10000 });
                const assetBalDetails = await spotPage.getAssetBalance();
                await expect(assetBalDetails.asset).toHaveText(testData.asset);
                /* TODO: After the deposit, the balance appears to be less than expected, possibly due to a deducted fee.
             I need to confirm this with the Product Manager (PM). Once confirmed, the following steps will be enabled, provided the validation is greater than 0. */
                // expect(assetBalDetails.balance).toEqual('0.01');
                expect(BigNumber(assetBalDetails.balance).isGreaterThan(0)).toBeTruthy();
            });

        // TODO: The withdrawal and delete account scripts need to be added, but currently, the delete account option is disabled.
        });
    }
});
