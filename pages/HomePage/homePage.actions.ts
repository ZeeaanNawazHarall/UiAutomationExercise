import { Locator, Page, expect } from '@playwright/test';
import { error } from 'console';
export class HomePageActions {
    protected message: string;

    constructor(protected page: Page) { }

    async navigateToHomePage() {
        await this.page.goto('https://www.lambdatest.com/selenium-playground/', { waitUntil: 'domcontentloaded'});

    }

    async clickLinks(linkText: string) {
        await this.page.waitForLoadState('domcontentloaded');
        const linklocator = this.page.locator(`//li/a[text()="${linkText}"]`);

        await linklocator.waitFor({ state: 'visible'});
        if ( await linklocator.isVisible() && await linklocator.isEnabled()) {
            linklocator.click();
        } else {
            throw new error("Form link is not visible or rnabled");
        }
    }
}