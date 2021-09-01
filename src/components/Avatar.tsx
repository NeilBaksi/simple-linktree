import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      '& > *': {
        margin: theme.spacing(4),
      },
    },
    size: {
        width: theme.spacing(14),
        height: theme.spacing(14),
    },
  }),
);

interface ImageAvatarProps {
    src?: string;
    alt?: string;
}

export const ImageAvatar: React.FC<ImageAvatarProps> = (props) => {
  const { src, alt } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar src={src} alt={alt} className={classes.size}/>
    </div>
  );
}
