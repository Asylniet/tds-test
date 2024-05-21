import { UpdateUser, User, updateUserSchema } from "@/helpers/validators/user";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usersAPI } from "@/services/api/users";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import useUserStore from "@/store/userStore";

export const useUserForm = (user?: User) => {
  const { addUser, updateUser } = useUserStore();
  const navigate = useNavigate();
  const _user = user || ({} as UpdateUser);
  const form = useForm<UpdateUser>({
    resolver: zodResolver(updateUserSchema),
    mode: "onChange",
    defaultValues: {
      firstname: _user.firstname,
      lastname: _user.lastname,
      email: _user.email,
      skills: _user.skills,
    },
  });

  async function onSubmit(values: UpdateUser) {
    const message = user
      ? "User updated successfully"
      : "User created successfully";
    try {
      const response = user
        ? await usersAPI.updateUser(user.id, values)
        : await usersAPI.createUser(values);

      if (response) {
        toast.success(message);
        navigate("/");
      }

      if (user) {
        updateUser(user.id, { ...values });
      } else {
        addUser({ ...values });
      }
    } catch (error) {
      toast.error("Failed to update the user");
    }
  }
  return { form, onSubmit };
};
