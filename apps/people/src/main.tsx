import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme, StoreProvider, createRootStore } from "@star-db/shared";
import { PeoplePage } from "./people-page";

const store = createRootStore();

if (import.meta.env.DEV) {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StoreProvider store={store}>
          <PeoplePage />
        </StoreProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export { PeoplePage };