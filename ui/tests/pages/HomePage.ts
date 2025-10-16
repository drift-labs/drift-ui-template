import {Page} from '@playwright/test';
import {BasePage} from "../base/BasePage";
import {SELECTORS} from "../config/constants";

export class HomePage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    // Page elements
    get connectWalletButton() { return this.page.locator(SELECTORS.COMMON.CONNECT_WALLET_BUTTON); }

    // Page actions
    async navigateToHome(): Promise<void> {
        await this.page.goto('/');
        await this.waitForPageLoad();
    }

    // Page actions
    async navigateToUser(): Promise<void> {
        await this.page.goto('/user');
        await this.waitForPageLoad();
    }

    async connectToWallet(wallet: string): Promise<void> {
        await this.clickElement(this.connectWalletButton.first());
        await this.clickElement(this.page.locator(`//button[contains(@class, 'wallet-adapter-button') and contains(., '${wallet}')]`));
    }

    async disconnectWallet(): Promise<void> {
        await this.clickElement(this.connectWalletButton.first());
        await this.clickElement(this.page.locator(`//li[text()="Disconnect"]`).first());
    }
}
