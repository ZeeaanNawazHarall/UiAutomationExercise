import { Page } from '@playwright/test';
import { jQueryLocators } from './jQueryDropdown.locators';

export class jQueryActions {
    private locators: jQueryLocators;

    constructor(private page: Page) {
        this.locators = new jQueryLocators(page);
    }

    // Verify heading
    async isHeadingVisible(): Promise<boolean> {
        await this.page.waitForLoadState('domcontentloaded');
        await this.locators.jQueryHeading.waitFor( { state: 'visible'})
        return await this.locators.jQueryHeading.isVisible();
    }

    // Click on country dropdown
    async clickOnCountryDropdown() {
        await this.page.waitForLoadState('domcontentloaded');
        await this.locators.countryDropdown.click();


        // await this.locators.countryDropdown.waitFor({ state: 'visible' });
        // if (await this.locators.countryDropdown.isVisible() && await this.locators.countryDropdown.isEnabled()) {
        //     await this.locators.countryDropdown.click();
        // } else {
        //     throw new Error("Country Dropdown link is not visible or rnabled");
        // }
    }

    // Search country
    async searchCountryFromDropdown(name: string) {
        await this.page.waitForLoadState('domcontentloaded');

        await this.locators.dropdownSearchField.waitFor({ state: 'visible' });
        await this.locators.dropdownSearchField.fill(name)
    }

    // Locate the country by name
    async locateCountryByName(name: string) {
        await this.page.waitForLoadState('domcontentloaded');
        const country = this.page.locator(`//ul[@class="select2-results__options"]/li[text()="${name}"]`);
        await country.click();


        // await country.waitFor({ state: 'visible' });
        // if (await country.isVisible() && await country.isEnabled()) {
        //     await country.click();
        // } else {
        //     throw new Error("Country list item is not visible or enabled");
        // }
    }

    // Get selected states
    async getSelectedCountry() {
        await this.page.waitForLoadState('domcontentloaded');
        await this.locators.countrySelectedValue.waitFor({ state: 'visible' });
        return this.locators.countrySelectedValue.textContent();
    }

    // Search and select state
    async searchSelectState(name: string) {
        await this.page.waitForLoadState('domcontentloaded');

        await this.locators.mutipleSearchField.waitFor({ state: 'visible' });
        if (await this.locators.mutipleSearchField.isVisible() && await this.locators.mutipleSearchField.isEnabled()) {
            await this.locators.mutipleSearchField.click();
        } else {
            throw new Error("Country list item is not visible or enabled");
        }
        await this.locators.mutipleSearchField.fill(name);
    }

    // Locate the state by name
    async locateStateByName(name: string) {
        await this.page.waitForLoadState('domcontentloaded');
        const state = this.page.locator(`//ul[@class="select2-results__options"]/li[text()="${name}"]`);
        await state.click();

        // await state.waitFor({ state: 'visible' });
        // if (await state.isVisible() && await state.isEnabled()) {
        //     await state.click();
        // } else {
        //     throw new Error("State list item is not visible or enabled");
        // }
    }

    // Get selected states
    async getMutipleStateSearchResults() {
        await this.page.waitForLoadState('domcontentloaded');
        const text = this.page.locator(`//span[@class="selection"]//li`);
        await text.nth(0).waitFor({ state: 'visible'});
        const contents = await text.allTextContents();

        return contents.map(item => item.replace("×", "").trim()).filter(Boolean);
    }

    // Click on dropdown with disabled values
    async clickOnDisabledDropdown() {
        await this.page.waitForLoadState('domcontentloaded');

        await this.locators.dropDisableValueField.waitFor({ state: 'visible' });
        if (await this.locators.dropDisableValueField.isVisible() && await this.locators.dropDisableValueField.isEnabled()) {
            this.locators.dropDisableValueField.click();
        } else {
            throw new Error("Disable Dropdown link is not visible or rnabled");
        }
    }

    // Locate disabled country
    async locateDisabledCountyBox(name: string): Promise<boolean> {
        await this.page.waitForLoadState('domcontentloaded');
        const country = this.page.locator(`//ul[@class="select2-results__options"]/li[@aria-disabled="true" and text()="${name}"]`);

        // await country.waitFor({ state: 'visible' });
        try {
            await country.click({ force: false, timeout: 500 });
            return true;
        } catch (err) {
            return false;
        }
    }

    // Get selected states
    async getSelectedInDisabledField() {
        await this.page.waitForLoadState('domcontentloaded');

        await this.locators.dropDisableValueField.waitFor({ state: 'visible' });
        return this.locators.dropDisableValueField.textContent();
    }

    // Click on file dropdown
    async clickOnFileDropdown() {
        await this.page.waitForLoadState('domcontentloaded');

        await this.locators.fileSelectField.waitFor({ state: 'visible' });
        if (await this.locators.fileSelectField.isVisible() && await this.locators.fileSelectField.isEnabled()) {
            await this.locators.fileSelectField.click();
        } else {
            throw new Error("File Dropdown link is not visible or rnabled");
        }
    }

    // Locate files
    async locateFileBox(name: string) {
        await this.page.waitForLoadState('domcontentloaded');

        await this.locators.fileSelectField.selectOption({ label: name});
    }

    // Get selected file
    async getSelectedFileValue() {
        await this.page.waitForLoadState('domcontentloaded');

        await this.locators.fileSelectField.waitFor({ state: 'visible' });
        return this.locators.fileSelectField.inputValue();
    }
}