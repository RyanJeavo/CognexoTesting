import { test } from '../../fixtures'

test.describe('Add To Basket Tests', () => {
    test('Customer Adds Single Product To Basket', async ({basePage, browserUtils}) => {
        await browserUtils.navigateToPage('https://books.toscrape.com/catalogue/category/books/crime_51/index.html');
        await basePage.clickAddToBasketButton();
    })
})