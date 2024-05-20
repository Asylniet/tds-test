import z from "zod";
import { skillSchema } from "./skill";

export const userSchema = z.object({
  id: z.number(),
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email(),
  skills: z.array(skillSchema),
  dateOfRegistration: z.date(),
});

export type User = z.infer<typeof userSchema>;

export const updateUserSchema = userSchema.pick({
  firstname: true,
  lastname: true,
  email: true,
  skills: true,
});

export type UpdateUser = z.infer<typeof updateUserSchema>;

export const userMetaSchema = userSchema.pick({
  id: true,
  skills: true,
  dateOfRegistration: true,
});

export type UserMeta = z.infer<typeof userMetaSchema>;
