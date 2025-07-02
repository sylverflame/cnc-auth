import { z } from "zod/v4";

export const RegisterUserPayloadSchema = z.object({
  name: z.string().min(3),
  username: z.string().min(3),
  password: z.string().min(5),
  country: z.string().length(3),
});

export const LoginUserPayloadSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export type RegisterUserData = z.infer<typeof RegisterUserPayloadSchema>;
export type LoginUserData = z.infer<typeof LoginUserPayloadSchema>;
