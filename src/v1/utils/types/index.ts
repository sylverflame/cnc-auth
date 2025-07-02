export type Token = string;

export type RegisterUser = {
  name: string;
  username: string;
  password: string;
  country: string;
  uid: string;
};

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
  ERR_006 = "ERR_006: User already exists",
  ERR_007 = "ERR_007: User not found",
  ERR_008 = "ERR_008: JWT secret key not available",
}

export enum SuccessCodes {
  SUCCESS_001 = "SUCCESS_001: User registered successfully",
  SUCCESS_002 = "SUCCESS_002: User successfully logged in!",
}
