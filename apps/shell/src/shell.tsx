import React, { Suspense } from "react";
import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const PeopleRemote = React.lazy(() => import("people/PeoplePage").then((m) => ({ default: m.PeoplePage })));
const PlanetsRemote = React.lazy(() => import("planets/PlanetsPage").then((m) => ({ default: m.PlanetsPage })));
const StarshipsRemote = React.lazy(() => import("starships/StarshipsPage").then((m) => ({ default: m.StarshipsPage })));

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
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/people" element={<Suspense fallback={<div />}> <PeopleRemote /> </Suspense>} />
          <Route path="/planets" element={<Suspense fallback={<div />}> <PlanetsRemote /> </Suspense>} />
          <Route path="/starships" element={<Suspense fallback={<div />}> <StarshipsRemote /> </Suspense>} />
        </Routes>
        <Outlet />
      </Container>
    </Box>
  );
}

function Landing() {
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