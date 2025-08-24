import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const base = env.VITE_BASE || "/";
  const withBase = (u: string) => (u.startsWith("http") || u.startsWith("/") ? u : `${base.replace(/\/$/, "")}/${u}`);
  const REMOTE_PEOPLE = withBase(env.VITE_REMOTE_PEOPLE || "http://localhost:5174/assets/remoteEntry.js");
  const REMOTE_PLANETS = withBase(env.VITE_REMOTE_PLANETS || "http://localhost:5175/assets/remoteEntry.js");
  const REMOTE_STARSHIPS = withBase(env.VITE_REMOTE_STARSHIPS || "http://localhost:5176/assets/remoteEntry.js");

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
    server: { port: 5173 },
    preview: { port: 5173 },
    build: {
      target: "esnext",
      modulePreload: false,
      cssCodeSplit: true,
    },
  };
});