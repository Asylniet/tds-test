import { DataTable } from "@/components/DataTable";
import { columns } from "@/components/users/columns";
import { User } from "@/helpers/validators/user";
import { FC } from "react";
import { useLoaderData } from "react-router-dom";

type HomePageProps = {};

const HomePage: FC<HomePageProps> = () => {
  const users = useLoaderData() as User[];
  return <DataTable columns={columns} data={users} />;
};

export default HomePage;
