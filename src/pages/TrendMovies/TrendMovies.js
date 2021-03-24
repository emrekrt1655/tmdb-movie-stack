import React, { useState, useEffect, useCallback } from "react";
import { Container, Typography, CircularProgress, Button } from "@material-ui/core";
import { styles } from "./TrendMovies.style";
import CardList from "../../components/CardList/CardList";
import axios from "axios";
import { trendMovieUrl } from "../../helper/utils";

function TrendMovies() {
    const [movieData, setMovieData] = useState([]);
    const [timeWindow, setTimeWindow] = useState('day')
    const [timeHeader, setTimeHeader] = useState('Daily')
    const [page, setPage] = useState(1);
    const apiKey = process.env.REACT_APP_MOVIEAPI_KEY;
    const trendMovieUrll = trendMovieUrl + timeWindow

    const getPostList = async () => {
        const result = await axios.get(trendMovieUrll, {
            params: {
                api_key: apiKey,
                page: page,
            },
        });
        try {
            setMovieData(
                result?.data?.results)
        } catch (err) {
            console.log(err);
        }
    };



    const handleNextPage = () => {
        setPage(page + 1)

    };
    const handlePreviosPage = () => {
        setPage(page - 1)

    };
    const handleDayButton = useCallback(() => {
        setTimeHeader('Daily');
        setTimeWindow('day')
    }, [])

    const handleWeekButton = useCallback(() => {
        setTimeHeader('Weekly');
        setTimeWindow('week')
    },
        [])

    useEffect(() => {
        getPostList();
    }, [page, timeHeader, timeWindow]);

    const Styles = styles();
    return (
        <Container className={Styles.wrapper}>
            {!movieData ? (
                <CircularProgress />
            ) : (
                <React.Fragment>
                    <Typography className={Styles.heading} variant="h3" component="h3">
                        Welcome to Trendy {timeHeader} Movies
          </Typography>
                    <div>

                        <Button
                            variant="contained"
                            color="primary"
                            style={{ margin: '1rem' }}
                            onClick={handleDayButton}
                        >
                            Day
          </Button>

                        <Button
                            variant="contained"
                            color="primary"
                            style={{ margin: '1rem' }}
                            onClick={handleWeekButton}
                        >
                            Week
          </Button>
                    </div>

                    <CardList
                        movieData={movieData}
                        handleNextPage={handleNextPage}
                        handlePreviosPage={handlePreviosPage}
                        page={page}
                    />
                </React.Fragment>
            )}
        </Container>
    );
}

export default TrendMovies;
