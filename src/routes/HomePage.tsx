import { DataTable } from "@/components/table/DataTable";
import AddNewUserButton from "@/components/users/table/AddNewUserButton";
import { columns } from "@/components/users/table/columns";
import { User } from "@/helpers/validators/user";
import { FC } from "react";
import { useLoaderData } from "react-router-dom";

type HomePageProps = {};

const HomePage: FC<HomePageProps> = () => {
  const users = useLoaderData() as User[];
  return (
    <DataTable
      columns={columns}
      data={users}
      ActionComponent={<AddNewUserButton />}
    />
  );
};

export default HomePage;
