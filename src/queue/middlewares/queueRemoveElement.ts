import {singletonQueue as queue} from "../models/queue";

export async function queueRemoveElement(ctx, next) {
    queue.removeElement(ctx.payload.queueElement);
    return next();
}