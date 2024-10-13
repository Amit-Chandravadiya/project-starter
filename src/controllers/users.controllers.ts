// userController.ts
import { Request, Response } from "express";
import ApiResponse from "../utils/ApiResponse";
import { userApiValidator } from "../validators/user.validator";
import asyncHandler from "../utils/Asynchandler";
import { ApiError } from "../utils/ApiError";
import { UserService } from "../services/users.service"; // Import the UserService

// UserController class to handle user-related operations
class UserController {
  private userService: UserService;

  // Inject UserService into the constructor (Dependency Injection)
  constructor(userService: UserService) {
    this.userService = userService;
  }

  /**
   * Following method will handle the User Registration and the steps to register are:
   * 1) Validation - Validating all the user related data that comes in the request body
   * 2) Passing data to the service to create the user, and if the user creating failed then
   *    service class itself will send the response to the Client.
   * 
   */
  public registerUser = asyncHandler(
    async (req: Request, res: Response): Promise<Response> => {

      // Validate the incoming request data
      const { error, value } = userApiValidator.validate(req.body);

      // Check for validation errors
      if (error) {
        throw new ApiError(400, error.details[0].message);
      }

      // Using Userservice class method to create a new user
      const createdUser = await this.userService.createUser(value);

      // Return response if user creation is successful
      return res
        .status(200)
        .json(
          new ApiResponse(200, "User registered successfully!", createdUser)
        );
    }
  );
}

// Exporting UserController class
export default UserController;
