import { userModel } from "../models/users.models";
import dbErrorHandlerWrapper from "../utils/DbErrorHandler"; // Import the DB error handler

// UserService class to handle user-related business logic
export class UserService {

  // Method to handle user creation
  public async createUser(userData: any) {

    // Wrap the database operation inside the dbErrorHandlerWrapper
    return dbErrorHandlerWrapper(async () => {
      // Create a new user using Sequelize model
      const createdUser = await userModel.create({
        username: userData.username,
        user_email: userData.email,
        full_name: userData.fullname,
        phone_no: userData.phoneno,
      });

      // Return the created user
      return createdUser;
    })();
  }
}
