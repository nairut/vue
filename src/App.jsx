import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Celular } from "./screens/Celular";
import { DesktopForm } from "./screens/DesktopForm";
import { CellForm } from "./screens/CellForm";
import { Index } from "./screens/Index";

const App = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const renderForm = () => {
    if (isMobile) {
      return <Celular />;
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
    {
      path: "/cell-form",
      element: <CellForm />,
    },
    {
      path: "/index",
      element: <Index />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
