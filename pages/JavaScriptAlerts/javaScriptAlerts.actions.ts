import { Page } from '@playwright/test';
import { javaScriptAlertLocators } from './JavaScriptAlerts.locators';
import { error } from 'console';

export class javaScriptAlertActions {
    private locators: javaScriptAlertLocators;

    constructor(private page: Page) {
        this.locators = new javaScriptAlertLocators(page);
    }

    // Verify heading
    async isHeadingVisible(): Promise<boolean> {
        await this.page.waitForLoadState('domcontentloaded');
        await this.locators.javascriptAlertHeading.waitFor( { state: 'visible'})
        return await this.locators.javascriptAlertHeading.isVisible();
    }

    // Locate the alert button
    async locateAlertButton(text: string) {
        await this.page.waitForLoadState('domcontentloaded');
        const button = this.page.locator(`//p[text()="${text}"]/button[text()="Click Me"]`);

        await button.waitFor({ state: 'visible' });
        if ( await button.isVisible() && await button.isEnabled()) {
            await button.click();
        } else{
            throw new error("Button is not visible or enabled");
        }
    }

    async getConfirmAlertBoxText() {
        await this.page.waitForLoadState('domcontentloaded');
        await this.locators.confirmBoxText.waitFor({ state: 'visible' })

        const text = await this.locators.confirmBoxText.textContent();
        return text
    }

    async getPromptAlertBoxText() {
        await this.page.waitForLoadState('domcontentloaded');
        await this.locators.propmtBoxText.waitFor({ state: 'visible' })

        const text = await this.locators.propmtBoxText.textContent();
        return text;
    }
}