import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Celular } from "./screens/Celular";
import { Index } from "./screens/Index";
import { CellForm } from "./screens/CellForm";
import { DesktopForm } from "./screens/DesktopForm";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Celular />,
  },
  {
    path: "/celular",
    element: <Celular />,
  },
  {
    path: "/index",
    element: <Index />,
  },
  {
    path: "/cell-form",
    element: <CellForm />,
  },
  {
    path: "/desktop-form",
    element: <DesktopForm />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
