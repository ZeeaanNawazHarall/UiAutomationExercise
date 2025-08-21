import test, { expect } from '@playwright/test';
import { ajaxFormSubmitActions } from '../pages/AjaxSubmitForm/AjaxSubmitForm.actions';
import { HomePageActions } from '../pages/HomePage/homePage.actions';

test("Ajax Test 1:Enter a message and verify output", async ({ page }) => {
    const homePage = new HomePageActions(page);
    await homePage.navigateToHomePage();
    await homePage.clickLinks("Ajax Form Submit");

    let ajaxFormSubmit = new ajaxFormSubmitActions(page);

    expect(await ajaxFormSubmit.isAjaxFormSubmitHeadingVisible()).toBe(true);

    await ajaxFormSubmit.enterName("Zeeaan Nawaz");

    await ajaxFormSubmit.enterMessage("Message writing 1 2 3 ... ");

    await ajaxFormSubmit.clickSubmitButton();

    const text = await ajaxFormSubmit.getAjaxBoxText();  

    expect(text[0].trim()).toBe("Ajax Request is Processing!")
    expect(await ajaxFormSubmit.isImagePresent()).toBe(true);
})