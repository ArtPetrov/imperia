import {getEmulator} from './getEmulator';

const link: string = 'https://ya.ru';
const status: number = 200;

describe('Webkit browser', () => {

    it('should run mobile version', async () => {
        const emulator = await getEmulator('mobile', true, null, 'webkit');
        const result = await emulator.page.goto(link);
        expect(await result.status()).toBe(status);
        await emulator.browser.close();
    });

    it('should run desktop version', async () => {
        const emulator = await getEmulator('mobile', true, null, 'chromium');
        const result = await emulator.page.goto(link);
        expect(await result.status()).toBe(status);
        await emulator.browser.close();
    });
});

describe('Chromium browser', () => {

    it('should run mobile version', async () => {
        const emulator = await getEmulator('mobile', true, null, 'chromium');
        const result = await emulator.page.goto(link);
        expect(await result.status()).toBe(status);
        await emulator.browser.close();
    });

    it('should run desktop version', async () => {
        const emulator = await getEmulator('mobile', true, null, 'chromium');
        const result = await emulator.page.goto(link);
        expect(await result.status()).toBe(status);
        await emulator.browser.close();
    });
});

describe('Firefox browser', () => {

    it('should run mobile version', async () => {
        const emulator = await getEmulator('mobile', true, null, 'firefox');
        const result = await emulator.page.goto(link);
        expect(await result.status()).toBe(status);
        await emulator.browser.close();
    });

    it('should run desktop version', async () => {
        const emulator = await getEmulator('desktop', true, null, 'firefox');
        const result = await emulator.page.goto(link);
        expect(await result.status()).toBe(status);
        await emulator.browser.close();
    });
});