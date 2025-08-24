import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme, StoreProvider, createRootStore } from "@star-db/shared";
import { StarshipsPage } from "./starships-page";

const store = createRootStore();

if (import.meta.env.DEV) {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StoreProvider store={store}>
          <StarshipsPage />
        </StoreProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export { StarshipsPage };