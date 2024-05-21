import { DataTable } from "@/components/table/DataTable";
import AddNewUserButton from "@/components/users/table/AddNewUserButton";
import { columns } from "@/components/users/table/columns";
import { User } from "@/helpers/validators/user";
import useUserStore from "@/store/userStore";
import { FC, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

type HomePageProps = {};

const HomePage: FC<HomePageProps> = () => {
  const _users = useLoaderData() as User[];
  const { setUsers, users } = useUserStore();
  useEffect(() => {
    if (users) return;
    setUsers(_users);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setUsers, _users]);
  return (
    <DataTable
      columns={columns}
      data={users || []}
      ActionComponent={<AddNewUserButton />}
    />
  );
};

export default HomePage;
