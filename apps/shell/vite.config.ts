import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shell",
      remotes: {
        people: "http://localhost:5174/assets/remoteEntry.js",
        planets: "http://localhost:5175/assets/remoteEntry.js",
        starships: "http://localhost:5176/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "react-router-dom", "@star-db/shared", "@mui/material", "@emotion/react", "@emotion/styled"],
    }),
  ],
  server: { port: 5173 },
  preview: { port: 5173 },
  build: {
    target: "esnext",
    modulePreload: false,
    cssCodeSplit: true,
  },
});