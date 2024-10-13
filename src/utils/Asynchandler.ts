import { Request, Response, NextFunction } from "express";
import ApiResponse from "./ApiResponse";

const asyncHandler = (method: (req: Request,res: Response,next: NextFunction) => Promise<any>) => {

    // Returning async function
    return async (req: Request,res: Response,next: NextFunction) => {

        try {

            // Parameterized method will be called here
            await method(req,res,next)
            
        } catch (error) {
            // If any of the error is occured in above then catch it here and send response
            let statusCode: number   = error.statusCode || 500;
            let message: string      = error.message || "Internal server error";

            // Following will send the response the Client 
            res.status(statusCode).json(new ApiResponse(statusCode,message))
        }
    }

}

export default asyncHandler;