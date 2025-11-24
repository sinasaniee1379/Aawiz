import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "enter your email please")
    .email("email is not valid"),

  password: z.string().min(4, "enter your password please"),
});

export type LoginFormSchema = z.infer<typeof LoginFormSchema>;
