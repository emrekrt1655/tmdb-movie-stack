import React from "react";
import Card from "./Card";
import { Grid, Button, TextField } from "@material-ui/core";

function CardList({ movieData, handleLoadMore, page }) {
  return (
    <Grid >
     
      <Grid container spacing={3}>
      {movieData &&
        movieData?.map((movie) => {
          return (
            <Grid item xs={4} key={movie?.id}>
              <Card movieData={movie}> {movie?.title} </Card>
            </Grid>
          );
        })}
        </Grid>
        <Grid>
        <Button
                  variant="contained"
                  color="primary"
                  style={{margin:'1rem'}}
                  onClick= {handleLoadMore}
          >
            Load More
          </Button>
        </Grid>
    </Grid>
  );
}

export default CardList;
