import { BrowserUtils } from "./playwright/utils/browser";
import { test as base } from "@playwright/test"

type BooksToScrapeFixtures = {
    browserUtils: BrowserUtils;
}

export const test = base.extend<BooksToScrapeFixtures>({
    // browser: async ({ page }, use) => {
    //     const browser = new Browser(page);
    // }
    browserUtils: async ( {page}, use) => {
        await use(new BrowserUtils(page))
    }
    
})