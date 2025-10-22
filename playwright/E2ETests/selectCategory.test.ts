import { test } from '../../fixtures'
import { BookCategories } from '../enums/pageData';


test.describe('Testing Category Selection Functionality', () => {

    test.beforeEach('Browser Setup', async ({browserUtils, basePage}) =>{
        await browserUtils.navigateToPage('https://books.toscrape.com/');
        await basePage.verifBooksToScrapeTitle();
    })
    
    test('Customer selects Autobiography Category', async ({ basePage }) => {
        await basePage.clickCategory(BookCategories.AUTOBIOGRAPHY);
        await basePage.verifyCategoryTitle(BookCategories.AUTOBIOGRAPHY);
    }),

    test('Customer Clicks Next and Previous buttons to navigate between product pages', async ({ basePage }) => {
        await basePage.clickCategory(BookCategories.NONFICTION);
        await basePage.clickNextButton();
        await basePage.verifyPage(2);
        await basePage.verifyBookCount();
        await basePage.clickPreviousButton();
        await basePage.verifyPage(1);
    })
})