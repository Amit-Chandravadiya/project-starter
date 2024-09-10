import { Router } from "express";
import { testApi } from "../controllers/testing.controllers";

const testRouter: Router = Router();

testRouter.route("/test").post(testApi);

export default testRouter;
