import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DesktopForm } from "./screens/DesktopForm";
import { Celular } from "./screens/Celular";
import { CellForm } from "./screens/CellForm";
import { Index } from "./screens/Index";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <DesktopForm />,
  },
  {
    path: "/desktop-form",
    element: <DesktopForm />,
  },
  {
    path: "/celular",
    element: <Celular />,
  },
  {
    path: "/cell-form",
    element: <CellForm />,
  },
  {
    path: "/index",
    element: <Index />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
