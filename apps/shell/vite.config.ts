import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const REMOTE_PEOPLE = env.VITE_REMOTE_PEOPLE || "http://localhost:5174/assets/remoteEntry.js";
  const REMOTE_PLANETS = env.VITE_REMOTE_PLANETS || "http://localhost:5175/assets/remoteEntry.js";
  const REMOTE_STARSHIPS = env.VITE_REMOTE_STARSHIPS || "http://localhost:5176/assets/remoteEntry.js";
  const base = env.VITE_BASE || "/";

  return {
    base,
    plugins: [
      react(),
      federation({
        name: "shell",
        remotes: {
          people: REMOTE_PEOPLE,
          planets: REMOTE_PLANETS,
          starships: REMOTE_STARSHIPS,
        },
        shared: {
          react: { singleton: true, requiredVersion: false },
          "react-dom": { singleton: true, requiredVersion: false },
          "react-router-dom": { singleton: true, requiredVersion: false },
          "@star-db/shared": { singleton: true, requiredVersion: false },
          "@mui/material": { singleton: false, requiredVersion: false },
          "@emotion/react": { singleton: false, requiredVersion: false },
          "@emotion/styled": { singleton: false, requiredVersion: false },
        },
      }),
    ],
    server: { port: 5173 },
    preview: { port: 5173 },
    build: {
      target: "esnext",
      modulePreload: false,
      cssCodeSplit: true,
    },
  };
});