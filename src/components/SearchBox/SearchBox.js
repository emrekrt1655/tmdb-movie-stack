import React from 'react'
import { TextField } from '@material-ui/core'
import { styles } from './SearchBox.style'

function SearchBox({ setSearchKeyword }) {
    const classes = styles();

    const onSearch = (event) => {
        setSearchKeyword(event?.target?.value)

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
