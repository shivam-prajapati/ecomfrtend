import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import App1 from "./App1.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../index.css";
import Home from "../components/Home.jsx"
const router = createBrowserRouter([
  { path: "/cart", element: <App /> },
  { path: "/", element: <Home /> },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App1></App1> */}
  </React.StrictMode>
);
