import { Locator, Page } from '@playwright/test';
import BasePage from './BasePage';

export default class HomePage extends BasePage {
    readonly connectWalletButton: Locator;
    readonly connectWalletPopupTitle: Locator;
    readonly userTab: Locator;
    readonly spotTab: Locator;
    readonly perpsTab: Locator;
    readonly accountDropdown: Locator;

    constructor(page: Page) {
        super(page);
        this.connectWalletButton = page.locator('.wallet-adapter-button.wallet-adapter-button-trigger').first();
        this.connectWalletPopupTitle = page.locator('.wallet-adapter-modal-title').last();
        this.userTab = page.locator('a[href="/user"]').first();
        this.spotTab = page.locator('a[href="/spot"]').first();
        this.perpsTab = page.locator('a[href="/perps"]').first();
        this.accountDropdown = page.getByText('Main Account', { exact: true }).first();
    }

    async selectAccout(accountId: number) {
        await this.accountDropdown.click();
        return this.page.getByText(`ID: ${accountId}`).first().click();
    }
}
