import React from 'react'
import {baseImageUrl} from '../../helper/utils'


function CardList({movieData, handleLoadMore, page}) {
   
    return (

        <div>
            {
                movieData && movieData?.map((movie, index) => {
                    return(
                    <p key={index}> {movie?.title} </p>)
                })
            }
        </div>
    )
}

export default CardList
