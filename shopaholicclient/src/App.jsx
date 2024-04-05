import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import Test from "./pages/Test";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/team",
        element: <Test />,
      },
    ],
  },
]);
export default function () {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
