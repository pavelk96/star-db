import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@star-db/shared";
import { Alert, Avatar, Card, CardActionArea, CardContent, CircularProgress, Grid2 as Grid, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from "@mui/material";
import styles from "./people.module.scss";

export const PeoplePage = observer(function PeoplePage() {
  const store = useStore();
  const { people } = store;

  useEffect(() => {
    if (people.items.length === 0) people.load();
  }, [people]);

  return (
    <Stack gap={3} className={styles.page}>
      <Typography variant="h4">People</Typography>
      {people.error && <Alert severity="error">{people.error}</Alert>}
      {people.loading ? (
        <Stack alignItems="center" py={4}>
          <CircularProgress />
        </Stack>
      ) : (
        <Grid container spacing={2}>
          {people.items.map((p) => (
            <Grid key={p.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card elevation={3} className={styles.card}>
                <CardActionArea>
                  <CardContent>
                    <Stack direction="row" gap={2} alignItems="center">
                      <Avatar src={`https://starwars-visualguide.com/assets/img/characters/${p.id}.jpg`} />
                      <Stack>
                        <Typography fontWeight={700}>{p.name}</Typography>
                        <Typography variant="body2" color="text.secondary">{p.gender} • {p.birthYear}</Typography>
                      </Stack>
                    </Stack>
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