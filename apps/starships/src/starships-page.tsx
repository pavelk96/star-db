import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@star-db/shared";
import { Alert, Card, CardActionArea, CardContent, CircularProgress, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import styles from "./starships.module.scss";

export const StarshipsPage = observer(function StarshipsPage() {
  const { starships } = useStore();

  useEffect(() => {
    if (starships.items.length === 0) starships.load();
  }, [starships]);

  return (
    <Stack gap={3} className={styles.page}>
      <Typography variant="h4">Starships</Typography>
      {starships.error && <Alert severity="error">{starships.error}</Alert>}
      {starships.loading ? (
        <Stack alignItems="center" py={4}>
          <CircularProgress />
        </Stack>
      ) : (
        <Grid container spacing={2}>
          {starships.items.map((s) => (
            <Grid key={s.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card elevation={3} className={styles.card}>
                <CardActionArea>
                  <CardContent>
                    <Typography fontWeight={700}>{s.name}</Typography>
                    <Typography variant="body2" color="text.secondary">{s.model}</Typography>
                    <Typography variant="body2" color="text.secondary">Crew: {s.crew} • Passengers: {s.passengers}</Typography>
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