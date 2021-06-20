import Koa from "koa";
import Router from "koa-router";
import bodyParse from "koa-bodyparser";
import {runEmulator} from "./middlewares/runEmulator";
import {parsingImperia} from "./imperiatechno/middlewares/parsingImperia";
import {validateRequest} from "./middlewares/validateRequest";
import {getPageContent} from "./middlewares/getPageContent";

const app: Koa = new Koa();
const router: Router = new Router();
app.use(bodyParse({jsonLimit: '32mb'}));
app.use(router.routes());

router.post("/product", validateRequest, runEmulator, parsingImperia)
router.post("/url", validateRequest, runEmulator, getPageContent)

app.listen(8080, () => {
    console.log("Web-server for parsing started.")
});