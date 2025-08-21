import { expect, Locator, Page } from '@playwright/test';
import { dragDropLocators } from './DragDropSliders.locators';

export class dragDropActions {
    private locators: dragDropLocators;

    constructor(private page: Page) {
        this.locators = new dragDropLocators(page);
    }

    // Verify heading
    async isHeadingVisible(): Promise<boolean> {
        await this.page.waitForLoadState('domcontentloaded');
        await this.locators.dragDroppHeading.waitFor( { state: 'visible'})
        return await this.locators.dragDroppHeading.isVisible();
    }

    // Locate the slider
    async locateSlider(id: string): Promise<Locator> {
        await this.page.waitForLoadState('domcontentloaded');
        const slider = this.page.locator(`//div[@id="${id}"] //input`);
        return slider;
    }

    // Locate output value
    async getOuputValue(id: string): Promise<number> {
        const value = this.page.locator(`//output[@id="${id}"]`);
        await value.waitFor({ state: 'visible' });
        const text = await value.textContent();
        if (!text) throw new Error(`Output with id="${id}" has no text content`);

        return Number(text.trim());
    }

    // Set by Keyboard
    async setSliderByKeyboard(sliderContainerId: string, outputId: string, targetValue: number) {

        const slider = await this.locateSlider(sliderContainerId);
        await slider.focus();

        // Read current value from output
        let current = await slider.evaluate((el: HTMLInputElement) => Number(el.value));
        // console.log("current value: ", current);

        const stepAttr = await slider.getAttribute('step');
        const step = stepAttr ? Number(stepAttr) : 1;

        // console.log(`Current=${current}, Step=${step}, Target=${targetValue}`);

        // Decide which arrow to use
        let key = targetValue >= current ? 'ArrowRight' : 'ArrowLeft';

        while (current !== targetValue) {
            await slider.press(key);
            await this.page.waitForTimeout(50);
            current = await slider.evaluate((el: HTMLInputElement) => Number(el.value));
            // console.log("Current value after key press:", current);

            if ((key === 'ArrowRight' && current > targetValue) ||
                (key === 'ArrowLeft' && current < targetValue)) {
                break;
            }
        }

        const outputValue = await this.getOuputValue(outputId);
        expect(outputValue).toBe(targetValue);
    }
}