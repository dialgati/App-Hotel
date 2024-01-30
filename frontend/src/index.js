import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Connexion from "./connect/connexion";
import App from "./App";
import Hotels from "./Pages/Hotels";
import Inscription from "./connect/inscription";
import CardDashboard from "./Pages/CardDashboard";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/connexion" />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/admin/Dashboard",
<<<<<<< HEAD
        element: <CardDashboard/>,
=======
        element: <CardDashboard />,
>>>>>>> 4f9cac7ccb1f000176e7f161e7e6a18ca69c106f
      },
      {
        path: "/admin/Hotels",
        element: <Hotels />,
      },
    ],
  },
  {
    path: "/connexion",
    element: <Connexion />,
  },
  {
    path: "/inscription",
    element: <Inscription />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>
);
