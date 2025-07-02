import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../utils/classes/Errors";
import { ErrorCodes, Status, SuccessCodes } from "../utils/types";
import { RegisterUserPayloadSchema } from "../utils/schemas";
import { authService } from "../services/auth.service";

const authController = {
  async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.body) {
        throw new BadRequestError(ErrorCodes.ERR_003);
      }

      const parsedData = RegisterUserPayloadSchema.parse(req.body); // Will throw a ZodError in case of invalid data
      await authService.registerUser(parsedData);
      res.status(Status.Created).json({ message: SuccessCodes.SUCCESS_001 });
    } catch (error) {
      next(error);
    }
  },
  loginUser() {},
  validateToken() {},
};

export default authController;
