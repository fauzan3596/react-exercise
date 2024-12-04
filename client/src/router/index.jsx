import { createBrowserRouter } from "react-router-dom";
import { HomePage, RegisterPage, LoginPage } from "../pages";
import MainLayout from "../layouts/MainLayout";
import PostingsPage from "../pages/PostingsPage";
import AboutPage from "../pages/AboutPage";

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
      {
        path: "/posts",
        element: <PostingsPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);

export default router;
