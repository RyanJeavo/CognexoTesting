import { Page } from "@playwright/test";

export class BrowserUtils {
    constructor(public readonly page: Page) {
    }

    public async navigateToPage(pageURL: string) {
        await this.page.goto(pageURL);
    }
}