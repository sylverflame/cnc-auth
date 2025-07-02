import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../utils/classes/Errors";
import { ErrorCodes } from "../utils/types";

export const requestBodyCheck = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.body) {
      throw new BadRequestError(ErrorCodes.ERR_003);
    }
    next();
  } catch (error) {
    next(error);
  }
};
