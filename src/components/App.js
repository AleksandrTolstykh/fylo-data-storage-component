import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Logo from './Logo';
import Storage from './Storage';
import Footer from './Footer';

const useStyles = makeStyles({
  root: {
    color: 'hsl(243, 100%, 93%)',
    fontFamily: 'Raleway',
    padding: '15%',
  },
  storage: {
    marginTop: '30px',
  },
  footer: {
    textAlign: 'center',
  },
});

function App() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Logo />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.storage}>
          <Storage />
        </Grid>
      </Grid>
      <Footer className={classes.footer} />
    </Container>
  );
}

export default App;
