import { UpdateUser, User } from "@/helpers/validators/user";
import { create } from "zustand";

type UserStore = {
  users: User[] | undefined;
  setUsers: (users: User[]) => void;
  addUser: (user: UpdateUser) => void;
  updateUser: (id: User["id"], user: UpdateUser) => void;
  deleteUser: (id: User["id"]) => void;
};

const useUserStore = create<UserStore>((set) => ({
  users: undefined,
  setUsers: (users) => set({ users }),
  addUser: (user) =>
    set((state) => ({
      users: [
        ...state.users!,
        {
          ...user,
          id: Math.floor(Math.random() * 1000),
          skills: [],
          dateOfRegistration: new Date(),
        },
      ],
    })),
  updateUser: (id, user) =>
    set((state) => ({
      users: state.users!.map((u) => (u.id === id ? { ...u, ...user } : u)),
    })),
  deleteUser: (id) =>
    set((state) => ({ users: state.users!.filter((u) => u.id !== id) })),
}));

export default useUserStore;
