import React from 'react'
import Card from './Card'


function CardList({movieData, handleLoadMore, page}) {
   
    return (
    <div>
          {
                movieData && movieData?.map((movie) => {
                    return(
                    <Card key={movie?.id} movieData={movie} > {movie?.title} </Card>)
                })
            }
    </div>

        
          
        
    )
}

export default CardList
