export async function validateRequest(ctx, next) {
    if (ctx.request.body.hasOwnProperty('url')) {
        ctx.payload = {};
        ctx.payload.url = ctx.request.body.url;
        ctx.payload.proxy = ctx.request.body.hasOwnProperty('proxy') ? ctx.request.body.proxy : null;
        return next();
    }
    ctx.status = 400;
    ctx.body = {
        error: `Can't found URL for parsing.`,
    };
}