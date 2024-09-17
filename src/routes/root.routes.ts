
/**
 * ********************************* ROOT ROUTER ********************************************
 * 1) It create a new router called rootRouter which will be included in app.ts 
 * 2) All the routes that needed to be use in the app should be imported here and mapped with the path or route 
 */

// Importing router service from express
import { Router } from "express";

// Importing different routers that needed to be included in the app
import testRouter from "./testing.routes";

// Creating instance of root router
const rootRouter: Router = Router();






// All the routes should be placed here  
rootRouter.use("/testing",testRouter);







// exporting root router
export default rootRouter;