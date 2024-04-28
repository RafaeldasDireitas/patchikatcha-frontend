import { z } from "zod";

export const newsLetterValidation = z.string().email();

export const loginValidation = z.object({
   email: z.string().email(),
   password: z.string().min(8)
});

export const registerValidation = z.object({
   username: z.string().min(8).max(20),
   email: z.string().email(),
   password: z.string().min(8).max(20),
   confirmPassword: z.string().min(8).max(20)
});
