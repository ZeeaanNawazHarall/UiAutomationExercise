import { Page, Locator } from '@playwright/test';

export class checkboxDemoLocators {
    checkBoxHeading: Locator;
    checkedText: Locator;

    constructor(private page: Page) {
        this.checkBoxHeading = this.page.locator('//h1[text()="Checkbox Demo"]');
        this.checkedText = this.page.locator('//p[text()="Checked!"]')
    }
}