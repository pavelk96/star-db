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
        name: "planets",
        filename: "remoteEntry.js",
        exposes: {
          "./PlanetsPage": "./src/planets-page.tsx",
        },
        remotes: {},
        shared: {
          react: { singleton: true, requiredVersion: false },
          "react-dom": { singleton: true, requiredVersion: false },
          "@star-db/shared": { singleton: true, requiredVersion: false },
        },
      }),
    ],
    server: { port: 5175 },
    preview: { port: 5175 },
    build: { target: "esnext", modulePreload: false, cssCodeSplit: true },
  };
});