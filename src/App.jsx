import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { DesktopForm } from "./screens/DesktopForm";
import { CellForm } from "./screens/CellForm";
import { Index } from "./screens/Index";

export const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const renderForm = () => {
    if (isMobile) {
      return <CellForm />;
    } else {
      return <DesktopForm />;
    }
  };

  const router = createBrowserRouter([
    {
      path: "/*",
      element: <Index />,
    },
    {
      path: "/form",
      element: renderForm(),
    },
  ]);

  return <RouterProvider router={router} />;
};
