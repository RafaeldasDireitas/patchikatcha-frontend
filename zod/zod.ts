import { z } from "zod";

export const newsLetterValidation = z.string().email();

export const loginValidation = z.object({
   email: z.string().email(),
   password: z.string().min(8).max(50),
   apiKey: z.string()
});

export const registerValidation = z
   .object({
      username: z.string().min(4, "Username must have at least 8 characters").max(25, "Username cannot have more than 25 characters"),
      email: z.string().email(),
      password: z.string().min(8, "Password must have at least 8 characters").max(50, "Password cannot have more than 50 characters"),
      confirmPassword: z.string().min(8).max(50),
      apiKey: z.string()
   })
   .refine((data) => data.password === data.confirmPassword, { path: ["confirmPassword"], message: "Passwords don't match" });

export const reviewValidation = z.object({
   rating: z.number().min(1, "You must have at least 1 star").max(5, "You can only have 5 stars"),
   title: z.string().min(5).max(50),
   productId: z.string(),
   productTitle: z.string(),
   applicationUserId: z.string(),
   createdAt: z.string(),
   comment: z.string().min(5, "Comment must have at least 5 letters").max(500, "You exceeded the amount of words")
});

export const contactUsValidation = z.object({
   subject: z.string().min(1, "The subject cannot be empty").max(30, "Subject is too long"),
   userEmail: z.string().email(),
   content: z.string().min(1, "Content cannot be empty").max(400, "Content cannot be longer than 400 words")
});
