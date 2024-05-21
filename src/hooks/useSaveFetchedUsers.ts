import { User } from "@/helpers/validators/user";
import useUserStore from "@/store/userStore";
import { useEffect } from "react";
/**
 * Custom hook to save fetched users to the user store.
 * @param _users - The array of users to be saved.
 * @returns An object containing the saved users.
 */
export const useSaveFetchedUsers = (_users: User[]) => {
  const { setUsers, users } = useUserStore();

  useEffect(() => {
    if (users) return;
    setUsers(_users);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setUsers, _users]);

  return { users };
};
