import { Page, expect } from '@playwright/test';
import { ajaxFormSubmitLocators } from './AjaxSubmitForm.locators';
import { HomePageActions } from '../HomePage/homePage.actions';

export class ajaxFormSubmitActions {
    private locators: ajaxFormSubmitLocators;

    constructor(private page: Page) {
        this.locators = new ajaxFormSubmitLocators(page);
    }

    async isAjaxFormSubmitHeadingVisible(): Promise<boolean> {
        await this.page.waitForLoadState('domcontentloaded');
        await this.locators.ajaxFormSubmitHeading.waitFor({ state: 'visible'})
        return await this.locators.ajaxFormSubmitHeading.isVisible();
    }

    async enterName(name: string) {
        await this.page.waitForLoadState('domcontentloaded');
        await this.locators.nameField.fill(name);
    }

    async enterMessage(message: string) {
        await this.page.waitForLoadState('domcontentloaded');
        await this.locators.messageField.fill(message);
    }

    async clickSubmitButton() {
        await this.page.waitForLoadState('domcontentloaded');
        await this.locators.submitButton.click();
    }

    async isImagePresent() {
        await this.page.waitForLoadState('domcontentloaded');
        await this.locators.ajaxImage.waitFor({ state: 'visible'});
        return await this.locators.ajaxImage.isVisible();
    }

    async getAjaxBoxText() {
        await this.page.waitForLoadState('domcontentloaded');
        return await this.locators.ajaxBox.allTextContents();
    }
}