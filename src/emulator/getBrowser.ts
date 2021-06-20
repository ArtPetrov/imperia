import {chromium, firefox, webkit} from 'playwright';

const getBrowser = async (nameBrowser, options) => {
    switch (nameBrowser) {
        case "chromium":
            return chromium.launch(options);
        case "firefox":
            return firefox.launch(options);
        case "webkit":
            options.args = [];
            return webkit.launch(options);
    }
    throw new Error(`Can't find browser "${nameBrowser}".`);
}

export {getBrowser};