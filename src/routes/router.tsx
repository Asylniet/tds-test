import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import { usersAPI } from "@/services/api/users";
import UpdateUserPage from "./UpdateUserPage";
import CreateUserPage from "./CreateUserPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: usersAPI.getUsers,
      },
      {
        path: "/user/:id",
        element: <UpdateUserPage />,
        loader: usersAPI.getUser,
      },
      {
        path: "/user/new",
        element: <CreateUserPage />,
      },
    ],
  },
  // { path: "*", element: <NotFound /> },
]);
