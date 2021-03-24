import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { baseImageUrl, noPhotoAvailable } from "../../helper/utils";


const useStyles = makeStyles((theme)=>({
  root: {
    maxWidth: 745,
    margin: 'auto'
  },
  media: {
    height: 340,
  },
  lang : {
    textTransform: 'capitalize',
    marginRight: '0.9rem'
  },
  spann: {
    color:theme.palette.secondary.main
  },
  langfam:{
    display:'flex',
    flexDirection:'row',
  },
  div1:{
      display:'flex',
      justifyContent: 'space-between'

  },

}));

export default function MediaCard({movie}) {
  const classes = useStyles();
  const image = baseImageUrl + movie?.poster_path;
  
  return (
    
    <Card className={classes.root}>
      <div>
        <CardMedia
          className={classes.media}
          image={image ? image : noPhotoAvailable}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {movie?.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {movie?.overview}
          </Typography>
          <div className={classes.div1}>
          <Typography className={classes.lang} variant="body2" color="textSecondary" component="p">
          Language: <span className={classes.spann}> {movie?.spoken_languages[0]?.english_name} </span>
          </Typography>
          <Typography className={classes.lang} variant="body2" color="textSecondary" component="p">
          Kind: {movie?.adult ?<span className={classes.spann}> Adult </span> : <span className={classes.spann}> Family </span> }
          </Typography>
          <Typography className={classes.lang} variant="body2" color="textSecondary" component="p">
          Release Date: <span className={classes.spann}> {movie?.release_date} </span>
          </Typography>
          </div>
          <div className={classes.div1}>
          <Typography className={classes.lang} variant="body2" color="textSecondary" component="p">
          Vote Average: <span className={classes.spann}> {movie?.vote_average} </span>
          </Typography>
          <Typography className={classes.lang} variant="body2" color="textSecondary" component="p">
          Votes: <span className={classes.spann}> {movie?.vote_count} </span>
          </Typography>
          <Typography className={classes.lang} variant="body2" color="textSecondary" component="p">
          Genres: <span className={classes.spann}>{movie?.genres[0]?.name ? movie?.genres[0]?.name + ', ' + movie?.genres[1]?.name : null } </span>
          </Typography>
          </div>
        <a href={movie?.homepage} >
            Please click to send the movie homepage...
        </a>
        </CardContent>
      </div>
    </Card>
   
  );
}

