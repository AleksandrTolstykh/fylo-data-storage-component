import React from 'react';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

function Icon(props) {
  const useStyles = makeStyles({
    root: {
      backgroundColor: 'hsl(229, 57%, 11%)',
      borderRadius: '10px',
      width: '40px',
      height: '40px',
      paddingTop: '10px',
      paddingLeft: '10px',
    },
    icon: {
      width: props.width,
      height: props.height,
    },
  });

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <CardMedia
        className={classes.icon}
        src={'images/' + props.name}
        component='img'
      />
    </Container>
  )
}

export default Icon;
