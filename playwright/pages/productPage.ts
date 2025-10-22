import { expect, Locator } from "@playwright/test";
import { BrowserUtils } from "../utils/browser";

export class ProductPage extends BrowserUtils {

    private bookTitleHeader: Locator = this.page.locator('.product_main h1');

    public async verifyBookInformation(bookName: string) {
        await expect(this.bookTitleHeader, 'Correct book title should be visible').toBeVisible();
        await expect(this.bookTitleHeader).toContainText(bookName)
        await expect(this.page.locator('.product_main .price_color'), 'Price should be visible').toBeVisible();
        await expect(this.page.locator('.product_main .instock.availability'), 'Stock availability should be visible').toBeVisible();
        await expect(this.page.locator('.product_main .star-rating.One'), 'Star rating should be visible').toBeVisible();
        await expect(this.page.getByText('Product Description'), 'Product Description section should be visible').toBeVisible();
        await expect(this.page.getByText('Product Information'), 'Product Information section should be visible').toBeVisible();
        await expect(this.page.getByText('Products you recently viewed'), 'Recent Products section should be visible').toBeVisible();
    }
}