import { DataTable } from "@/components/table/DataTable";
import AddNewUserButton from "@/components/users/table/AddNewUserButton";
import { columns } from "@/components/users/table/columns";
import { User } from "@/helpers/validators/user";
import { useSaveFetchedUsers } from "@/hooks/useSaveFetchedUsers";
import { FC } from "react";
import { useLoaderData } from "react-router-dom";

type HomePageProps = {};

/**
 * Represents the home page component.
 * @component
 */
const HomePage: FC<HomePageProps> = () => {
  const _users = useLoaderData() as User[];
  const { users } = useSaveFetchedUsers(_users);
  return (
    <DataTable
      columns={columns}
      data={users || []}
      ActionComponent={<AddNewUserButton />}
    />
  );
};

export default HomePage;
