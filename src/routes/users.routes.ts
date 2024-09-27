import { Router } from "express";
import { registerUser } from "../controllers/users.controllers";


const usersRouter: Router = Router();

usersRouter.route("/register").post(registerUser);

export default usersRouter;
