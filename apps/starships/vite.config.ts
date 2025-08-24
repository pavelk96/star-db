import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const base = env.VITE_BASE || "/";
  return {
    base,
    plugins: [
      react(),
      federation({
        name: "starships",
        filename: "remoteEntry.js",
        exposes: {
          "./StarshipsPage": "./src/starships-page.tsx",
        },
        remotes: {},
        shared: {
          react: { singleton: true, requiredVersion: false },
          "react-dom": { singleton: true, requiredVersion: false },
          "@emotion/react": { singleton: true, requiredVersion: false },
          "@emotion/styled": { singleton: true, requiredVersion: false },
          "@mui/material": { singleton: true, requiredVersion: false },
          mobx: { singleton: true, requiredVersion: false },
          "mobx-state-tree": { singleton: true, requiredVersion: false },
          "mobx-react-lite": { singleton: true, requiredVersion: false },
          "@star-db/shared": { singleton: true, requiredVersion: false },
        },
      }),
    ],
    server: { port: 5176 },
    preview: { port: 5176 },
    build: { target: "esnext", modulePreload: false, cssCodeSplit: true },
  };
});