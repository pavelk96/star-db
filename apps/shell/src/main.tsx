/// <reference types="vite/client" />
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme, StoreProvider, createRootStore } from "@star-db/shared";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { AppShell, Landing } from "./shell";

const PeopleRemote = React.lazy(() => import("people/PeoplePage").then((m) => ({ default: m.PeoplePage })));
const PlanetsRemote = React.lazy(() => import("planets/PlanetsPage").then((m) => ({ default: m.PlanetsPage })));
const StarshipsRemote = React.lazy(() => import("starships/StarshipsPage").then((m) => ({ default: m.StarshipsPage })));

const router = createHashRouter([
  {
    path: "*",
    element: <AppShell />,
    children: [
      { index: true, element: <Landing /> },
      { path: "people", element: <Suspense fallback={<div />}> <PeopleRemote /> </Suspense> },
      { path: "planets", element: <Suspense fallback={<div />}> <PlanetsRemote /> </Suspense> },
      { path: "starships", element: <Suspense fallback={<div />}> <StarshipsRemote /> </Suspense> },
    ]
  },
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