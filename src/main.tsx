import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routing/Index";
import { ThemeContextProvider } from "@uiContext";
import { TEMPLATES } from "./templates";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider
      value={{ componentTemplate: TEMPLATES, theme: "custom1" }}
    >
      <RouterProvider router={router}></RouterProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
