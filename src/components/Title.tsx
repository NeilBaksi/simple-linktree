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
        zoom: 0.7,
      },
      [theme.breakpoints.up('md')]: {
        zoom: 0.7,
      },
    },
  }),
);

interface TitleProps {
  title: string;
}

export const Title: React.FC<TitleProps> = (props) => {
  const classes = useStyles();
  const { title } = props
  return (
    <div className={classes.root}>
      <Typography variant="h2" component="h1" gutterBottom align='center' style={{width: '100%'}}>
        {title}
      </Typography>
    </div>
  );
}
