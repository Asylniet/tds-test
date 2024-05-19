import z from "zod";

export const userSchema = z.object({
  id: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email(),
  skills: z.array(z.string()),
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
