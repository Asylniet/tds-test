import { UpdateUser, User } from "@/helpers/validators/user";
import { axiosInstance } from "./api";
import { joinArraysOnId } from "@/helpers/joinArrays";
import { usersMockData } from "@/mock/data";
import { LoaderFunctionArgs } from "react-router-dom";

class UsersAPI {
  private axios = axiosInstance("users");

  getUsers = async () => {
    const response = await this.axios.get<User[]>("/");
    const users = joinArraysOnId(response.data, usersMockData);
    return users;
  };

  getUser = async ({ params }: LoaderFunctionArgs<{ id: string }>) => {
    const response = await this.axios.get<User>(`/${params.id}`);
    const userMeta = usersMockData.find((user) => user.id === response.data.id);
    const user = { ...response.data, ...userMeta };
    return user;
  };

  createUser = async (data: UpdateUser) => {
    const response = await this.axios.post("/", data);
    return response.data;
  };

  updateUser = async (id: User["id"], data: UpdateUser) => {
    const response = await this.axios.put(`/${id}`, data);
    return response.data;
  };

  deleteUser = async (id: User["id"]) => {
    const response = await this.axios.delete(`/${id}`);
    return response.data;
  };
}

export const usersAPI = new UsersAPI();
