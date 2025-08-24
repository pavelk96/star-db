import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "people",
      filename: "remoteEntry.js",
      exposes: {
        "./PeoplePage": "./src/people-page.tsx",
      },
      remotes: {},
      shared: {
        react: { singleton: true, requiredVersion: false },
        "react-dom": { singleton: true, requiredVersion: false },
        "@star-db/shared": { singleton: true, requiredVersion: false },
      },
    }),
  ],
  server: { port: 5174 },
  preview: { port: 5174 },
  build: { target: "esnext", modulePreload: false, cssCodeSplit: true },
});