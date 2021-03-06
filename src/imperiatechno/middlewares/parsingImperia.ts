import {env} from "process";
import parserForProduct from "../useCase/parserForProduct";

export async function parsingImperia(ctx, next) {
    await ctx.emulator.page.goto(ctx.payload.url, {timeout: parseInt(env.TIMEOUT_FIRST_LOAD) || 13000});

    try {
        await ctx.emulator.page.waitForSelector('div.item-header > h1', {timeout: 5000});
    } catch (e) {
        throw new Error('Not found page with product. Change URL or change Proxy.');
    }

    console.log("\n");
    console.log(await ctx.emulator.page.evaluate(() => navigator.userAgent));
    console.log(`Parsing : ${ctx.payload.url}`);

    ctx.body = await parserForProduct(ctx.emulator.page);
    return next();
}