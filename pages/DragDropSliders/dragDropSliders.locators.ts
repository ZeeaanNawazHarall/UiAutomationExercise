import { Page, Locator } from '@playwright/test';

export class dragDropLocators {
    dragDroppHeading: Locator;
    slider: Locator;
    valueText: Locator;

    constructor(private page: Page) {
        this.dragDroppHeading = this.page.locator('//h1[text()="Slider Demo"]')
    }
}