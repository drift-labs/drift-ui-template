//import test, { expect, createPhantomWallet } from '../base/BaseTest'
import { test, expect, createPhantomWallet } from '../base/BaseTest'
import {HomePage} from "../pages/HomePage";
import {OrderDirection, PERPETUALS_VALUE, WALLETS} from "../config/constants";
import { UserPage } from '../pages/UserPage';
import { PerpetualsPage } from '../pages/PerpetualsPage';

test.describe('Place limit order', () => {
    let homePage: HomePage;
    let perpsPage: PerpetualsPage;


    test.beforeEach(async ({ page, context }) => {
        homePage = new HomePage(page);
        perpsPage = new PerpetualsPage(page);

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

    [
        { direction: 'Long', size: '0.05', limitPrice: '150' },
    ].forEach(({ direction, size, limitPrice }) => {    
    test('TC-PL-001 - Place limit order LONG/SHORT direction and cancel it (happy path)', async ({
            context,
            page,
            phantomPage,
            extensionId,
            }) => {

            test.setTimeout(70000);
            
            const phantom = await createPhantomWallet(context, phantomPage, extensionId)

            // Click the connect button
            await homePage.connectToWallet(WALLETS.PHANTOM);

            // Connect Wallet to the dapp
            await phantom.connectToDapp();


            // Verify the connected account address
            await expect(homePage.connectWalletButton.first()).not.toContainText('Connect Wallet');

            await perpsPage.navigateToPerpetuals();
            await perpsPage.selectMarketPerpetual(PERPETUALS_VALUE.SOL_PERP);
            await perpsPage.selectOrderDirection(direction as OrderDirection);
            await perpsPage.selectOrderType('limit');
            await perpsPage.selectSizeType('base');
            await perpsPage.fillSizeAmount(size);
            await perpsPage.fillLimitPrice(limitPrice);
            await perpsPage.modifyUseSwift();
            await perpsPage.clickPlaceOrderButton();
            await phantom.confirmSignature();

            // Verify the success toast message is visible 
            await expect(page.locator('//div[contains(text(),"LIMIT LONG order placed successfully!")]'))
            .toBeVisible();
            
            const count = await perpsPage.openOrderDataLocator.count();

            //Assertions in order placed
            await perpsPage.assertElementText(perpsPage.openOrderDataLocator.nth(0), 'SOL-PERP');
            await perpsPage.assertElementText(perpsPage.openOrderDataLocator.nth(1), direction.toUpperCase());
            await perpsPage.assertElementText(perpsPage.openOrderDataLocator.nth(2), 'Limit');
            await perpsPage.assertElementText(perpsPage.openOrderDataLocator.nth(3), `0 / ${size}`);
            await perpsPage.assertElementText(perpsPage.openOrderDataLocator.nth(4), `$${limitPrice}.0000`);

            await perpsPage.cancelOrderCreated();
            await phantom.confirmSignature();

            // Verify the order was cancelled
            await expect(page.locator('//div[contains(text(),"No open orders found")]'))
            .toBeVisible();

        })
    }); 

    [
        { direction: 'Long', size: '200', limitPrice: '150' },
    ].forEach(({ direction, size, limitPrice }) => {  
        test('TC-PL-002 - Try to place limit order with insufficient collateral', async ({
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

            await perpsPage.navigateToPerpetuals();
            await perpsPage.selectMarketPerpetual(PERPETUALS_VALUE.SOL_PERP);
            await perpsPage.selectOrderDirection(direction as OrderDirection);
            await perpsPage.selectOrderType('limit');
            await perpsPage.selectSizeType('base');
            await perpsPage.fillSizeAmount(size);
            await perpsPage.fillLimitPrice(limitPrice);
            await perpsPage.modifyUseSwift();
            await perpsPage.clickPlaceOrderButton();
            await phantom.confirmSignature();

            // Verify the error toast message is visible 
            await expect(page.locator('//div[contains(text(),"Failed to place limit order. Please check your connection and try again")]'))
            .toBeVisible();

            // Verify the grid order remains empty
            await expect(page.locator('//div[contains(text(),"No open orders found")]'))
            .toBeVisible();

        })

    }); 

    [
        { direction: 'Long', size: '0.00001', limitPrice: '150' },
    ].forEach(({ direction, size, limitPrice }) => {  
        test('TC-PL-003 - Try to place limit order with size too low', async ({
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

            await perpsPage.navigateToPerpetuals();
            await perpsPage.selectMarketPerpetual(PERPETUALS_VALUE.SOL_PERP);
            await perpsPage.selectOrderDirection(direction as OrderDirection);
            await perpsPage.selectOrderType('limit');
            await perpsPage.selectSizeType('base');
            await perpsPage.fillSizeAmount(size);
            await perpsPage.fillLimitPrice(limitPrice);
            await perpsPage.modifyUseSwift();
            await perpsPage.clickPlaceOrderButton();
            await phantom.confirmSignature();

            // Verify the error toast message is visible 
            await expect(page.locator('//div[contains(text(),"Failed to place limit order. Please check your connection and try again")]'))
            .toBeVisible();

            // Verify the grid order remains empty
            await expect(page.locator('//div[contains(text(),"No open orders found")]'))
            .toBeVisible();

        })

    }); 

    [
        { direction: 'Long', size: '1', limitPrice: '150' },
    ].forEach(({ direction, size, limitPrice }) => {  
        test('TC-GEN-001 - Try to place limit order disconnecting wallet mid-flow', async ({
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

            await perpsPage.navigateToPerpetuals();
            await perpsPage.selectMarketPerpetual(PERPETUALS_VALUE.SOL_PERP);
            await perpsPage.selectOrderDirection(direction as OrderDirection);
            await perpsPage.selectOrderType('limit');
            await perpsPage.selectSizeType('base');
            await perpsPage.fillSizeAmount(size);
            await perpsPage.fillLimitPrice(limitPrice);
            await perpsPage.modifyUseSwift();
            await perpsPage.clickPlaceOrderButton();

            await homePage.disconnectWallet();

            // Verify the wallet was disconnected
            await expect(homePage.connectWalletButton.first()).toContainText('Connect Wallet');

            // Verify the error toast message is visible 
            await expect(page.locator('//div[contains(text(),"Failed to place limit order. Please check your connection and try again")]'))
            .toBeVisible();
        })

    });

    test('TC-PL-004 - Missing required fields place order', async ({
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

            await perpsPage.navigateToPerpetuals();

            //Verify de create account remains disable
            await expect(perpsPage.placeOrderButton)
            .toBeDisabled();
            
        });
    
});
