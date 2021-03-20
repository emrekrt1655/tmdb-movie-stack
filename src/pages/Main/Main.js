import React, {useState, useEffect} from 'react'
import {  Container, Typography  } from "@material-ui/core";
import { styles } from "./Main.style";
import CardList from '../../components/CardList/CardList'
import SearchBox from '../../components/SearchBox/SearchBox'
import axios from 'axios'
import {baseUrl } from '../../helper/utils'



function Main() {
    const [movieData, setMovieData] = useState([])
    const [searchKeyword, setSearchKeyword] = useState('/movie');
    const [page, setPage] = useState(1);
    const apiKey = process.env.REACT_APP_MOVIEAPI_KEY 





    const getPostList = async () => {
      const result = await axios.get(baseUrl, {
        params: {
            api_key: apiKey,
            page:page,
            query: searchKeyword // TODO: from input
        }})
        try {
          setMovieData(result?.data?.results)
        } catch(err) {
          console.log(err)
        }
    }

    

    const handleLoadMore = () => {
      setPage(page+1);
    }

    useEffect(()=>{
        getPostList();
      },[searchKeyword, page]);  
      
      
    const Styles = styles();
    return (
        
            <Container className={Styles.wrapper}>
              <Typography className={Styles.heading} variant='h3' component='h3'>
                      Welcome to Movie Stack..
              </Typography>
              <SearchBox searchKeyword={searchKeyword} setPage={setPage} setSearchKeyword={setSearchKeyword} />
              <CardList movieData={movieData} handleLoadMore={handleLoadMore} page={page} />
                  
                
            </Container>
      
    )
}

export default Main
