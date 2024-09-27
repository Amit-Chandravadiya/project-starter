/**
 * This File contains the business logic related to USERS
 * 1) registerUser -> This method contains the logic for registering user
 * 
 * NOTE :- All the error thrown inside of the asyncHandeler will be handeled by asyncHandler 
 *         itself by sending response to the user with error message. If you are not using asyncHandler 
 *         then you have explictly handle the error of the controller with try-catch and respone
 */



import { Request, Response } from "express";
import ApiResponse from "../utils/ApiResponse";
import { userApiValidator } from "../validators/user.validator";
import { userModel } from "../models/users.models";
import asyncHandler from "../utils/Asynchandler";
import { ApiError } from "../utils/ApiError";

interface registerUserInterface {
    username: string,
    email: string,
    fullname?: string
}

const registerUser = asyncHandler(async (req: Request<{},{},registerUserInterface>, res: Response): Promise<Response> => {

    // validating request data in the api 
    const {error,value} = userApiValidator.validate(req.body);

    // checking if the error is produced during validation 
    if(error)
    {
        throw new ApiError(400,error.details[0].message);
    }
    
    // creating user using sequelize model
    const createdUser = await userModel.create({
            username: value.username,
            user_email: value.email,
            fullname: value.fullname,
            phone_no: value.phoneno
    })

    // return following response if no error occurs
    return res.status(200).json(new ApiResponse(200,"User data received successfully !",req.body))
});

export {
    registerUser
}