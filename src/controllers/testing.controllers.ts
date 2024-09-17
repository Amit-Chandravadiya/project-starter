import { Request, Response } from "express";
import testApi from '../dto/testApi.dto';
import ApiResponse from "../utils/ApiResponse";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

const apiCheck = async (req:Request, res:Response): Promise<Response> => {

    const userDto = plainToInstance(testApi,req.body);
    const validationErrors = await validate(userDto);

    if (validationErrors.length > 0) 
    {
        return res.status(400).json({
          message: 'Validation failed',
          errors: validationErrors.map(err => ({
            property: err.property,
            constraints: err.constraints,
          })),
        });
    }
    
    // testApiData.printDetails();
    return res.json(new ApiResponse(201,"Data received successfully !",userDto))
    
   
};

export {apiCheck};
