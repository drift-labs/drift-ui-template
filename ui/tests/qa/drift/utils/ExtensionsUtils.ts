import { Page, BrowserContext, chromium, expect } from '@playwright/test';
import * as path from 'path';
import * as fs from 'fs';

export default class ExtensionsUtils {
    static context: BrowserContext;
    // static tempDir = './temp';

    static async launchPhantomExtension(tempDir: string) {
        const pathToExtension = path.join(__dirname, '../extensionsFiles/bfnaelmomeimhlpmgjnjophhpkkoljpa/25.35.0_0/');
        const browserArray = [];

        // Check if the temporary directory exists and delete it if it does
        if (fs.existsSync(tempDir)) {
            fs.rmdirSync(tempDir, { recursive: true }); // Delete the temp directory
        }
        // Launch browser with extension loaded in the same context
        ExtensionsUtils.context = await chromium.launchPersistentContext(tempDir, {
            headless: false,
            args: [
                `--disable-extensions-except=${pathToExtension}`,
                `--load-extension=${pathToExtension}`,
            ],
        });
        browserArray.push(ExtensionsUtils.context);
        const [newPage] = await Promise.all([
            ExtensionsUtils.context.waitForEvent('page'),
        ]);
        // const page = await context.newPage();
        // await page.goto('chrome-extension://bfnaelmomeimhlpmgjnjophhpkkoljpa/popup.html'); // Update with your extension's page URL
        await newPage.waitForLoadState();
        return newPage;
    }

    static async setUpPhantomExtension(page: Page, recoveryPhrase: string[]) {
        await page.getByText('I already have a wallet').click();
        await page.getByText('Import Recovery Phrase').click();

        // Loop through the recovery phrase words and fill them in
        for (let i = 0; i < recoveryPhrase.length; i++) {
            await page.getByTestId(`secret-recovery-phrase-word-input-${i}`).fill(recoveryPhrase[i]);
        }

        // Import Wallet button
        await page.getByTestId('onboarding-form-submit-button').click();
        // Continue button
        await page.getByTestId('onboarding-form-submit-button').click();
        await expect(page.getByText('We found 1 account')).toBeVisible({ timeout: 10000 });

        await page.getByTestId('onboarding-form-submit-button').click({ timeout: 10000 });
        // TODO: The password should be stored in a secrets file. In the future, they need to be moved there
        await page.getByTestId('onboarding-form-password-input').fill('Drift@Test#$');
        await page.getByTestId('onboarding-form-confirm-password-input').fill('Drift@Test#$');
        await page.getByTestId('onboarding-form-terms-of-service-checkbox').click();
        // Continue button
        await page.getByTestId('onboarding-form-submit-button').click();
        // Get Started
        await page.getByTestId('onboarding-form-submit-button').click({ timeout: 10000 });
        // // Wait for the extension to load properly
        // await page.waitForTimeout(3000);
    }

    static async handlePhantomConnectionPopup(options: { page: Page, isSetUpApprove?: boolean, isDepositApprove?: boolean }) {
        // Wait for the popup to appear
        await options.page.waitForTimeout(5000); // TODO: Need to remove the hard wait and use the pool machine instead.
        const pages = this.context.pages();

        // If a new page opened for the connection popup
        const popupPage = pages.find(p => p.url().includes('bfnaelmomeimhlpmgjnjophhpkkoljpa'));
        if (popupPage && options.isSetUpApprove) {
            await popupPage.bringToFront();
            await popupPage.waitForLoadState();
            await popupPage.getByTestId('primary-button').click();
        }
        if (popupPage && options.isDepositApprove) {
            await popupPage.getByText('Proceed anyway (unsafe)').click();
            await popupPage.waitForTimeout(1000); // TODO: Need to improve
            await popupPage.getByText('Confirm (unsafe)').click();
            await popupPage.waitForTimeout(1000); // TODO: Need to improve
            await popupPage.getByTestId('acknowledge--button').click();
            await popupPage.waitForTimeout(1000); // TODO: Need to improve
            await popupPage.getByText('Yes, confirm (unsafe)').click();
        }

        // Wait for connection to complete
        return options.page.waitForTimeout(2000); // TODO: Need to remove the hard wait and use the pool machine instead.
    }
}
