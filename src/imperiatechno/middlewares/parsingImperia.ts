import {presetCookies} from "../cookies";
import parserForProduct from "../useCase/parserForProduct";

export async function parsingImperia(ctx, next) {
    await ctx.emulator.context.addCookies(presetCookies);
    await ctx.emulator.page.goto(ctx.payload.url, {timeout: 10000});

    try {
        await ctx.emulator.page.waitForSelector('div.product_page_wrapper > h1', {timeout: 5000});
    } catch (e) {
        throw new Error('Not found page with product. Change URL or change Proxy.');
    }

    console.log("\n");
    console.log(await ctx.emulator.page.evaluate(() => navigator.userAgent));
    console.log(`Parsing : ${ctx.payload.url}`);

    ctx.body = await parserForProduct(ctx.emulator.page);
    return next();
}