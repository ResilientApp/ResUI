import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.primary.main,
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    margin: '0 15px',
  },
  button: {
    color: 'white',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          <Link to="/" className={classes.link}>
            ResilientDB
          </Link>
        </Typography>
        <Typography variant="h6">
        <Link to="/dashboard" className={classes.link}>
          Dashboard
        </Link>
        </Typography>
        <Typography variant="h6">
        <Link to="/instances" className={classes.link}>
          Instances
        </Link>
        </Typography>
        <Typography variant="h6">
        <Link to="/login" className={classes.link}>
          Login
        </Link>
        </Typography>
        <Typography variant="h6">
        <Link to="/signup" className={classes.link}>
          Sign Up
        </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
