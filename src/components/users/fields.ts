import { UpdateUser } from "@/helpers/validators/user";
import { FieldType } from "@/types/field";

export const fields: FieldType<keyof UpdateUser>[] = [
  {
    name: "firstname",
    label: "First Name",
    placeholder: "John",
  },
  {
    name: "lastname",
    label: "Last Name",
    placeholder: "Doe",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "johndoe@example.com",
  },
];
