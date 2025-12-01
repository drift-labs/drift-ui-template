import { Given, When, Then } from '@wdio/cucumber-framework';
import {expect, $, browser} from '@wdio/globals'
import {remote} from 'webdriverio';

import HomePage, {HomePage as  HomePageType} from '../pageobjects/home.page';
import UserPage, {UserPage as  UserPageType} from '../pageobjects/user.page';
import OrderPage, {OrderPage as OrderPageType} from '../pageobjects/order.page';
import Page, {BASE_URL} from "../pageobjects/page";

import phantomPO from '../pageobjects/phantom';
import phantomData from '../pagedata/phantom-data';
import elementUtil from "../pageobjects/element.util";

const pages: {
    home: HomePageType,
    order: OrderPageType,
    user: UserPageType,
} = {
    home: HomePage,
    order: OrderPage,
    user: UserPage,
}


let initialHandles: string[] = [];
let finalHandles: string[] = [];

Given(/^A user with phantom installed connected to devnet network - Test (\d+) Scenario (\d+)$/, async (testId: number, scenarioId: number) => {
    await browser.pause(3000);

    await handleSetupPhantomWallet();
    await browser.pause(elementUtil.elementLoadTime);
    await browser.url(BASE_URL);
    await browser.maximizeWindow();
    await elementUtil.click(await pages.home.connectWalletButton);
    await browser.pause(elementUtil.shortWaitTime);
    await elementUtil.click(await pages.home.connectPhantomWalletButton);
    await browser.pause(elementUtil.elementLoadTime*1.5);
    await browser.switchWindow('Phantom Wallet');
    const currentHandlesInner = await browser.getWindowHandles();
    console.log({afterwistching:1,currentHandlesInner})
    await browser.pause(elementUtil.elementLoadTime);
    await elementUtil.click(await phantomPO.confirmPhantomWalletConnectionButton);
    await browser.pause(elementUtil.elementLoadTime);

    await browser.switchWindow(BASE_URL);
});

Then(/^The home page should show a connected text to indicated wallet is connected - Test (\d+) Scenario (\d+)$/, async (testId: number, scenarioId: number) => {
    await browser.pause(elementUtil.elementLoadTime);
    await expect(pages.home.connectedWalletVerificationElem).toBeExisting();
    await expect(pages.home.connectedWalletVerificationElem).toHaveText(expect.stringContaining('Connected'));
      
});
When(/^The user accesses the user page - Test (\d+) Scenario (\d+)$/, async (testId: number, scenarioId: number) => {
    await browser.refresh();
    await browser.pause(elementUtil.elementLoadTime);
    await elementUtil.click(await pages.home.userPageLinkElem);
});

When(/^The user accesses the order page - Test (\d+) Scenario (\d+)$/, async (testId: number, scenarioId: number) => {
    await browser.refresh();
    await browser.pause(elementUtil.elementLoadTime);
    await elementUtil.click(await pages.order.orderPageLinkElem);
});

Then(/^The user page shows the Create Account & Deposit label - Test (\d+) Scenario (\d+)$/, async (testId: number, scenarioId: number) => {
    await browser.pause(elementUtil.elementLoadTime);
    await expect(pages.user.createAccounntAndDepositLabelElem).toBeExisting();
    await expect(pages.user.createAccounntAndDepositLabelElem).toHaveText(expect.stringContaining('Create Account & Deposit'));
      
});

Then(/^The order page shows the Place Perpetual Order label - Test (\d+) Scenario (\d+)$/, async (testId: number, scenarioId: number) => {
    await browser.pause(elementUtil.elementLoadTime);
    await expect(pages.order.placeOrderLabelElem).toBeExisting();
    await expect(pages.order.placeOrderLabelElem).toHaveText(expect.stringContaining('Place Perpetual Order'));
      
});
When(/^A user fills the create account and deposit form and clicks submit - Test (\d+) Scenario (\d+)$/, async (testId: number, scenarioId: number) => {
    await pages.user.formAmountInputElem.setValue(0.001);
    await browser.pause(elementUtil.elementLoadTime);
    await pages.user.formTokenInputButtonTextElem.setValue("SOL");
    await pages.user.formTokenSelectElemElem.setValue("1");
    await pages.user.formTokenSelectElemElem.selectByVisibleText("SOL");

    await browser.pause(elementUtil.elementLoadTime*1.5);
    await browser.switchWindow('Phantom Wallet');
    const currentHandlesInner = await browser.getWindowHandles();
    console.log({afterwistchingDeposit:1,currentHandlesInner})
    await elementUtil.click(await phantomPO.confirmPhantomWalletDepositButton);
    
});
When(/^A user fills the place limit order form and clicks submit - Test (\d+) Scenario (\d+)$/, async (testId: number, scenarioId: number) => {
    await pages.order.formAmountInputElem.setValue(0.02);
    await browser.pause(elementUtil.elementLoadTime);
    await pages.order.formTokenInputButtonTextElem.setValue("Limit");
    await pages.order.formTokenSelectElemElem.setValue("limit");
    await pages.order.formTokenSelectElemElem.selectByVisibleText("Limit");

    await browser.pause(elementUtil.elementLoadTime*1.5);
    await browser.switchWindow('Phantom Wallet');
    const currentHandlesInner = await browser.getWindowHandles();
    console.log({afterwistchingDeposit:1,currentHandlesInner})
    await elementUtil.click(await phantomPO.confirmPhantomWalletDepositButton);
    
});
Then(/^The request should be successful - Test (\d+) Scenario (\d+)$/, async (testId: number, scenarioId: number) => {
    
    await browser.pause(elementUtil.elementLoadTime*1.5);
    await expect(pages.user.successfulDepositText).toBeExisting();
    await expect(pages.user.successfulDepositText).toHaveText(expect.stringContaining('Successfully created account and deposited'));
});

const handleSetupPhantomWallet = async () => {
    await browser.url("chrome-extension://bfnaelmomeimhlpmgjnjophhpkkoljpa/onboarding.html");
    await browser.pause(2000);
    await browser.switchWindow("chrome-extension://bfnaelmomeimhlpmgjnjophhpkkoljpa/onboarding.html");
    await elementUtil.click(await phantomPO.haveExistingWalletButton);
    await browser.pause(elementUtil.shortWaitTime);
    await elementUtil.click(await phantomPO.importRecoveryPhraseButton);
    await browser.pause(elementUtil.shortWaitTime);
    await phantomPO.importAccount();
    
}