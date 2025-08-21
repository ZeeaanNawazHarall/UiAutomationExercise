import { test, expect } from '@playwright/test';
import { checkboxDemoActions } from '../pages/CheckboxDemo/CheckboxDemo.actions';
import { HomePageActions } from '../pages/HomePage/homePage.actions';

test.describe('Checkbox Demo Happy Paths', () => {
    let checkboxDemo: checkboxDemoActions;

    test.beforeEach(async ({ page }) => {
        const homePage = new HomePageActions(page);
        await homePage.navigateToHomePage();
        await homePage.clickLinks("Checkbox Demo");

        checkboxDemo = new checkboxDemoActions(page);

        expect(await checkboxDemo.isHeadingVisible()).toBe(true);

    });

    test('CheckBox Test 1: Single checkbox can be checked', async () => {
        await checkboxDemo.locateAndcheckbox('Click on check box');
        expect(await checkboxDemo.isCheckedTextVisible()).toBe(true);
        expect(await checkboxDemo.isChecked('Click on check box')).toBe(true);
    });

    test('CheckBox Test 2: Disabled checkboxes cannot be checked', async () => {
        const disabled = [' Option 3', ' Option 4'];
        for (const label of disabled) {
            expect(await checkboxDemo.tryCheckDisabledCheckbox(label)).toBe(false);
            expect(await checkboxDemo.isChecked(label)).toBe(false);
        }
    });

    test('CheckBox Test 3: Multiple checkboxes can be checked individually', async () => {
        const options = ['option1', 'option2', 'option3', 'option4'];
        for (const name of options) {
            await checkboxDemo.locateMutiplecheckbox(name);
            expect(await checkboxDemo.isChecked(name)).toBe(true);
        }
    });

    test('CheckBox Test 4: Check All button checks all checkboxes', async () => {
        await checkboxDemo.clickCheckUncheckAllButton('Check All');
        const options = ['option1', 'option2', 'option3', 'option4'];
        for (const name of options) {
            expect(await checkboxDemo.isChecked(name)).toBe(true);
        }
    });
});
