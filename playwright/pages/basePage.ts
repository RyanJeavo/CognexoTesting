import { expect, Locator } from "@playwright/test";
import { BrowserUtils } from "../utils/browser";

export class BasePage extends BrowserUtils{

    private nextButton: Locator = this.page.getByText('next');
    private previousButton: Locator = this.page.getByText('previous');
    private addToBasketButton: Locator = this.page.getByText('Add to basket');

    public async verifBooksToScrapeTitle() {
        await expect(this.page.getByText('Books To Scrape')).toBeVisible();
    }

    public async clickCategory(categoryTitle: string) {
        await expect(this.page.getByText(categoryTitle)).toBeVisible();
        await this.page.getByText(categoryTitle).click()
    }

    public async verifyCategoryTitle(categoryTitle: string) {
        await expect(this.page.locator('.page-header h1')).toContainText(categoryTitle)
    }

    public async clickNextButton() {
        await expect(this.nextButton).toBeVisible();
        await this.nextButton.click();
    }

    public async clickPreviousButton() {
        await expect(this.previousButton).toBeVisible();
        await this.previousButton.click();
    }

    public async verifyBookCount() {
       const bookCount = await this.page.locator('ol.row > li').count();
       expect(bookCount).toEqual(20);
    }

    public async verifyPage(expectedPage: number) {
        const pageNumber = (await this.page.locator('li.current').allInnerTexts()).toString();
        expect(pageNumber).toContain(`Page ${expectedPage}`)
    }

    public async clickAddToBasketButton() {
        await expect(this.addToBasketButton).toBeVisible();
        await this.addToBasketButton.click();
    }

    public async verifyProductDetails() {
        
    }
}