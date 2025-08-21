import { Page, Locator } from '@playwright/test';

export class bootstrapListBoxLocators {
    bootstrapHeading: Locator;
    leftSearchField: Locator;
    rightSearchField: Locator;
    leftItemBox: Locator;
    rightItemBox: Locator;
    leftButton: Locator;
    rightButton: Locator;
    constructor(private page: Page) {
        this.bootstrapHeading = this.page.locator('//h1[text()="Bootstrap Dual List Demo"]')
        this.leftSearchField = this.page.locator('//div[@class="well text-right"] //input[@name="SearchDualList"]');
        this.rightSearchField = this.page.locator('//div[@class="well"] //input[@name="SearchDualList"]');
        this.leftItemBox = this.page.locator('//div[@class="well text-right"] //ul/li');
        this.rightItemBox = this.page.locator('//div[@class="well"] //ul/li');
        this.leftButton = this.page.locator('//div[contains(@class,"list-arrows")] /button[text()=">"]');
        this.rightButton = this.page.locator('//div[contains(@class,"list-arrows")] /button[text()=" >"]');
    }
}