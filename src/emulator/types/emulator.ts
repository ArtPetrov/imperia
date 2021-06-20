import {Browser, BrowserContext, Page} from "playwright";

export interface Emulator {
    context: BrowserContext;
    page: Page;
    browser: Browser;
    proxy: object | string | null;
    actual:boolean;
    hotConnect: boolean;
}
