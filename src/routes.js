import { lazy } from "react";

import Home from "./containers/Home";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";

const NotFound = lazy(() => import("./containers/NotFound"));

export const privateRoutes = [
  {
    path: "/",
    element: <Home />,
  },
];

export const publicRoutes = [
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
];
