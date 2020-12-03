import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

import Me from '../assets/images/me.jpg';

import SocialNetworks from './SocialNetworks';

const useStyles = makeStyles({
  root: {
    marginTop: 100,
    maxWidth: 345,
    minWidth: 320,
    overflow: "visible",
  },
  media: {
    height: 150,
    width: 150,
    borderRadius: 100,
    display: "inline-block",
    marginTop: "-75px",
    zIndex: 1
  },
  position: {
    color: "tomato"
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Me}
          title="Author"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Denys Glukhovskyi
          </Typography>
          <Typography className={classes.position} variant="body1" color="textPrimary" component="p">
            Frontend/Fullstack Developer
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <SocialNetworks />
      </CardActions>
    </Card>
  );
}