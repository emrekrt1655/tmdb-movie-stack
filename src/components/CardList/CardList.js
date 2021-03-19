import React from "react";
import Card from "./Card";
import { Grid } from "@material-ui/core";

function CardList({ movieData, handleLoadMore, page }) {
  return (
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
  );
}

export default CardList;
