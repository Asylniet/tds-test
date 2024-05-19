import { UpdateUser, User } from "@/helpers/validators/user";
import { axiosInstance } from "./api";

class UsersAPI {
  private axios = axiosInstance("users");

  getUsers = async () => {
    const response = await this.axios.get<User[]>("/");
    return response.data;
  };

  getUser = async (id: string) => {
    const response = await this.axios.get<User>(`/${id}`);
    return response.data;
  };

  createUser = async (data: UpdateUser) => {
    const response = await this.axios.post("/", data);
    return response.data;
  };

  updateUser = async (id: string, data: UpdateUser) => {
    const response = await this.axios.put(`/${id}`, data);
    return response.data;
  };

  deleteUser = async (id: string) => {
    const response = await this.axios.delete(`/${id}`);
    return response.data;
  };
}

export const usersAPI = new UsersAPI();
