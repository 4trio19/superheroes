import React from 'react';
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 500,
  },
});

export default function HeroCard(props) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  let randNum = getRandomInt(731);
  console.log(randNum)
  let randomHero = props.details[getRandomInt(randNum)];
  const classes = useStyles();

  return (
    <Container>
    <Card className={classes.card}>
        <CardMedia
          component="img"
          alt={randomHero ? randomHero.name : 'some hero'}
          height="400"
          image={randomHero ? randomHero.images.lg : 'brokenimage.jpg'}
          title={randomHero ? randomHero.name : ''}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {randomHero ? randomHero.name : ''}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {randomHero ? randomHero.work.occupation : 'hErO'}
          </Typography>
        </CardContent>
    </Card>
    </Container>
    );
  }