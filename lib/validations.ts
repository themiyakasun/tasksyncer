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

export const boardSchema = z.object({
  title: z.string().min(3),
  collaborators: z.array(z.string()),
});

export const boardCollaboratorsSchema = z.object({
  collaborator: z.string().email(),
  status: z.string().min(3),
});

export const taskSchema = z.object({
  name: z.string().min(3),
  board: z.string().min(0),
  description: z.string().min(3),
  priority: z.string().min(3),
  startAt: z.date(),
  endAt: z.date(),
  timeLineColor: z.string().min(3),
  collaborators: z.array(z.string()),
});
