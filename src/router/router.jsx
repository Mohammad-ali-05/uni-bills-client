import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/mainLayout";
import Home from "../pages/Home";
import AllBills from "../pages/AllBills";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthProvider from "../contexts/AuthProvider";

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <MainLayout></MainLayout>
      </AuthProvider>
    ),
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/bills",
        element: <AllBills></AllBills>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default Router;
