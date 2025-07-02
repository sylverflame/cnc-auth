import { userRepository } from "../repositories/user.repository";
import { BadRequestError } from "../utils/classes/Errors";
import { RegisterUser } from "../utils/schemas";
import { ErrorCodes } from "../utils/types";
import bcrypt from "bcrypt";

export const authService = {
  async registerUser(userData: RegisterUser) {
    const { username, password } = userData;
    // Check for duplicate username
    const result = await userRepository.getUserName(username);
    if (result.length !== 0) {
      throw new BadRequestError(ErrorCodes.ERR_006);
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    userData.password = hashedPassword;

    await userRepository.createUser(userData);
  },
};
