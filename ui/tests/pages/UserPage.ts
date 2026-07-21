import {expect, Page} from '@playwright/test';
import {BasePage} from "../base/BasePage";
import {Asset, SELECTORS} from "../config/constants";

export class UserPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    // Page elements
    get amountInput() { return this.page.locator(SELECTORS.USER.AMOUNT_INPUT); }
    get createAccountButton() { return this.page.locator(SELECTORS.USER.SUBMIT_BUTTON); }
    get mainAccountLabel() { return this.page.locator(SELECTORS.USER.MAIN_ACCOUNT_LABEL); }


    // Page actions
    async navigateToUser(): Promise<void> {
        await this.page.goto('/user');
        await this.waitForPageLoad();
    }

    async selectAsset(asset: Asset): Promise<void> {
        const selectLocator = this.page.locator('select');
        // Wait for the select to be ready
        await selectLocator.waitFor({ state: 'visible' });
        await expect(selectLocator).toContainText('USDC');

        await this.page.selectOption('select', { label: asset });
    }

    async fillAmount(amount: string): Promise<void> {
        await this.fillInput(this.amountInput, amount);
    }

    async clickCreateAccountButton(): Promise<void> {
        await this.clickElement(this.createAccountButton);
    }
}
