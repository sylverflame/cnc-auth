import { NextFunction, Request, Response } from "express";
import {
  BadRequestError,
  ForbiddenError,
  NotFoundError,
  UnauthorizedError,
} from "../utils/classes/Errors";
import { ErrorCodes, Status } from "../utils/types";
import { ZodError } from "zod/v4";
import { DrizzleError } from "drizzle-orm";

export const invalidRouteHandler = (req: Request, res: Response) => {
  res.status(Status.BadRequest).json({ error: ErrorCodes.ERR_004 });
  return;
};

export const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof SyntaxError && "body" in error) {
    res.status(Status.BadRequest).json({ error: ErrorCodes.ERR_001 });
    return;
  }

  if (error instanceof ZodError) {
    res.status(Status.BadRequest).json({ error: error.flatten() });
    return;
  }

  if (error instanceof DrizzleError || error.message.includes("Failed query")) {
    res.status(Status.InternalServerError).json({ error: error.message });
    return;
  }

  if (error instanceof BadRequestError) {
    res.status(Status.BadRequest).json({ error: error.message });
    return;
  }

  if (error instanceof UnauthorizedError) {
    res.status(Status.Unauthorized).json({ error: error.message });
    return;
  }
  if (error instanceof ForbiddenError) {
    res.status(Status.Forbidden).json({ error: error.message });
    return;
  }

  if (error instanceof NotFoundError) {
    res.status(Status.NotFound).json({ error: error.message });
    return;
  }

  res.status(Status.InternalServerError).json({ error: ErrorCodes.ERR_005 });
};
