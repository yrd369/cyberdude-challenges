import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Recipe from "./components/Recipe.jsx";
import Homepage from "./pages/Homepage.jsx";
import Descpage from "./pages/Descpage.jsx";
const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/home",
        element: <Homepage />,
      },
      {
        path: "/newrecipe",
        element: <Recipe />,
      },
      {
        path: "/recipe/:id",
        element: <Descpage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={route} />
);
