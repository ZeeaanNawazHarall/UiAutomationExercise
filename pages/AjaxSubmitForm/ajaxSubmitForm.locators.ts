import { Page, Locator } from '@playwright/test';

export class ajaxFormSubmitLocators {
    ajaxFormSubmitHeading: Locator;
    nameField: Locator;
    messageField: Locator;
    submitButton: Locator;
    ajaxImage: Locator;
    ajaxBox: Locator;
    constructor(private page: Page) {
        this.ajaxFormSubmitHeading = this.page.locator('//h1[text()="Form Submit Demo"]');
        this.nameField = this.page.locator('//input[@id="title"]');
        this.messageField = this.page.locator('//textarea[@id="description"]');
        this.submitButton = this.page.locator('//input[@name="btn-submit"]');
        this.ajaxImage = this.page.locator("//div[@id='submit-control']/img");
        this.ajaxBox = this.page.locator("//div[@id='submit-control']");
    }
}