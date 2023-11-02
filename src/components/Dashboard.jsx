import { Typography, Grid } from '@mui/material';

export default function Dashboard() {

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3">
          Dashboard
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography variant="h5">
          ResilientDB Overview
        </Typography>
        // Dashboards and data grids
      </Grid>

      <Grid item xs={6}>
        <Typography variant="h5">
          Monitoring
        </Typography>  
        // Live metrics and status
      </Grid>

    </Grid>
  );

}