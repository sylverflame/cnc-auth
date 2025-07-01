import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../utils/classes/Errors";
import { ErrorCodes } from "../utils/types";
import { RegisterUserPayloadSchema } from "../utils/schemas";

const authController = {
  registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.body) {
        throw new BadRequestError(ErrorCodes.ERR_003);
      }

      const parsedPayload = RegisterUserPayloadSchema.parse(req.body);
    } catch (error) {
      next(error);
    }
  },
  loginUser() {},
  validateToken() {},
};

export default authController;
