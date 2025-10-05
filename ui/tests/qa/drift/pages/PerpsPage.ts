import { Locator, Page } from '@playwright/test';
import BasePage from './BasePage';

export default class PerpsPage extends BasePage {
    readonly perpsPageHeader: Locator;
    readonly selectMarketDropdown: Locator;
    readonly orderTypeDropdown: Locator;
    readonly sizeTypeDropdown: Locator;
    readonly inputText: Locator;
    readonly checkbox: Locator;
    readonly tablerow: Locator;
    readonly tablecolumn: Locator;
    readonly cancelBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.perpsPageHeader = page.getByText('Perpetuals Trading', { exact: true }).first();
        this.selectMarketDropdown = page.getByText('Select Market', { exact: true }).locator('..').locator('button').first();
        this.orderTypeDropdown = page.getByText('Order Type').locator('..').locator('button').first();
        this.sizeTypeDropdown = page.getByText('Size Type').locator('..').locator('button').first();
        this.inputText = page.locator('input[type="number"]');
        this.checkbox = page.getByRole('checkbox');
        this.tablerow = page.locator('tbody[data-slot="table-body"]').locator('tr').first();
        this.tablecolumn = this.tablerow.locator('td').locator('span');
        this.cancelBtn = page.getByText('Cancel All', { exact: true });
    }

    async placePerpetualOrder(assetPair: string, orderType:string, sizeInput: string, limitPrice: string) {
        await this.selectMarketDropdown.click();
        await this.page.getByText(assetPair).click();
        await this.orderTypeDropdown.click();
        await this.page.selectOption('select[aria-hidden="true"]', { label: orderType }, { timeout: 10000 });
        await this.page.keyboard.press('Escape');
        await this.inputText.first().fill(sizeInput);
        await this.inputText.nth(1).fill(limitPrice);
        await this.checkbox.first().click();
        await this.checkbox.nth(2).click();
        return this.page.getByText('Place Long Order').click();
    }
}
