import UserFormCard from "@/components/users/UserFormCard";
import { FC } from "react";

type CreateUserPageProps = {};

/**
 * Renders the Create User Page component.
 * @returns The rendered Create User Page component.
 */
const CreateUserPage: FC<CreateUserPageProps> = () => {
  return <UserFormCard />;
};

export default CreateUserPage;
