import { Page, Locator } from '@playwright/test';

export class javaScriptAlertLocators {
    javascriptAlertHeading: Locator;
    confirmBoxText: Locator;
    propmtBoxText: Locator;
    
    constructor(private page: Page) {
        this.javascriptAlertHeading = this.page.locator('//h1[text()="Javascript Alert Box Demo"]');
        this.confirmBoxText = this.page.locator('//p[@id="confirm-demo"]');
        this.propmtBoxText = this.page.locator('//p[@id="prompt-demo"]');
    }
}