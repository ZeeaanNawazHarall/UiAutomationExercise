import { Page } from '@playwright/test';
import { error } from 'console';
import { checkboxDemoLocators } from './CheckboxDemo.locators';

export class checkboxDemoActions {
    private locators: checkboxDemoLocators;

    constructor(private page: Page) {
        this.locators = new checkboxDemoLocators(page);
    }

    // Verify heading
    async isHeadingVisible(): Promise<boolean> {
        await this.page.waitForLoadState('domcontentloaded');
        await this.locators.checkBoxHeading.waitFor( { state: 'visible'})
        return await this.locators.checkBoxHeading.isVisible();
    }

    // Single checkbox
    async locateAndcheckbox(labeltext: string) {
        await this.page.waitForLoadState('domcontentloaded');
        const checkboxLocator = this.page.locator(`//label[text()="${labeltext}"]/input[@type="checkbox"]`);

        await checkboxLocator.waitFor({ state: 'visible' })
        if (await checkboxLocator.isEnabled()) {
            await checkboxLocator.check();
        }
    }

    async isCheckedTextVisible(): Promise<boolean> {
        await this.page.waitForLoadState('domcontentloaded');
        await this.locators.checkedText.waitFor({ state: 'visible' })
        return await this.locators.checkedText.isVisible();
    }

    //check Disabled
    async tryCheckDisabledCheckbox(labelText: string): Promise<boolean> {
        const checkbox = this.page.locator(`//label[text()="${labelText}"]/input[@type="checkbox"]`);
        await checkbox.waitFor({ state: 'visible' });

        try {
            await checkbox.check({ force: false, timeout: 500 });
            return true;
        } catch (err) {
            return false;
        }
    }


    // Multiple checkboxes
    async locateMutiplecheckbox(name: string) {
        await this.page.waitForLoadState('domcontentloaded');
        const checkboxLocator = this.page.locator(`//input[@name="${name}"]`);

        await checkboxLocator.waitFor({ state: 'visible' })
        if (await checkboxLocator.isVisible() && await checkboxLocator.isEnabled()) {
            await checkboxLocator.check();
        } else {
            throw new error("The checkbox is not visible or enabled");
        }
    }

    // Check All button
    async clickCheckUncheckAllButton(buttonText: string) {
        await this.page.waitForLoadState('domcontentloaded');

        const checkboxLocator = this.page.locator(`//button[text()="${buttonText}"]`);

        await checkboxLocator.waitFor({ state: 'visible' })
        if (await checkboxLocator.isVisible() && await checkboxLocator.isEnabled()) {
            await checkboxLocator.click();
        } else {
            throw new error("The check all button is not visible or enabled");
        }
    }

    // Verify checkbox is checked
    async isChecked(nameOrLabel: string): Promise<boolean> {
        await this.page.waitForLoadState('domcontentloaded');
        const checkbox = this.page.locator(`//label[text()="${nameOrLabel}"]/input[@type="checkbox"] | //input[@name="${nameOrLabel}"]`);
        await checkbox.waitFor({ state: 'visible'});
        return await checkbox.isChecked();
    }
}