
// Database name for mongoDB
export const DB_NAME: string = "auth";

// Size limit for JSON data
export const JSON_SIZE_LIMIT: string = "16kb";

// Size limit for URL encoded data
export const URL_ENCODED_SIZE_LIMIT: string = "16kb";

/**
 *  Developer can directly change the status code of the respone to the SEQUELIZE errors from here
 */
export const SEQUELIZE_VALIDATION_ERROR                 = 400;
export const SEQUELIZE_UNIQUE_CONSTRAINT_ERROR          = 409;
export const SEQUELIZE_FOREIGNKEY_CONSTRAINT_ERROR      = 409;
export const SEQUELIZE_DATABASE_CONNECTION_ERROR        = 500;
