import {getEmulator, runningEmulator} from "../emulator/getEmulator";
import {singletonQueue as queue} from "../queue/models/queue";

let countRequest:number;

export async function runEmulator(ctx, next) {
    try {

        if (countRequest > 10) {
            runningEmulator.actual = false;
            await runningEmulator.browser.close();
        }
        if (runningEmulator && runningEmulator.actual) {
            runningEmulator.hotConnect = true;
            ctx.emulator = runningEmulator;
            countRequest++;
        } else {
            countRequest = 1;
            ctx.emulator = await getEmulator(
                'desktop',
                true,
                ctx.payload.proxy,
                'firefox'
            );
        }
        await next();
    } catch (err) {
        await runningEmulator.browser.close();
        runningEmulator.actual = false;
        countRequest = 0;

        queue.removeElement(ctx.payload.queueElement);

        ctx.status = 400;
        ctx.body = {
            error: `Error exception: ${err.name}`,
            message: err.message
        };
    }
}