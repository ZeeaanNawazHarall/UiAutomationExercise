import { test, expect } from '@playwright/test';
import { HomePageActions } from '../pages/HomePage/homePage.actions';
import { jQueryActions } from '../pages/jQueryDropdown/jQueryDropdown.actions';

test.describe('JQuery DropDown Happy Paths', () => {
    let jQuery: jQueryActions;

    test.beforeEach(async ({ page }) => {
        const homePage = new HomePageActions(page);
        await homePage.navigateToHomePage();
        await homePage.clickLinks("JQuery Select dropdown");

        jQuery = new jQueryActions(page);

        expect(await jQuery.isHeadingVisible()).toBe(true);

    });

    test('JQuery Test 1: Select country from dropdown with search', async ({ page }) => {

        await jQuery.clickOnCountryDropdown();
        await jQuery.searchCountryFromDropdown("Japan");
        await jQuery.locateCountryByName("Japan");
        const country = await jQuery.getSelectedCountry();

        expect(country?.trim()).toBe("Japan");
    });

    test('JQuery Test 2: Search and Select mutiple states', async ({ page }) => {

        const states = ["California", "Alaska"];
        for ( const state of states) {
            await jQuery.searchSelectState(state);
            await jQuery.locateStateByName(state);
        }
        const selectedStates = await jQuery.getMutipleStateSearchResults();
        expect(selectedStates).toEqual(expect.arrayContaining(states));
    });

    test('JQuery Test 3: Select disabled country and assert output', async ({ page }) => {

        await jQuery.clickOnDisabledDropdown()

        // Disabled should not be selectable
        expect(await jQuery.locateDisabledCountyBox("Guam")).toBe(false);

        const country = await jQuery.getSelectedInDisabledField()
        expect(country?.trim()).not.toBe("Guam");
    });

    test('JQuery Test 4: Select file from dropdown', async ({ page }) => {

        await jQuery.clickOnFileDropdown();
        await jQuery.locateFileBox("Java");

        const selected = await jQuery.getSelectedFileValue();
        expect(selected).toBe("jquery");
    });

});
