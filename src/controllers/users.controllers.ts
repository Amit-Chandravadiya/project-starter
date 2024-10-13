// ***************************************** IMPORTS [START] *************************************** //
import { Request, Response } from "express";
import ApiResponse from "../utils/ApiResponse";
import { userApiValidator } from "../validators/user.validator";
import asyncHandler from "../utils/Asynchandler";
import { ApiError } from "../utils/ApiError";
import { UserService } from "../services/users.service"; // Import the UserService
// ***************************************** IMPORTS [END] *************************************** //

/**
 * 
 * Following UserController class is responsibe for handling user related operaitons like,
 * 
 * 1) Registration of the user
 * 2) Login of the user 
 * 3) Logout of the user
 * 
 */
class UserController {
  private userService: UserService;

  // Inject UserService into the constructor (Dependency Injection)
  constructor(userService: UserService) {
    this.userService = userService;
  }

  // Following function is responsible for the user registration 
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
