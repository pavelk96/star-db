import React from "react";
import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export function AppShell() {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <AppBar position="sticky" color="transparent" enableColorOnDark sx={{ backdropFilter: "blur(8px)", background: "rgba(0,0,0,0.4)" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 800, letterSpacing: 1 }}>
            Star DB
          </Typography>
          <Button component={Link} to="/people" color="inherit">People</Button>
          <Button component={Link} to="/planets" color="inherit">Planets</Button>
          <Button component={Link} to="/starships" color="inherit">Starships</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ py: 4, flexGrow: 1 }}>
        <Outlet />
      </Container>
    </Box>
  );
}

export function Landing() {
  return (
    <MotionBox initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 120 }}>
      <Typography variant="h4" gutterBottom>
        Explore the Star Wars universe
      </Typography>
      <Typography color="text.secondary">
        Choose a section to begin.
      </Typography>
    </MotionBox>
  );
}