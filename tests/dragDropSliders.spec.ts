import { test, expect } from '@playwright/test';
import { HomePageActions } from '../pages/HomePage/homePage.actions';
import { dragDropActions } from '../pages/DragDropSliders/DragDropSliders.actions';

test.describe('Drag and Drop Sliders Happy Paths', () => {
    let dragDrop: dragDropActions;

    test.beforeEach(async ({ page }) => {
        const homePage = new HomePageActions(page);
        await homePage.navigateToHomePage();
        await homePage.clickLinks("Drag & Drop Sliders");

        dragDrop = new dragDropActions(page);
    });

    test('DragDrop Test 1: Slider1 -> set to 50 via Keyboard', async () => {
        await dragDrop.setSliderByKeyboard('slider1', 'range', 50);
        expect(await dragDrop.getOuputValue('range')).toBe(50);
    });

    test('DragDrop Test 2: Slider2 -> set to 95 via Keyboard', async () => {
        await dragDrop.setSliderByKeyboard('slider2', 'rangePrimary', 95);
        expect(await dragDrop.getOuputValue('rangePrimary')).toBe(95);
    });

    test('DragDrop Test 3: Slider3 -> set to 30 via Keyboard', async () => {
        await dragDrop.setSliderByKeyboard('slider3', 'rangeSuccess', 30);
        expect(await dragDrop.getOuputValue('rangeSuccess')).toBe(30);
    });
});
