import { $ } from '@wdio/globals'
import Page from './page';

/**
 * page containing specific selectors and methods for a specific page
 */
export class OrderPage extends Page {
  /**
   * define homepage selectors using getter methods
   */
  
  get placeOrderLabelElem() {
    return $("//*[text()='Place Perpetual Order']")
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

   get orderPageLinkElem() {
      return $("//nav//a[@href='/perps']");
    }
 
  
  /**
   * overwrite specific options to adapt it to page object
   */
  public open () {
    return super.open('');
  }
}

export default new OrderPage();
