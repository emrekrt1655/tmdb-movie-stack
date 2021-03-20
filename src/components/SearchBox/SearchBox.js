import React, {useRef} from 'react'
import {TextField} from '@material-ui/core'
import {styles} from './SearchBox.style'

function SearchBox({setSearchKeyword, setPage, SearchKeyword}) {
    const classes = styles();
   
    const onSearch = (event) => {
        setSearchKeyword(event?.target?.value)
        
    }
    
    {
        SearchKeyword == '' && setSearchKeyword('movie') 
    }

    return (
        <div className={classes.wrapper} >
        
             <TextField className={classes.input} 
              id="outlined-basic" label="Search Movie" 
              variant="outlined" 
             
              onChange={onSearch}
            />
        
        </div>

    )
}

export default SearchBox
