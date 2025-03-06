import React from "react";
import { RouteObject } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import ProfilePage from "../pages/ProfilePage";


export const protectedRoutes: RouteObject[] = [
  {
    path: "/profile",
    element: React.createElement(PrivateRoute, null, React.createElement(ProfilePage)),
  },
];
