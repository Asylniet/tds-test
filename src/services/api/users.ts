import { UpdateUser, User } from "@/helpers/validators/user";
import { axiosInstance } from "./api";
import { joinArraysOnId } from "@/helpers/joinArrays";
import { usersMockData } from "@/mock/data";
import { LoaderFunctionArgs } from "react-router-dom";

/**
 * Represents an API for managing users.
 */
class UsersAPI {
  private axios = axiosInstance("users");

  /**
   * Retrieves a list of users from the API.
   * @returns {Promise<User[]>} A promise that resolves to an array of User objects.
   */
  getUsers = async () => {
    const response = await this.axios.get<User[]>("/");
    const users = joinArraysOnId(response.data, usersMockData);
    return users;
  };

  /**
   * Retrieves a user from the API based on the provided ID.
   * @param params - The parameters for the loader function, containing the user ID.
   * @returns A Promise that resolves to the retrieved user.
   */
  getUser = async ({ params }: LoaderFunctionArgs<{ id: string }>) => {
    const response = await this.axios.get<User>(`/${params.id}`);
    const userMeta = usersMockData.find((user) => user.id === response.data.id);
    const user = { ...response.data, ...userMeta };
    return user;
  };

  /**
   * Creates a new user.
   * @param data - The user data to be sent to the server.
   * @returns A Promise that resolves to the response data from the server.
   */
  createUser = async (data: UpdateUser) => {
    const response = await this.axios.post("/", data);
    return response.data;
  };

  /**
   * Updates a user with the specified ID.
   *
   * @param id - The ID of the user to update.
   * @param data - The updated user data.
   * @returns The updated user data.
   */
  updateUser = async (id: User["id"], data: UpdateUser) => {
    const response = await this.axios.put(`/${id}`, data);
    return response.data;
  };

  /**
   * Deletes a user by their ID.
   * @param id - The ID of the user to delete.
   * @returns A Promise that resolves to the deleted user data.
   */
  deleteUser = async (id: User["id"]) => {
    const response = await this.axios.delete(`/${id}`);
    return response.data;
  };
}

export const usersAPI = new UsersAPI();
