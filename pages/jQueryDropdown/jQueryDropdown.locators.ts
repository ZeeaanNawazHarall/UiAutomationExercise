import { Page, Locator } from '@playwright/test';

export class jQueryLocators {
    jQueryHeading: Locator;
    countryDropdown: Locator;
    dropdownSearchField: Locator;
    mutipleSearchField: Locator;
    dropDisableValueField: Locator;
    fileSelectField: Locator;
    countrySelectedValue: Locator;

    constructor(private page: Page) {
        this.jQueryHeading = this.page.locator('//h1[text()="Jquery Dropdown Search Demo"]');
        this.countryDropdown = this.page.locator('//span[contains(@class,"select2-selection") and @aria-labelledby="select2-country-container"]');
        this.dropdownSearchField = this.page.locator('//span[@class="select2-dropdown select2-dropdown--below"]//input[@type="search"]');
        this.countrySelectedValue = this.page.locator('//span[@id="select2-country-container"]');
        this.mutipleSearchField = this.page.locator('//span[@class="selection"]//input[@type="search"]');
        this.dropDisableValueField = this.page.locator('//span[@class="selection"]//span[@class="select2-selection__rendered" and @title="Puerto Rico"]');
        this.fileSelectField = this.page.locator('//select[@id="files"]');
    }
}