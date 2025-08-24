import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
    cssVariables: true,
    typography: {
        fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
        h4: { fontWeight: 700 },
    },
    palette: {
        mode: "dark",
        primary: { main: "#90caf9" },
        secondary: { main: "#f48fb1" },
        background: { default: "#0b0f19", paper: "#111826" },
    },
    shape: { borderRadius: 12 },
});
