import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    background: 'hsl(229, 57%, 11%)',
  },
  bar: {
    borderRadius: 5,
    background: 'linear-gradient(90deg, hsl(6, 100%, 80%), hsl(335, 100%, 65%))',
  },
}))(LinearProgress);

function Progress() {
  return <BorderLinearProgress variant="determinate" value={82} />;
};

export default Progress;
