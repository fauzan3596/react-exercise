import { createBrowserRouter } from "react-router-dom";
import { HomePage, RegisterPage, LoginPage } from "../pages";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
