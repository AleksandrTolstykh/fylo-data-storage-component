import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Progress from './Progress';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'hsl(228, 56%, 26%)',
    borderRadius: '15px',
    color: 'hsl(243, 100%, 93%)',
    padding: '5px',
    fontSize: '14px',
  },
  padding: {
    paddingTop: '15px',
  },
  boldText: {
    fontWeight: 700,
  },
  bigFont: {
    fontSize: 40,
    fontWeight: 700,
  },
  greyText: {
    color: 'hsl(229, 7%, 55%)',
    fontWeight: 700,
  },
  leftSpaceCard: {
    borderRadius: '15px',
    position: 'relative',
    width: '50%',
    left: '25%',
    bottom: '40px',
  }
});

function Storage() {
  const classes = useStyles();

  return (
    <Container>
      <Card className={classes.root}>
        <CardContent>
          <Grid container>
            <Grid item xs={12}>
              You’ve used <span className={classes.boldText}>815 GB</span> of your storage
            </Grid>
            <Grid item xs={12} className={classes.padding} >
              <Progress />
            </Grid>
            <Grid item xs={9} sm={7} md={9} lg={10} className={classes.padding}>
              <div className={classes.boldText}>0 GB</div>
            </Grid>
            <Grid item xs={3} sm={5} md={3} lg={2} className={classes.padding}>
              <div className={classes.boldText}>1000 GB</div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Box>
        <Card className={classes.leftSpaceCard}>
          <CardContent>
            <span className={classes.bigFont}>185 </span><span className={classes.greyText}>GB LEFT</span>
          </CardContent>
        </Card>
      </Box>
    </Container>
  )
};

export default Storage;
