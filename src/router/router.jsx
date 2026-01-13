import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/mainLayout";
import Home from "../pages/Home";
import AllBills from "../pages/AllBills";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthProvider from "../contexts/AuthProvider";
import Profile from "../pages/Profile";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import MyPayBills from "../pages/MyPayBills";
import BillsDetails from "../pages/BillsDetails";
import ErrorPage404 from "../pages/ErrorPage404";

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
        path: "/bills-details/:id",
        element: (
          <PrivateRoute>
            <BillsDetails></BillsDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-pay-bills",
        element: (
          <PrivateRoute>
            <MyPayBills></MyPayBills>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <PublicRoute>
            <Login></Login>
          </PublicRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <PublicRoute>
            <Register></Register>
          </PublicRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element:<ErrorPage404></ErrorPage404>
      }
    ],
  },
]);
export default Router;
