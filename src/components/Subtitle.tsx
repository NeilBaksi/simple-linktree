import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),
      [theme.breakpoints.up('xs')]: {
        zoom: 0.7,
      },
      [theme.breakpoints.up('sm')]: {
        zoom: 0.8,
      },
    },
  }),
);


interface SubtitleProps {
  subtitle: string;
}

export const Subtitle: React.FC<SubtitleProps> = (props) => {
  const classes = useStyles();
  const { subtitle } = props;
  return (
    <div className={classes.root}>
      <Typography variant="h5" component="h2" gutterBottom align='center' style={{width: '100%'}}>
        {subtitle}
      </Typography>
    </div>
  );
}

