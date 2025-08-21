import { test, expect } from '@playwright/test';
import { checkboxDemoActions } from '../pages/CheckboxDemo/CheckboxDemo.actions';
import { HomePageActions } from '../pages/HomePage/homePage.actions';
import { javaScriptAlertActions } from '../pages/JavaScriptAlerts/JavaScriptAlerts.actions';

test.describe('Javascript Alerts Happy Paths', () => {
    let javascript: javaScriptAlertActions;

    test.beforeEach(async ({ page }) => {
        const homePage = new HomePageActions(page);
        await homePage.navigateToHomePage();
        await homePage.clickLinks("Javascript Alerts");

        javascript = new javaScriptAlertActions(page);

        expect(await javascript.isHeadingVisible()).toBe(true);

    });

    test('Javascript Test 1: Handle Alert Box', async ({ page }) => {
        page.once('dialog', async dialog => {
            expect(dialog.type()).toBe('alert');
            expect(dialog.message()).toBe('I am an alert box!');
            await dialog.accept();
        });

        await javascript.locateAlertButton('JavaScript Alerts');
    });

    test('Javascript Test 2: Handle Confirm Box - Accept', async ({ page }) => {
        page.once('dialog', async dialog => {
            expect(dialog.type()).toBe('confirm');
            expect(dialog.message()).toBe('Press a button!');
            await dialog.accept();  // simulate clicking OK
        });

        await javascript.locateAlertButton('Confirm box:');
        const confirmText = await javascript.getConfirmAlertBoxText();
        expect(confirmText).toContain('You pressed OK!');
    });

    test('Javascript Test 3: Handle Confirm Box - Dismiss', async ({ page }) => {
        page.once('dialog', async dialog => {
            expect(dialog.type()).toBe('confirm');
            await dialog.dismiss();  // simulate clicking Cancel
        });

        await javascript.locateAlertButton('Confirm box:');
        const confirmText = await javascript.getConfirmAlertBoxText();
        expect(confirmText).toContain('You pressed Cancel!');
    });

    test('Javascript Test 4: Handle Prompt Box', async ({ page }) => {
        const inputName = 'Zeeaan Nawaz';

        page.once('dialog', async dialog => {
            expect(dialog.type()).toBe('prompt');
            expect(dialog.message()).toBe('Please enter your name');
            await dialog.accept(inputName);
        });

        await javascript.locateAlertButton('Prompt box:');
        const promptText = await javascript.getPromptAlertBoxText();
        expect(promptText).toContain(`You have entered '${inputName}' !`);
    });


});
