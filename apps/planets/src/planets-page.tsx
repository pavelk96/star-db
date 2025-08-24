import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@star-db/shared";
import { Alert, Card, CardActionArea, CardContent, CircularProgress, Grid2 as Grid, Stack, Typography } from "@mui/material";
import styles from "./planets.module.scss";

export const PlanetsPage = observer(function PlanetsPage() {
  const { planets } = useStore();

  useEffect(() => {
    if (planets.items.length === 0) planets.load();
  }, [planets]);

  return (
    <Stack gap={3} className={styles.page}>
      <Typography variant="h4">Planets</Typography>
      {planets.error && <Alert severity="error">{planets.error}</Alert>}
      {planets.loading ? (
        <Stack alignItems="center" py={4}>
          <CircularProgress />
        </Stack>
      ) : (
        <Grid container spacing={2}>
          {planets.items.map((pl) => (
            <Grid key={pl.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card elevation={3} className={styles.card}>
                <CardActionArea>
                  <CardContent>
                    <Typography fontWeight={700}>{pl.name}</Typography>
                    <Typography variant="body2" color="text.secondary">Population: {pl.population}</Typography>
                    <Typography variant="body2" color="text.secondary">Rotation: {pl.rotationPeriod}</Typography>
                    <Typography variant="body2" color="text.secondary">Diameter: {pl.diameter}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Stack>
  );
});