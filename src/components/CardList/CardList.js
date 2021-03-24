import React from "react";
import Card from "./Card";
import { Grid, Button } from "@material-ui/core";

function CardList({ movieData, handleNextPage, page, handlePreviosPage }) {
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
        <div>
          {page > 1 ?
            <Button
              variant="contained"
              color="primary"
              style={{ margin: '1rem' }}
              onClick={handlePreviosPage}
            >
              Previous Page
          </Button> : null
          }
          <Button
            variant="contained"
            color="primary"
            style={{ margin: '1rem' }}
            onClick={handleNextPage}
          >
            Next Page
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}

export default CardList;
