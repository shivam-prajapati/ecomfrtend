import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Appnot from "./Appnot.jsx";
import Login from "../components/Login.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../index.css";
import Home from "../components/Home.jsx"
const router = createBrowserRouter([
  { path: "/cart", element: <Appnot /> },
  { path: "/", element: <Home /> },
  { path: "/enter", element: <Login /> },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App1></App1> */}
  </React.StrictMode>
);
