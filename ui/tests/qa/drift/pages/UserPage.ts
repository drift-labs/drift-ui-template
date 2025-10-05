import { Locator, Page } from '@playwright/test';
import BasePage from './BasePage';

export default class UserPage extends BasePage {
    readonly amountInput: Locator;
    readonly submitBtn: Locator;
    readonly existingUserAccountsText: Locator;

    constructor(page: Page) {
        super(page);
        this.amountInput = page.locator('input[type="number"]').first();
        this.submitBtn = page.locator('button[type="submit"]');
        this.existingUserAccountsText = page.getByText('Existing User Accounts', { exact: true }).first();
    }

    async feachAccountcount() {
        let accountsCount = 0;
        if (await this.existingUserAccountsText.count() === 1) {
            accountsCount =  await this.page.getByText('Total Collateral:').count();
        }
        return accountsCount;
    }

    async selectTokenAmountAndSubmit(token: string, amount: string) {
        await this.page.getByRole('combobox').last().click();
        await this.page.selectOption('select[aria-hidden="true"]', { label: token }, { timeout: 10000 });
        await this.page.keyboard.press('Escape');
        await this.amountInput.click();
        await this.amountInput.clear();
        await this.amountInput.fill(amount);
        return this.submitBtn.click();
    }
}

