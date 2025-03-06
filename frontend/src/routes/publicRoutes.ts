import React from "react";
import { RouteObject } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

export const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: React.createElement(HomePage),
  },
  {
    path: "/login",
    element: React.createElement(LoginPage),
  },
];
