import { User } from "@/helpers/validators/user";
import { FC } from "react";
import { useLoaderData } from "react-router-dom";
import UserFormCard from "@/components/users/UserFormCard";

type UpdateUserPageProps = {};

const UpdateUserPage: FC<UpdateUserPageProps> = () => {
  const user = useLoaderData() as User;
  return <UserFormCard user={user} />;
};

export default UpdateUserPage;
