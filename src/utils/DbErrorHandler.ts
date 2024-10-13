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
  import { ApiError } from './ApiError';
  
  // This is a wrapper to catch and handle only DB-related errors
  const dbErrorHandlerWrapper = (dbOperation: () => Promise<any>) => {
    return async () => {
      try {
        // Execute the database operation
        return await dbOperation();
      } catch (error) {
        let statusCode: number = 500;
        let message: string = '';
  
        // Handle database (Sequelize) specific errors
        switch (true) {
          case error instanceof SequelizeValidationError:
            message = "Validation Error: " + error.errors.map((err: any) => err.message).join(', ');
            statusCode = SEQUELIZE_VALIDATION_ERROR;
            break;
          case error instanceof SequelizeUniqueConstraintError:
            message = "Unique Constraint Error: " + error.errors.map((err: any) => err.message).join(', ');
            statusCode = SEQUELIZE_UNIQUE_CONSTRAINT_ERROR;
            break;
          case error instanceof SequelizeForeignKeyConstraintError:
            message = "Foreign Key Constraint Error: " + error.message;
            statusCode = SEQUELIZE_FOREIGNKEY_CONSTRAINT_ERROR;
            break;
          case error instanceof SequelizeConnectionError:
            message = "Database Connection Error: " + error.message;
            statusCode = SEQUELIZE_DATABASE_CONNECTION_ERROR;
            break;
          default:
            // If the error is not a Sequelize error, just throw it to be handled elsewhere
            throw error;
        }
  
        // Throw a custom ApiError with the proper status and message
        throw new ApiError(statusCode, message);
      }
    };
  };
  
  export default dbErrorHandlerWrapper;
  