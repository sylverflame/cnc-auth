import cors from "cors";
import dotenv from "dotenv";
import express, { json } from "express";
import {
  globalErrorHandler,
  invalidRouteHandler,
} from "./v1/middlewares/errorHandlers";
import authRouter from "./v1/routes/auth.router";
import { drizzle } from "drizzle-orm/node-postgres";
dotenv.config();

export const db = drizzle(process.env.DATABASE_URL!);

const PORT = process.env.PORT;
const app = express();

// Middlewares
app.use(cors());
app.use(json());

// Routes
app.use("/api/v1/auth", authRouter);

// Invalid route handler
app.use(invalidRouteHandler);

// Global error handler
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log("Auth server running on port", PORT);
});
