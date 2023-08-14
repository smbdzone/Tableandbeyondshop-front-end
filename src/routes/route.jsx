import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dining from "../pages/Dining/Dining";



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
  }
]);

export default router;