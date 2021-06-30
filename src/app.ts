import Koa from "koa";
import Router from "koa-router";
import bodyParse from "koa-bodyparser";
import {runEmulator} from "./middlewares/runEmulator";
import {parsingImperia} from "./imperiatechno/middlewares/parsingImperia";
import {validateRequest} from "./middlewares/validateRequest";
import {getPageContent} from "./middlewares/getPageContent";
import {queueRequests} from "./queue/middlewares/queueRequests";
import {queueRemoveElement} from "./queue/middlewares/queueRemoveElement";

const app: Koa = new Koa();
const router: Router = new Router();
app.use(bodyParse({jsonLimit: '32mb'}));
app.use(router.routes());

router.all("/", (ctx) => {
    ctx.body = "Server run.";
})
router.post("/product", validateRequest, queueRequests, runEmulator, parsingImperia, queueRemoveElement);
router.post("/url", validateRequest, queueRequests, runEmulator, getPageContent, queueRemoveElement);

app.listen(8080, () => {
    console.log("Web-server for parsing started.")
});