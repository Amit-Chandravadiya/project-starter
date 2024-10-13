/**
 * Following are all the user related routers are defined here
 * 1) /register - For the registration of the user
 */
import { Router } from "express";
import  UserController from "../controllers/users.controllers";
import { UserService } from "../services/users.service";

/**
 * 
 * /////////////////////////// DEPENDENCY INJECTION SECTION [START] /////////////////////////////////
 * 
 */

// Create an instance of UserService
const userService = new UserService();

// Inject UserService when creating UserController
const userController = new UserController(userService);

/**
 * 
 * /////////////////////////// DEPENDENCY INJECTION SECTION [END] /////////////////////////////////
 * 
 */

const usersRouter: Router = Router();

usersRouter.route("/register").post(userController.registerUser);

export default usersRouter;
