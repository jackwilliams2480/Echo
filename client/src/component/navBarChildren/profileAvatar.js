import { IconButton,Menu,MenuItem,Avatar } from "@mui/material";
import { Box } from "@mui/system";
import React,{useState} from "react";
import pic from "../../assets/artist_spotlight/dojacat.jpg";

function ProfileAvatar(){

    const [anchorElUser, setAnchorElUser] = useState(null);
    

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };

    return <Box sx={{flexGrow:0}}>
        <IconButton onClick={handleOpenUserMenu}>
            <Avatar alt="something" src={pic} />
        </IconButton>
        <Menu
              sx={{ mt: '45px'}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem>
                    Account
                </MenuItem>
                <MenuItem>
                    Profile
                </MenuItem>
                <MenuItem>
                    Settings
                </MenuItem>
                <MenuItem>
                    Log out
                </MenuItem>
            </Menu>
    </Box>
}


export default ProfileAvatar;