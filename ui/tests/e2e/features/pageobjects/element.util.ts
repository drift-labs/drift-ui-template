import { browser } from '@wdio/globals'
import {ChainablePromiseElement, Element, Key} from 'webdriverio';
export class ElementUtil{
    async click(element: ChainablePromiseElement){
        await element.click();
    }
    async enterText(element: ChainablePromiseElement,value: string){
        // element.setValue("")
        // browser.keys([Key.Ctrl,'a'])
        await element.setValue(value)
    }
    async scrollToElement(element: Element){
        await element.scrollIntoView();
    }
    
    public get elementLoadTime(): number {
        return 1000 * 2;
    }

    public get shortWaitTime(): number {
        return 1000;
    }

}
export default new ElementUtil();

export interface DynamicObjectType {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: string | number | boolean | any;
}