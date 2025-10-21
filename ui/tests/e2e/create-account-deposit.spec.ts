//import test, { expect, createPhantomWallet } from '../base/BaseTest'
import { test, expect, createPhantomWallet } from '../base/BaseTest'
import {HomePage} from "../pages/HomePage";
import {WALLETS} from "../config/constants";
import { UserPage } from '../pages/UserPage';

test.describe('Create account and Deposit', () => {
    let homePage: HomePage;
    let userPage: UserPage;


    test.beforeEach(async ({ page, context }) => {
        homePage = new HomePage(page);
        userPage = new UserPage(page);

        // Navigate to the homepage
        await page.goto('/');
        await homePage.waitForHealthyState();

        // Close any blank tabs opened automatically
        const pages = context.pages();
        for (const p of pages) {
            const url = p.url();
            if (url === 'about:blank') {
            await p.close();
            }
        }
    });

    test.afterEach(async ({ page, context }) => {
      await page.close();
      await context.close();
    });

        test('TC-CA-001 - Create account and Deposit (happy path)', async ({
            context,
            page,
            phantomPage,
            extensionId,
            }) => {
            
            const phantom = await createPhantomWallet(context, phantomPage, extensionId)

            // Click the connect button
            await homePage.connectToWallet(WALLETS.PHANTOM);

            // Connect Wallet to the dapp
            await phantom.connectToDapp();


            // Verify the connected account address
            await expect(homePage.connectWalletButton.first()).not.toContainText('Connect Wallet');
            await homePage.navigateToUser();
            await userPage.selectAsset('SOL');
            await userPage.fillAmount('0.1');

            // Count before creating account
            const beforeCount = await page.locator('//p[contains(text(),"Main Account")]').count();
            await userPage.clickCreateAccountButton();
            await phantom.confirmSignature();

            // Verify the account was created
            // Wait for the count to increase
            await expect(page.locator('//p[contains(text(),"Main Account")]'))
            .toHaveCount(beforeCount + 1, { timeout: 10000 });

        })

        test('TC-CA-002 - Try to create account with insufficient funds', async ({
            context,
            page,
            phantomPage,
            extensionId,
            }) => {
            
            const phantom = await createPhantomWallet(context, phantomPage, extensionId)

            // Click the connect button
            await homePage.connectToWallet(WALLETS.PHANTOM);


            // Connect Wallet to the dapp
            await phantom.connectToDapp();


            // Verify the connected account address
            await expect(homePage.connectWalletButton.first()).not.toContainText('Connect Wallet');
            await homePage.navigateToUser();
            await userPage.selectAsset('SOL');
            await userPage.fillAmount('5');

            await userPage.clickCreateAccountButton();
            await phantom.confirmSignature();
 
            // Verify the error toast message is visible 
            await expect(page.locator('//div[contains(text(),"Failed to create account and deposit. Please try again.")]'))
            .toBeVisible();

        })

        test('TC-CA-003 - Network throttling - delay simulated - Try to create account', async ({
            context,
            page,
            phantomPage,
            extensionId,
            }) => {
            
            const phantom = await createPhantomWallet(context, phantomPage, extensionId)

            // Click the connect button
            await homePage.connectToWallet(WALLETS.PHANTOM);

            // Connect Wallet to the dapp
            await phantom.connectToDapp();

            // Verify the connected account address
            await expect(homePage.connectWalletButton.first()).not.toContainText('Connect Wallet');
            await page.waitForLoadState('domcontentloaded');

            const cdpSession = await context.newCDPSession(page)
            await cdpSession.send('Network.emulateNetworkConditions', {
                offline: false,
                downloadThroughput: (300 * 1024) / 8,
                uploadThroughput: (50 * 1024) / 8,
                latency: 200,
                //connectionType: 'cellular2g',
            })
            await homePage.navigateToUser();
            await userPage.selectAsset('SOL');
            await userPage.fillAmount('0.1');
            const beforeCount = await page.locator('//p[contains(text(),"Main Account")]').count();
            await userPage.clickCreateAccountButton();
            await phantom.confirmSignature();

            // Verify the toast
            await expect(page.locator('//div[contains(text(),"Successfully created account and deposited")]'))
            .toBeVisible();

            // Verify the account was created
            // Wait for the count to increase
            await expect(page.locator('//p[contains(text(),"Main Account")]'))
            .toHaveCount(beforeCount + 1, { timeout: 10000 });

        })


        test('TC-CA-004 - Missing required fields account creation', async ({
            context,
            page,
            phantomPage,
            extensionId,
            }) => {

            const phantom = await createPhantomWallet(context, phantomPage, extensionId)

            // Click the connect button
            await homePage.connectToWallet(WALLETS.PHANTOM);

            // Connect Wallet to the dapp
            await phantom.connectToDapp();

            await homePage.navigateToUser();

            //Verify de create account remains disable
            await expect(userPage.createAccountButton)
            .toBeDisabled();
            
        });

});
