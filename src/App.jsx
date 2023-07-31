import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Celular } from "./screens/Celular";
import { DesktopForm } from "./screens/DesktopForm";
import { CellForm } from "./screens/CellForm";
import { Index } from "./screens/Index";
import TagManager from 'react-gtm-module'
import { Obrigado } from "./screens/Obrigado";






export const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const renderMainPage = () => {
    if (isMobile) {
      return <Celular />;
    } else {
      return <Index />;
    }
  };

  const renderFormPage = () => {
    if (isMobile) {
      return <CellForm />;
    } else {
      return <DesktopForm />;
    }
  };

  const router = createBrowserRouter([
    {
      path: "/*",
      element: renderMainPage(),
    },
    {
      path: "/desktop-form",
      element: renderFormPage(),
    },


    {
      path: "/obrigado",
      element: <Obrigado />,
    },


     
  ]);


const tagManagerArgs = {
  gtmId: 'GTM-K3GKPJ5'
}
TagManager.initialize(tagManagerArgs)


  return <RouterProvider router={router} />;
};

