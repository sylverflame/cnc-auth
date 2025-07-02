import { ErrorCodes } from "@sylvr/utils";
import { userRepository } from "../repositories/user.repository";
import {
  BadRequestError,
  ForbiddenError,
  InternalServerError,
  NotFoundError,
} from "../utils/classes/Errors";
import { LoginUserData, RegisterUserData } from "../utils/schemas";
import { Token } from "../utils/types";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const authService = {
  async registerUser(userData: RegisterUserData) {
    const { name, username, password, country } = userData;
    // Check for duplicate username
    const result = await userRepository.getUser(username);
    if (result.length) {
      throw new BadRequestError(ErrorCodes.ERR_006);
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Generate UUID
    const uuid = crypto.randomUUID();
    const updatedUserData = {
      name,
      username,
      password: hashedPassword,
      country: country,
      uid: uuid,
    };

    await userRepository.createUser(updatedUserData);
  },
  async loginUser(userData: LoginUserData): Promise<Token> {
    const { username, password } = userData;
    const result = await userRepository.getUser(username);
    if (!result || !result.length) {
      throw new NotFoundError(ErrorCodes.ERR_007);
    }
    const dbPassword = result[0].password;
    const isPasswordValid = await bcrypt.compare(password, dbPassword);
    if (!isPasswordValid) {
      throw new ForbiddenError(ErrorCodes.ERR_002);
    }
    const secretKey = process.env.JWT_SECRET;
    if (!secretKey) {
      throw new InternalServerError(ErrorCodes.ERR_008);
    }

    const token = jwt.sign({ username }, secretKey, {
      expiresIn: "1h",
    });

    return token;
  },
};
