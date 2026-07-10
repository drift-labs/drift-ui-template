import { $ } from '@wdio/globals'
import Page from './page';

/**
 * page containing specific selectors and methods for a specific page
 */
export class HomePage extends Page {
  /**
   * define homepage selectors using getter methods
   */
  
  get connectWalletButton() {
    return $("//*[text()='Connect Wallet']")
  }
  get connectPhantomWalletButton() {
    return $("//button[text()='Phantom']")
  }

  get connectedWalletVerificationElem() {
    return $("//span[text()='Connected']")
  }

  get userPageLinkElem() {
    return $("//nav//a[@href='/user']");
  }

  // review below and remove
  public get connectToSepoliaNetworkButton () {
    return $("//button[@data-test='MetaMaskConnector__Button__connect']");
  }
  public get connectedAccountAddressElem () {
    return $("//div[@data-test='MetaMaskConnector__Div__connect']");
  } 
  public get connectedAddressInput () {
    return $("//input[@data-test='InputAddress__Input__addressValue']");
  }
  public get connectedAddressSubmitButton () {
    return $("//button[@data-test='InputAddress__Button__submit']");
  }
  public get selectedTokenBalanceElem () {
    return $("//div[@data-test='TokenBalance__Div__balanceInfo']");
  }
  public get selectedTokenTableHistoryElem () {
    return $("//table[@data-test='DepositHistory__Table__history']");
  }
  public get exampleTokenLinkElem () {
    return $("//span[@data-test='InputAddress__Span__exampleTokenLink']");
  }
  public get depositInputErrorElem () {
    return $("//div[@data-test='DepositToken__Div__error']");
  }
  public get depositInputElem () {
    return $("//input[@data-test='InputAddress__Span__exampleTokenLink']");
  }
  public get depositInputButtonElem () {
    return $("//input[@data-test='InputAddress__Span__exampleTokenLink']");
  } 
  public get getMoreMintEditFeeButton () {
    return $("//button[@data-testid='edit-gas-fee-icon']");
  }
  public get getMoreMintEditFeeAdvanceButton () {
    return $("//button[@data-testid='edit-gas-fee-item-custom']");
  }
  public get getMoreMintEditFeeAdvanceBaseFeeInput () {
    return $("//input[@data-testid='base-fee-input']");
  } 
  public get getMoreMintEditFeeAdvancePriorityFeeInput () {
    return $("//input[@data-testid='priority-fee-input']");
  }
  public get getMoreMintEditFeeAdvancePrioritySaveButton () {
    return $("//button[text()='Save']");
  }
  public get getMoreMintConfirmButton () {
    return $("//button[text()='Confirm']");
  }
  public get getMoreTokenLinkElem () {
    return $("//div[@data-test='TokenBalance__Div__getMoreExampleTokensAction']");
  }
  public get getMoreTokenLinkAcceptButton () {
    return $("//button[@data-test='InputAddress__Span__exampleTokenLink']");
  }
  public get networkErrorElem () {
    return $("//div[@data-test='MetaMaskConnector__Div__error']");
  }
  
  /**
   * overwrite specific options to adapt it to page object
   */
  public open () {
    return super.open('');
  }
}

export default new HomePage();
