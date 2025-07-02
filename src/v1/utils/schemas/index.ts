import { z } from "zod/v4";

export const RegisterUserPayloadSchema = z.object({
  name: z.string(),
  username: z.string(),
  password: z.string(),
});

export type RegisterUser = z.infer<typeof RegisterUserPayloadSchema>;
