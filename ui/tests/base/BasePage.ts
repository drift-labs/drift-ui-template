import { Page, Locator, expect } from '@playwright/test';
import {TIMEOUTS} from "../config/constants";


export abstract class BasePage {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async waitForPageLoad(timeout: number = TIMEOUTS.MEDIUM): Promise<void> {
        await this.page.waitForLoadState('networkidle', { timeout });
    }

    async clickElement(selector: string | Locator): Promise<void> {
        const element = typeof selector === 'string' ? this.page.locator(selector) : selector;
        await element.waitFor({ state: 'visible' });
        await element.click();
    }

    async fillInput(selector: string | Locator, value: string): Promise<void> {
        const element = typeof selector === 'string' ? this.page.locator(selector) : selector;
        await expect(element).toBeVisible()
        await element.clear();
        await element.fill(value);
    }

    async selectOption(selector: string | Locator, value: string): Promise<void> {
        const element = typeof selector === 'string' ? this.page.locator(selector) : selector;
        await element.waitFor({ state: 'visible' });
        await element.selectOption(value);
    }

    async getText(selector: string | Locator): Promise<string> {
        const element = typeof selector === 'string' ? this.page.locator(selector) : selector;
        await element.waitFor({ state: 'visible' });
        return await element.textContent() || '';
    }

    async waitForElement(selector: string | Locator, timeout: number = TIMEOUTS.MEDIUM): Promise<void> {
        const element = typeof selector === 'string' ? this.page.locator(selector) : selector;
        await element.waitFor({ state: 'visible', timeout });
    }

    async assertElementVisible(selector: string | Locator): Promise<void> {
        const element = typeof selector === 'string' ? this.page.locator(selector) : selector;
        await expect(element).toBeVisible();
    }

    async assertElementHidden(selector: string | Locator): Promise<void> {
        const element = typeof selector === 'string' ? this.page.locator(selector) : selector;
        await expect(element).toBeHidden();
    }

    async assertElementText(selector: string | Locator, expectedText: string): Promise<void> {
        const element = typeof selector === 'string' ? this.page.locator(selector) : selector;
        await expect(element).toHaveText(expectedText);
    }

    async takeScreenshot(name: string): Promise<void> {
        await this.page.screenshot({ path: `screenshots/${name}.png` });
    }
}
