import { test } from '../../fixtures'
import { ProductName } from '../enums/bookNames'

test.describe('Product Page Tests', () => {
    test('Customer Views the Product Page', async ({ browserUtils, productPage}) => {
        await browserUtils.navigateToPage('https://books.toscrape.com/catalogue/the-long-shadow-of-small-ghosts-murder-and-memory-in-an-american-city_848/index.html');
        await productPage.verifyBookInformation(ProductName.LONGSHADOW)
    })
})