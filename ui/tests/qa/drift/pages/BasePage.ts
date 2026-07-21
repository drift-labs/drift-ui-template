import { Page } from '@playwright/test';

export default class BasePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(path = '') {
        return this.page.goto(`${process.env.DRIFT_UI_URL}${path}`);
    }
}
