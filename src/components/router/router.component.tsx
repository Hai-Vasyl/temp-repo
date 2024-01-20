import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthPage, ErrorPage, HomePage } from "../../pages";
import { Wrapper } from "../wrapper";

const routerAuthorized = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper children={<HomePage />} />,
    errorElement: <Wrapper children={<ErrorPage />} />,
  },
]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper children={<AuthPage />} />,
    errorElement: <Wrapper children={<ErrorPage />} />,
  },
]);

type RouterProps = {
  isAuth: boolean;
};

export const Router: React.FC<RouterProps> = ({ isAuth }) => {
  return <RouterProvider router={isAuth ? routerAuthorized : router} />;
};
