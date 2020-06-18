import { Button, CardActionArea, CardActions } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    padding: 60,
  },
}));

const ToText = (node) => {
  let tag = document.createElement('div');
  tag.innerHTML = node;
  node = tag.innerText;
  return node;
};

export default function RecipeReviewCard({
  thumbnail,
  title = '',
  content = '',
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={thumbnail}
          title='Paella dish'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {ToText(content).slice(0, 100) + '...'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
