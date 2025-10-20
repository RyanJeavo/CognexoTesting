import { expect } from '@playwright/test';
import { test } from '../../fixtures'

test.describe('Add To Basket Tests', () => {
    // test('Customer Adds Single Product To Basket', async ({page}) => {
    //     await navigateTopage()
    // })
    test('Customer Adds Single Product To Basket', async ({page, browserUtils}) => {
        await browserUtils.navigateToPage('https://www.google.com');
        await expect(page).toHaveURL('https://www.gooooooogle.com')
    })
})