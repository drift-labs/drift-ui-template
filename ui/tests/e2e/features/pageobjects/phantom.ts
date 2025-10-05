import elementHelper, {DynamicObjectType} from './element.util';
import {$, browser} from '@wdio/globals'
import {Key} from "webdriverio";
import {type} from "node:os";
import phantomRecovery from '../pagedata/phantom-data';
class Phantom {

    get phantomChromeWebStoreAddExtensionToChromeButton() {
        return $("//*[text()='Add extension']")
    }
    get phantomChromeWebStoreAddExtensionToChromeCancelButton() {
        return $("//*[text()='Cancel']")
    }
    get phantomChromeWebStoreAddToChromeButton() {
        return $("//*[text()='Add to Chrome']")
    }
    get phantomChromeWebStoreRemoveFromChromeButton() {
        return $("//*[text()='Remove from Chrome']")
    }
    get phantomDownloadPageChromeInstallButton() {
        return $("//span[text()='Install MetaMask for Chrome']")
    }
    get phantomPluginLinkButton() {
        return $("//a[text()='Metamask plugin']")
    }
    get phantomDownloadPageChromeTabButton() {
        return $("//div[text()='Chrome']")
    }
    get phantomDownloadPageIOSTabButton() {
        return $("//div[text()='iOS']")
    }
    get haveExistingWalletButton() {
        return $("//button[text()='I already have a wallet']")
    }
       get importRecoveryPhraseButton() {
        return $("//*[text()='Import Recovery Phrase']")
    }
    
    
    get confirmPhantomWalletConnectionButton() {
        return $("//button[text()='Connect']")
    }
    get confirmPhantomWalletDepositButton() {
        return $("//button[text()='Confirm']")
    }
  
    get startedButton() {
        // Get locator of GetStarted button
        return $("//button[text()='Get Started']")
    }
    get importWalletOnboardingButton() {
        // Get locator of Import button
        return $("//button[@data-testid='onboarding-import-wallet']")
    }
    get iAgreeButton() {
        // Get locator of I Agree Button
        return $("//button[text()='I agree']")
    }
    get inputSecretKey() {
        // Get locator of secret key text box
        return $("//input[@id='import-srp__srp-word-0']")
    }
    
    get secretPhaseConfirmButton() {
        // Get locator of password text box
        return $("//button[@data-testid='onboarding-form-submit-button']")
    }
    get inputWalletPassword() {
        // Get locator of password text box
        return $("//input[@data-testid='onboarding-form-password-input']")
    }
    get inputConfirmWalletPassword() {
        // Get locator of confirm button text box
        return $("//input[@data-testid='onboarding-form-confirm-password-input']")
    }
    get importTermsAndConditionCheckBox() {
        // Get locator of terms and condition check box
        return $("//input[@data-testid='onboarding-form-terms-of-service-checkbox']")
    }
    get importWalletContinueButton() {
        // Get locator of import button
        // return $("//button[@data-testid='onboarding-form-submit-button']")
        return $("//button[text()='Continue']")
    }
    get importAllDoneButton() {
        // Get locator of All Done button
        return $("//button[@data-testid='onboarding-complete-done']")
    }
    get importCompleteNextButton() {
        // Get locator of close button of pop up
        return $("//button[@data-testid='pin-extension-next']")
    }
    get importCompleteDoneButton() {
        // Get locator of close button of pop up
        return $("//button[@data-testid='pin-extension-done']")
    }
    get phantomChooseAccountNextButton() {
        // Get locator of close button of pop up
        return $("//button[@data-testid='page-container-footer-next']")
    }
    get phantomChooseAccountConfirmButton() {
        // Get locator of close button of pop up
        return $("//button[@data-testid='page-container-footer-next']")
    }
    get networkIcon() {
        // Get locator of network icon
        return $("//div[@class='app-header__contents']/div[2]//div[@class='chip__left-icon']")
    }

    get nextButton() {
        // Get locator of next button
        return $("//button[text()='Next']")
    }
    get connectButton() {
        // Get locator of connect button
        return $("//button[text()='Connect']")
    }
   
    async importAccount() {
        // Enter the Account information 
        await this.pasteSecretKey(phantomRecovery.recoveryPhrase);
        await elementHelper.click(await this.secretPhaseConfirmButton)
        await browser.pause(elementHelper.elementLoadTime);
        await elementHelper.click(await this.importWalletContinueButton);

        await (await this.inputWalletPassword).setValue(phantomRecovery.password);
        await (await this.inputConfirmWalletPassword).setValue(phantomRecovery.password);
        await elementHelper.click(await this.importTermsAndConditionCheckBox);
       await elementHelper.click(await this.importWalletContinueButton);
       await browser.pause(elementHelper.elementLoadTime);
    }
    
    async pasteSecretKey(secretKey: string) {
        if(typeof secretKey ==='string' && secretKey.length > 0) {
            const joinedPhrase = secretKey;
            console.log({joinedPhrase});
            await (await $("//input[@data-testid='secret-recovery-phrase-word-input-0']")).setValue(joinedPhrase);
            // const secretWords = secretKey.split(" ");
            // let currentIndex=0;
            // for (const word of secretWords){
            //     await (await $("//input[@data-testid='secret-recovery-phrase-word-input-" + currentIndex + "']")).setValue(word);
            //     currentIndex++;
            // }
        }
    }
   


}
export default new Phantom()