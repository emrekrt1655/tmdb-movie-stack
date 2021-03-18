import React, {useState, useEffect} from 'react'
import {  Container } from "@material-ui/core";
import { styles } from "./Main.style";
import CardList from '../../components/CardList/CardList'
import axios from 'axios'
import {baseUrl } from '../../helper/utils'
function Main() {
    const [movieData, setMovieData] = useState([])
    const [searchKeyword, setSearchKeyword] = useState('movie');
    const [page, setPage] = useState(1);
    const apiKey = process.env.REACT_APP_API_KEY 

    const getPostList = () => {
        axios.get(baseUrl, {
          params: {
              api_key: apiKey,
              page:page,
              query: searchKeyword // TODO: from input
          }}).then((res)=> {setMovieData(res?.data?.results) })
          .catch((err)=> console.log(err))
      }

    useEffect(()=>{
        getPostList();
      },[searchKeyword, page]);   
      
  const handleLoadMore = () => {
    setPage(page+1);
  }
    const Styles = styles();
    return (
        
            <Container className={Styles.wrapper}>
                {/* <SearchInput setSearchKeyword={setSearchKeyword} /> */}
                <CardList movieData={movieData} handleLoadMore={handleLoadMore} page={page} />
            </Container>
      
    )
}

export default Main
