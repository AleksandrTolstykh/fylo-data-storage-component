import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Icon from './Icon';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'hsl(228, 56%, 26%)',
    borderRadius: '15px',
    borderTopRightRadius: '150px',
    padding: '25px',
  },
});

function Logo() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <CardMedia
            src='images/logo.svg'
            component='img'
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={2} sm={3} md={2}>
          <Icon
            name='icon-document.svg'
            width='20px'
            height='24px'
          />
        </Grid>
        <Grid item xs={2} sm={3} md={2}>
          <Icon
            name='icon-folder.svg'
            width='24px'
            height='20px'
          />
        </Grid>
        <Grid item xs={2} sm={3} md={2}>
          <Icon
            name='icon-upload.svg'
            width='24px'
            height='16px'
          />
        </Grid>
      </Grid>
    </Card>
  );
}

export default Logo;
