import {expect, Page} from '@playwright/test';
import {BasePage} from "../base/BasePage";
import {OrderDirection, OrderTypeValue, PERPETUALS_VALUE, SELECTORS, SizeType} from "../config/constants";
import { sleep } from '../base/BaseTest';

export class PerpetualsPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    // Page elements
    get selectMarketDropdwon() { return this.page.locator(SELECTORS.PERPETUALS.MARKET_DROPDOWN); }
    get orderTypeSelect() { return this.page.locator(SELECTORS.PERPETUALS.ORDER_TYPE_SELECT); }
    get sizeTypeSelect() { return this.page.locator(SELECTORS.PERPETUALS.SIZE_TYPE_SELECT); }
    get limitsizeInput() { return this.page.locator('//label[text()="Limit Price (USDC)"]/following-sibling::input'); }
    get sizeAmount() { return this.page.locator('//label[text()="Size (SOL)"]/following-sibling::input'); }
    get placeOrderButton() { return this.page.locator(SELECTORS.USER.SUBMIT_BUTTON); }
    get openOrderDataLocator() { return this.page.locator('//span[contains(text(),"Open Orders")]/parent::div/parent::div/following-sibling::div//span'); }
    get cancelOrderButton() { return this.page.locator('//button[text()="Cancel"]'); }


    // Page actions
    async navigateToPerpetuals(): Promise<void> {
        await this.page.goto('/perps');
        await this.waitForPageLoad();
    }

    async selectMarketPerpetual(perpetual_option: string): Promise<void> {
        // Wait for the select to be ready
        await this.selectMarketDropdwon.waitFor({ state: 'visible' });
        await this.clickElement(this.selectMarketDropdwon);
        await this.clickElement(this.page.locator(`//span[contains(text(),'${perpetual_option}')]`));
        await expect(this.page.locator(SELECTORS.PERPETUALS.MARKET_DROPDOWN).locator('//span')).toHaveText(perpetual_option);
    }

    async selectOrderType(order_type: OrderTypeValue): Promise<void> {
        const selectLocator = this.orderTypeSelect;
        // Wait for the select to be ready
        await selectLocator.waitFor({ state: 'visible' });
        await expect(selectLocator).toHaveText('MarketLimitTake ProfitStop LossOracle Limit');

        await selectLocator.selectOption(order_type);
    }

    async selectSizeType(size_type: SizeType): Promise<void> {
        const selectLocator = this.sizeTypeSelect;
        // Wait for the select to be ready
        await selectLocator.waitFor({ state: 'visible' });
        await expect(selectLocator).toHaveText('Base Asset (BTC)Notional Value (USDC)');

        await selectLocator.selectOption(size_type);
    }

    async selectOrderDirection(order_direction: OrderDirection): Promise<void> {
        await this.clickElement(this.page.locator(`//button[text()='${order_direction}']`));   
    }

    async fillSizeAmount(amount: string): Promise<void> {
        await this.fillInput(this.sizeAmount, amount);
    }

    async fillLimitPrice(amount: string): Promise<void> {
        await this.fillInput(this.limitsizeInput, amount);
    }

    async clickPlaceOrderButton(): Promise<void> {
        await this.clickElement(this.placeOrderButton);
    }

    async cancelOrderCreated(): Promise<void> {
        await sleep(12000);
        await this.clickElement(this.cancelOrderButton);
    }

    async modifyUseSwift(): Promise<void> {
        await this.clickElement(this.page.locator(`//span[contains(text(),"Use Swift")]/preceding-sibling::input`));   
    }
}
