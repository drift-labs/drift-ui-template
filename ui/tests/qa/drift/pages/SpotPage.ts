import { Locator, Page } from '@playwright/test';
import BasePage from './BasePage';

export default class SpotPage extends BasePage {
    readonly spotPageHeader: Locator;
    readonly hideZeroBalCheckbox: Locator;

    constructor(page: Page) {
        super(page);
        this.spotPageHeader = page.getByText('Spot Actions', { exact: true }).first();
        this.hideZeroBalCheckbox = page.getByRole('checkbox').first();
    }

    async getAssetBalance() {
        await this.hideZeroBalCheckbox.click();
        const asset = this.page.locator('tbody[data-slot="table-body"]').locator('td').locator('p').first();
        const balance = await this.page.locator('tbody[data-slot="table-body"]').locator('td').nth(1).locator('p').first().textContent();
        return {
            asset, balance,
        };
    }
}
