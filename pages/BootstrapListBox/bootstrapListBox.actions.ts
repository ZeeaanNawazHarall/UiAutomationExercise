import { Page, expect } from '@playwright/test';
import { bootstrapListBoxLocators } from './BootstrapListBox.locators';
import { error } from 'console';

export class bootstrapListBoxActions {
    private locators: bootstrapListBoxLocators;

    constructor(private page: Page) {
        this.locators = new bootstrapListBoxLocators(page);
    }

    async isBootstrapHeadingVisible(): Promise<boolean> {
        await this.page.waitForLoadState('load');
        await this.locators.bootstrapHeading.waitFor( { state: 'visible'})
        return await this.locators.bootstrapHeading.isVisible();
    }

    async searchLeft(name: string) {
        await this.page.waitForLoadState('load');
        await this.locators.leftSearchField.fill(name);
    }

    async searchRight(name: string) {
        await this.page.waitForLoadState('load');
        await this.locators.rightSearchField.fill(name);
    }

    async clickRightListBox(name: string) {
        await this.page.waitForLoadState('load');
        const boxLocator = this.page.locator(`//div[@class="well"] //ul/li[text()="${name}"]`);

        await boxLocator.waitFor({ state: 'visible' })
        if (await boxLocator.isVisible() && await boxLocator.isEnabled()) {
            await boxLocator.click();
        } else {
            throw new error("The right box item is not visible or enabled");
        }
    }

    async clickLeftListBox(name: string) {
        await this.page.waitForLoadState('load');
        const boxLocator = this.page.locator(`//div[@class="well text-right"] //ul/li[text()="${name}"]`);

        await boxLocator.waitFor({ state: 'visible' })
        if (await boxLocator.isVisible() && await boxLocator.isEnabled()) {
            await boxLocator.click();
        } else {
            throw new error("The left box item is not visible or enabled");
        }
    }

    async clickLeftButton() {
        await this.page.waitForLoadState('load');

        await this.locators.leftButton.waitFor({ state: 'visible'})
        if (await this.locators.leftButton.isVisible() && await this.locators.leftButton.isEnabled()) {
            await this.locators.leftButton.click();
        } else {
            throw new error("The left > button is not visible or enabled");
        }
    }

    async clickRightButton() {
        await this.page.waitForLoadState('load');
        await this.locators.rightButton.click();

        await this.locators.rightButton.waitFor({ state: 'visible' })
        if (await this.locators.rightButton.isVisible() && await this.locators.rightButton.isEnabled()) {
            await this.locators.rightButton.click();
        } else {
            throw new error("The right > button is not visible or enabled");
        }
    }

    async allItemsInleftBox() {
        await this.page.waitForLoadState('load');
        await this.locators.leftItemBox.nth(0).waitFor({ state: 'visible' });
        return await this.locators.leftItemBox.allTextContents();
    }

    async allItemsInRightBox() {
        await this.page.waitForLoadState('load');
        await this.locators.rightItemBox.nth(0).waitFor({ state: 'visible'});
        return await this.locators.rightItemBox.allTextContents();
    }
}