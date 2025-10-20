import { chromium, Page } from "@playwright/test";

export class BrowserUtils {
    constructor(public readonly page: Page) {
    }
    public async launchBrowser() {
        const browser = await chromium.launch();
    }

    public async navigateToPage(pageURL: string) {
        await this.page.goto(pageURL);
    }
}