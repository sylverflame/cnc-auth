import { Router } from "express";
import authController from "../controllers/auth.controller";
import { requestBodyCheck } from "../middlewares/requestBodyCheck";

const authRouter = Router();

authRouter.post("/register", requestBodyCheck, authController.registerUser);
authRouter.post("/login", requestBodyCheck, authController.loginUser);
authRouter.post("/verify", authController.validateToken);

export default authRouter;
