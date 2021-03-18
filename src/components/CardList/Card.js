import React, {useState} from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Avatar from "@material-ui/core/Avatar";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./Card.style";
import { baseImageUrl } from "../../helper/utils";
import Modal from "./Modal";
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

export default function MovieCard({ movieData }) {
  const [isOpen, setIsOpen] = useState(false);

  const classes = useStyles();
  const image = baseImageUrl + movieData.poster_path;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={"Contemplative Reptile"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movieData.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {movieData.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary" onClick={() => setIsOpen(true)}>
          Learn More
        </Button>
      </CardActions>
      <Modal  open={isOpen} onClose={() => setIsOpen(false)}>
          
      <div className={classes.wrapper}>
      <Avatar className={classes.avatar} > <MovieCreationIcon /> </Avatar>
            <h3> {movieData?.original_title} </h3>
            <div className={classes.langfam}>
               <p className={classes.lang}> <FiberManualRecordIcon  className={classes.icon}/> Language: <span className={classes.spann}> {movieData?.original_language} </span> </p>
               <p><FiberManualRecordIcon className={classes.icon}/> {movieData?.adult ?<span className={classes.spann}> Adult </span> : <span className={classes.spann}> Family </span> } </p>
            </div>
               <p><FiberManualRecordIcon className={classes.icon}/>Release Date: <span className={classes.spann}> {movieData?.release_date} </span> </p>

        </div>  

      </Modal>
    </Card>
  );
}
