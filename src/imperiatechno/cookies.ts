import {Cookie} from "playwright";

export const presetCookies: Cookie[] = [
    {
        "sameSite": "None",
        "name": "cityCook",
        "value": "4",
        "domain": "www.imperiatechno.ru",
        "path": "/",
        "expires": 3760362786.828238,
        "httpOnly": false,
        "secure": false
    }
]