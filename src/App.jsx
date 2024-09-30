import LandingPage from "./pages/LandingPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./pages/ErrorPage";
import Dashbaord from "./pages/Dashbaord";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
    children: [
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
