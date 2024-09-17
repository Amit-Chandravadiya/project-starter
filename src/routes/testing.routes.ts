import { Router } from "express";
import { apiCheck } from "../controllers/testing.controllers";

const testRouter: Router = Router();

testRouter.route("/checkPost").post(apiCheck);

export default testRouter;
