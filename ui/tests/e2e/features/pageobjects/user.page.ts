import { $ } from '@wdio/globals'
import Page from './page';

/**
 * page containing specific selectors and methods for a specific page
 */
export class UserPage extends Page {
  /**
   * define homepage selectors using getter methods
   */
  
  get createAccounntAndDepositLabelElem() {
    return $("//*[text()='Create Account & Deposit']")
  }
  get formAmountInputElem() {
    return $("//input[@data-slot='input']")
  }
 
  get formTokenInputButtonElem() {
    return $("//button[@data-slot='select-trigger']")
  }
  get formTokenInputButtonTextElem() {
    return $("//span[@data-slot()='select-value']")
  }

    get formTokenSelectElemElem() {
    return $("//form//select");
  }

  get successfulDepositText(){
    return $('div.*=Successfully created account and deposited');
  }
 
  
  /**
   * overwrite specific options to adapt it to page object
   */
  public open () {
    return super.open('');
  }
}

export default new UserPage();
