/// <reference types="vite/client" />
import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme, StoreProvider, createRootStore } from "@star-db/shared";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppShell } from "./shell";

const router = createBrowserRouter([
  { path: "/", element: <AppShell /> },
]);

const store = createRootStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StoreProvider store={store}>
        <RouterProvider router={router} />
      </StoreProvider>
    </ThemeProvider>
  </React.StrictMode>
);