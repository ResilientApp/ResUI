import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  homepage: {
    backgroundColor: theme.palette.background.default,
  },
  heroContent: {
    textAlign: 'center',
    padding: '40px',
    color: 'white',
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.homepage}>
      <section className="hero">
        <div className={classes.heroContent}>
          <Typography variant="h1">
            Welcome to ResilientDB
          </Typography>
          <Typography variant="body1">
            Your trusted database solution
          </Typography>
        </div>
      </section>

      <section className="features">
        {/* Add your feature content here */}
      </section>
    </div>
  );
};

export default HomePage;
