import z from "zod";

export const signUpSchema = z.object({
  fullName: z.string().min(3),
  email: z.string().email(),
  phoneNumber: z.string().min(10),
  password: z.string().min(8),
  avatar: z.string().nonempty("Avatar is required"),
});

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
