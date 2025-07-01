export enum Status {
  Success = 200,
  Created = 201,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  InternalServerError = 500,
}

export enum ErrorCodes {
  ERR_001 = "ERR_001: Invalid JSON",
  ERR_002 = "ERR_002: Invalid Credentials",
  ERR_003 = "ERR_003: No payload received",
  ERR_004 = "ERR_004: Sorry can't find that!",
  ERR_005 = "ERR_005: Something went wrong!",
}

export enum SuccessCodes {
  SUCCESS_001 = "SUCCESS_001: User created successfully",
}
