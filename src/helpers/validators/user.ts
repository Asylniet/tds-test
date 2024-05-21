import z from "zod";
import { skillSchema } from "./skill";

export const userSchema = z.object({
  id: z.number(),
  firstname: z.string().min(1),
  lastname: z.string().min(1),
  email: z.string().email(),
  skills: z.array(skillSchema).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
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
