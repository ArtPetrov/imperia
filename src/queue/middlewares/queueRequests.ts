import {singletonQueue as queue} from "../models/queue";
import {sleep} from "../utility";

export async function queueRequests(ctx, next) {
    ctx.payload.queueElement = queue.addElement(ctx.payload.url, ctx.payload.proxy);

    if (queue.getCountElements() > 1) {
        console.log(`\n Queue has ${queue.getCountElements()} element!`)
    }

    while (true) {
        await sleep(1000);
        if (ctx.payload.queueElement === queue.getElement()) {
            return next();
        }
    }
}