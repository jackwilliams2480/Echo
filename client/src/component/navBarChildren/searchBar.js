import React from "react";
import {IconButton,InputBase } from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';

function SearchBar(){

    return(
        <>
            <InputBase
                    sx={{ ml: 1, flex: 1, minWidth:300 }}
                    placeholder="Artists, songs, or playlists"
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </>
    )
}

export default SearchBar;