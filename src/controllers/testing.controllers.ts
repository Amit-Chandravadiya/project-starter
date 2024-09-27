import { Request, Response } from "express";
import ApiResponse from "../utils/ApiResponse";
import { testApiValidator } from "../validators/test.validator";

const apiCheck = async (req:Request, res:Response): Promise<Response> => {
  
    // validating incoming request body
    const {error,value} = testApiValidator.validate(req.body);
    
    // checking if the error is produced during validation 
    if(error!= null)
    {
      // throw new ApiError(400,"There is a problem with the validation of the request body !",)
      return res.status(400).json(new ApiResponse(400,"Error while validating data !",error.details[0].message))
    }
    
    // If no error is produced return the data as it is as this is just for the testing purpose only
    return res.json(new ApiResponse(201,"Data received successfully !",value))
    
   
};

export {apiCheck};
