import React from "react";
import {Paper, MenuItem, MenuList, ListItemIcon, Typography, ListItemText} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function BrowseMenue({handleClick}){

    return <Paper sx={{width:'100%', backgroundColor:"#E8ECEF"}} elevation={0}>
            <MenuList>
                <Typography sx={{pl:2, fontWeight:'bold'}} >
                     Browse
                </Typography>
                <MenuItem onClick={() => handleClick("discover","browse")}>
                    <ListItemIcon>
                        <SearchIcon fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText>
                        Discover
                    </ListItemText>
                </MenuItem>
                <MenuItem onClick={() => handleClick("trending","browse")}>
                    <ListItemIcon>
                        <TrendingUpIcon fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText>
                        Trending
                    </ListItemText>
                </MenuItem>
                {/* <MenuItem onClick={() => handleClick("songs","browse")}>
                    <ListItemIcon>
                        <LibraryMusicIcon fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText>
                        Songs
                    </ListItemText>
                </MenuItem>
                <MenuItem onClick={() => handleClick("artist","browse")}>
                    <ListItemIcon>
                        <PersonOutlineIcon fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText>
                        Artist
                    </ListItemText>
                </MenuItem> */}
            </MenuList>
    </Paper>;
}

export default BrowseMenue;
