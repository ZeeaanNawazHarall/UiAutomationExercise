import test, { expect } from '@playwright/test';
import { HomePageActions } from '../pages/HomePage/homePage.actions';
import { bootstrapListBoxActions } from '../pages/BootstrapListBox/BootstrapListBox.actions';

test.describe.serial('Bootstrap Happy paths', async ()=>{
    let bootstrap: bootstrapListBoxActions;

    test.beforeEach(async ({ page }) => {
        const homePage = new HomePageActions(page);
        await homePage.navigateToHomePage();
        await homePage.clickLinks("Bootstrap List Box");

        bootstrap = new bootstrapListBoxActions(page);

        expect(await bootstrap.isBootstrapHeadingVisible()).toBe(true);
    })

    test("Bootstrap Test 1: Move box to Right and Verify output", async ({ page }) => {

        await bootstrap.searchLeft("Danville");
        await bootstrap.clickLeftListBox("Danville");
        await bootstrap.clickRightButton();

        const texts = await bootstrap.allItemsInRightBox();

        expect(texts.map(t => t.trim())).toContainEqual("Danville");
    });

    test("Bootstrap Test 2:Move box to Left and Verify output", async ({ page }) => {

        await bootstrap.searchRight("Milan");
        await bootstrap.clickRightListBox("Milan");
        await bootstrap.clickLeftButton();

        const texts = await bootstrap.allItemsInleftBox();

        expect(texts.map(t => t.trim())).toContainEqual("Milan");
    });
})