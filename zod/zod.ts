import { z } from "zod";

export const newsLetterValidation = z.string().email();

export const loginValidation = z.object({
   email: z.string().email(),
   password: z.string().min(8)
});

export const registerValidation = z
   .object({
      username: z.string().min(8, "Username must have at least 8 characters").max(20),
      email: z.string().email(),
      password: z.string().min(8, "Password must have at least 8 characters").max(20),
      confirmPassword: z.string().min(8).max(20)
   })
   .refine((data) => data.password === data.confirmPassword, { path: ["confirmPassword"], message: "Passwords don't match" });

export const reviewValidation = z.object({
   rating: z.number().min(1, "You must have at least 1 star").max(5, "You can only have 5 stars"),
   title: z.string().min(5).max(50),
   productId: z.string(),
   applicationUserId: z.string(),
   createdAt: z.string(),
   comment: z.string().min(5).max(500)
});
