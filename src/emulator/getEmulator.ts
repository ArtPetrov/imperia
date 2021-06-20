import {getBrowser} from "./getBrowser";
import randomContext from "./randomContext";
import {Emulator} from "./types/emulator";
import {getRandomUserAgent} from "./userAgents";

let runningEmulator: Emulator | null = null;

const getEmulator = async (
    type = 'mobile',
    headless = false,
    proxy: string | object | null = null,
    browserName = 'chromium'
): Promise<Emulator> => {
    const options = {
        headless: headless,
        timeout: 30000,
        slowMo: 0,
        proxy: {},
        args: [
            '--disable-web-security',
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--ignore-certifcate-errors',
            '--ignore-certifcate-errors-spki-list'
        ]
    };

    if (proxy !== null) {
        options.proxy = typeof proxy === 'string' ? {server: proxy} : proxy;
    } else {
        delete options.proxy;
    }

    const browser = await getBrowser(browserName, options);
    const context = await browser.newContext(type === 'mobile' ? randomContext(browserName) : {userAgent: getRandomUserAgent()});
    const page = await context.newPage();

    return runningEmulator = {
        context,
        page,
        browser,
        proxy,
        actual: true,
        hotConnect: false
    };
}

export {runningEmulator, getEmulator}