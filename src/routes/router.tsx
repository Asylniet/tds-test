import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import { usersAPI } from "@/services/api/users";

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
    ],
  },
  // { path: "*", element: <NotFound /> },
]);
