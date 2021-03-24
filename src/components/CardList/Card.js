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
import { baseImageUrl, noPhotoAvailable } from "../../helper/utils";
import Modal from "./Modal";
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import {useHistory} from 'react-router-dom'


export default function MovieCard({ movieData }) {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const classes = useStyles();
  const image = baseImageUrl + movieData.poster_path;
  const onOpenDetailPage = () => history.push(`/detail/${movieData?.id}`)
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={onOpenDetailPage}>
        <CardMedia
          className={classes.media}
          image={image ? image : noPhotoAvailable}
          title={"Contemplative Reptile"}
        />
        <CardContent>
          <Typography  className={classes.titlehead} gutterBottom variant="h5" component="h2">
            {movieData.title}
          </Typography>
          <Typography 
          className={classes.para} variant="body2" color="textSecondary" component="p">
            {movieData.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardAction}>
        
        <Button className={classes.cardButtonLeft} size="small" color="primary" onClick={onOpenDetailPage}>
          See Full Movie
        </Button>
        <Button className={classes.cardButtonRight}  size="small" color="primary" onClick={() => setIsOpen(true)}>
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



