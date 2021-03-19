import React, {useEffect, useState} from 'react'
import {  Container } from "@material-ui/core";
import { styles } from "./MovieDetail.style";
import axios from 'axios'
import {movieDetailBaseUrl } from '../../helper/utils'
import {useParams} from 'react-router-dom'
import DetailCard from '../../components/DetailCard/DetailCard'




function MovieDetail() {
    const [movieDetailData, setMovieDetailData] = useState()
    const apiKey = process.env.REACT_APP_MOVIEAPI_KEY
    const {id} = useParams();
    const Styles = styles();


const getDetailPost = async () => {
    const result = await axios.get(movieDetailBaseUrl+id, {
        params: {
            api_key: apiKey,
           
        }}) 
        try {
            setMovieDetailData(result?.data)
          } catch(err) {
            console.log(err)
          }    
       
}



useEffect(() => {
    getDetailPost();
}, [])



    return (
        <Container className={Styles.wrapper}>
            <DetailCard movie={movieDetailData}/>
        </Container>
    )
}

export default MovieDetail
