import {Response} from "playwright";

export async function getPageContent(ctx, next) {
    const content:Response = await ctx.emulator.page.goto(ctx.payload.url);
    ctx.body = await content.text();
    return next();
}