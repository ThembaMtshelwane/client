import LandingPage from "./pages/LandingPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./pages/ErrorPage";
import Dashbaord from "./pages/Dashbaord";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <LandingPage /> },
      {
        path: "/dashboard",
        element: <Dashbaord />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
