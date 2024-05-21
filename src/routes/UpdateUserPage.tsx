import { User } from "@/helpers/validators/user";
import { FC } from "react";
import { useLoaderData } from "react-router-dom";
import UserFormCard from "@/components/users/UserFormCard";
import NotFound from "@/components/layout/NotFound";

type UpdateUserPageProps = {};

const UpdateUserPage: FC<UpdateUserPageProps> = () => {
  const user = useLoaderData() as User;

  if (!user.id)
    return <NotFound message="User not found, please try different url" />;

  return <UserFormCard user={user} />;
};

export default UpdateUserPage;
