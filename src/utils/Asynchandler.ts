import { Request, Response, NextFunction } from "express";
import ApiResponse from "./ApiResponse";
import { 
  ValidationError as SequelizeValidationError, 
  UniqueConstraintError as SequelizeUniqueConstraintError, 
  ForeignKeyConstraintError as SequelizeForeignKeyConstraintError, 
  ConnectionError as SequelizeConnectionError 
} from 'sequelize';
import { 
  SEQUELIZE_VALIDATION_ERROR, 
  SEQUELIZE_UNIQUE_CONSTRAINT_ERROR, 
  SEQUELIZE_FOREIGNKEY_CONSTRAINT_ERROR, 
  SEQUELIZE_DATABASE_CONNECTION_ERROR 
} from "../constants";

const asyncHandler = (method: (req: Request,res: Response,next: NextFunction) => Promise<any>) => {

    // Returning async function
    return async (req: Request,res: Response,next: NextFunction) => {

        try {

            // Parameterized method will be called here
            await method(req,res,next)
            
        } catch (error) {
            // If any of the error is occured in above then catch it here and send response
            let statusCode: number   = error.statusCode || 500;
            let message: string      = "";

            // Following switch case will always be executed, At first it will check for the sequelize errors if
            // sequelize error not found then it will give the standardized single error
            switch (true) {
              case error instanceof SequelizeValidationError:
                      message        = "Validation Error :"+error.errors.map((err: any) => err.message).join(', ');
                      statusCode     = SEQUELIZE_VALIDATION_ERROR;
                  break;
              case error instanceof SequelizeUniqueConstraintError:
                      message        = "Unique Constraint Error :"+error.errors.map((err: any) => err.message).join(', ');
                      statusCode     = SEQUELIZE_UNIQUE_CONSTRAINT_ERROR;
                  break;
              case error instanceof SequelizeForeignKeyConstraintError:
                      message        = "Foreigh Key Constraint Error :"+ error.message;
                      statusCode     = SEQUELIZE_FOREIGNKEY_CONSTRAINT_ERROR;
                  break;
              case error instanceof SequelizeConnectionError:
                      message        = " Database connection error :" + error.message;
                      statusCode     = SEQUELIZE_DATABASE_CONNECTION_ERROR;
                  break;
              default:
                      message        = error.message;
                  break;
          }
            console.log(statusCode)
            // Following will send the response the Client 
            res.status(statusCode).json(new ApiResponse(statusCode,message))
        }
    }

}

export default asyncHandler;