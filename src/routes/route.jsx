import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dining from "../pages/Dining/Dining";

import AddtoCart from "../pages/AddtoCart/AddtoCart";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dining",
    element: <Dining />,
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
  {
    path: "/add-to-cart",
    element: <AddtoCart />,
  }
]);

export default router;