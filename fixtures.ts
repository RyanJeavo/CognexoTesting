import { BasePage } from "./playwright/pages/basePage";
import { ProductPage } from "./playwright/pages/productPage";
import { BrowserUtils } from "./playwright/utils/browser";
import { test as base } from "@playwright/test"

type BooksToScrapeFixtures = {
    browserUtils: BrowserUtils;
    basePage: BasePage;
    productPage: ProductPage;
}

export const test = base.extend<BooksToScrapeFixtures>({
    browserUtils: async ( {page}, use) => {
        await use(new BrowserUtils(page))
    },
    basePage: async ( {page}, use) => {
        await use(new BasePage(page))
    },
    productPage: async ( {page}, use) => {
        await use(new ProductPage(page))
    },
})