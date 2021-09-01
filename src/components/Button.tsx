import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { SvgIconProps, Button, Link } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(2,0),
    },
  }),
);

interface ButtonsProps {
    link: string;
    name: string;
    icon: React.ReactElement<SvgIconProps>;
    specificColor?: string;
}

export const Buttons: React.FC<ButtonsProps> = (props) => {
  const classes = useStyles();
  const {link, name, icon, specificColor = '#a6d4fa'} = props; 

  return (
    <div>
        <Link href={link} target="_blank" rel="noopener" underline="none">
            <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                className={classes.button}
                startIcon={icon}
                style={{backgroundColor: specificColor, textTransform: 'initial'}}
            >
                {name}
            </Button>
        </Link>
    </div>
  );
}
