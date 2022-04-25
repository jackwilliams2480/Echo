import React from "react";
import { Paper, MenuItem, MenuList, Typography } from "@mui/material";

function PlayListMenue() {

    return <Paper sx={{ width: '100%', backgroundColor:"#E8ECEF"}} elevation={0}>
        <MenuList>
            <Typography sx={{ pl: 2, fontWeight:'bold' }}>
                PLAYLIST
            </Typography>
            <MenuItem>
                <Typography >
                    playlist 1
                </Typography>
            </MenuItem>
            <MenuItem>
                <Typography>
                    playlist 2
                </Typography>
            </MenuItem>
            <MenuItem>
                <Typography>
                    playlist 2
                </Typography>
            </MenuItem>
            <MenuItem>
                <Typography>
                    playlist 2
                </Typography>
            </MenuItem>
        </MenuList>
    </Paper>;
}

export default PlayListMenue;
