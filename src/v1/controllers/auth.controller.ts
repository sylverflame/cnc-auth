import { NextFunction, Request, Response } from "express";
import { authService } from "../services/auth.service";
import {
  LoginUserPayloadSchema,
  RegisterUserPayloadSchema,
} from "../utils/schemas";
import { Status, SuccessCodes } from "@sylvr/utils";

const authController = {
  async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const parsedData = RegisterUserPayloadSchema.parse(req.body); // Will throw a ZodError in case of invalid data
      await authService.registerUser(parsedData);
      res.status(Status.Created).json({ message: SuccessCodes.SUCCESS_001 });
    } catch (error) {
      next(error);
    }
  },
  async loginUser(req: Request, res: Response, next: NextFunction) {
    try {
      const parsedData = LoginUserPayloadSchema.parse(req.body);
      const token = await authService.loginUser(parsedData);
      res
        .status(Status.Success)
        .json({ message: SuccessCodes.SUCCESS_002, token });
    } catch (error) {
      next(error);
    }
  },
  validateToken() {},
};

export default authController;
