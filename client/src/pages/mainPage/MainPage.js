import {Grid, ThemeProvider, createTheme, Typography } from "@mui/material";
import React,{useState} from "react";

import NavBar from "../../component/NavBar";
import SideBar from "../../component/SideBar";
import Discover from "../../component/Discover";
import Trending from "../../component/Trending";
import Playlist from "../../component/Playlist";
const theme = createTheme({
    typography:{
        "fontFamily":`"Quicksand","sans-serif"`,
    },
})


function MainPage(){
    const [buttonClicked, setButtonClicked] = useState({buttonName:"discover", catagory:"browse"});

    const handleClick = (buttonName,catagory) =>{
        console.log(buttonName);
        setButtonClicked({buttonName:buttonName, catagory:catagory});
    }

    function createData(name, nofPlay, time) {
        return { name , nofPlay ,time};
      }
      
      const rows = [
        createData('Frozen yoghurt', 20, "2:46"),
        createData('Ice cream sandwich' , 3123, "3:46"),
        createData('Eclair' , 323, "1:43"),
        createData('Cupcake' , 421, "5:32"),
        createData('Gingerbread', 2421, "2:56"),
      ];

    const dynamicRender = () =>{
        if(buttonClicked.catagory === "browse"){
            switch (buttonClicked.buttonName){
                case 'discover':
                    return <Discover />
                case 'trending':
                    return <Trending />
                default:
                    return <Typography>An Error has occure</Typography>
            }   
        }else if(buttonClicked.catagory === "playlist"){
            return <Playlist data={rows} />
        }
        return <Typography>An Error has occure</Typography>
    }

    return(
        <ThemeProvider theme={theme}>

        <Grid container direction="row" alignItems="stretch" rowSpacing={0}>
             <Grid item sx={{backgroundColor:"#E8ECEF", minWidth:160}}>
                <SideBar handleClick={handleClick}/>
            </Grid> 
             <Grid item sx={{backgroundColor:"#F5F7F7"}} xs>
                <Grid container direction="column">
                    <Grid item>
                        <NavBar/>
                    </Grid>
                    <Grid item>
                        {dynamicRender()}
                    </Grid>
                </Grid>

            </Grid> 
        </Grid>
        </ThemeProvider>
        );
}

export default MainPage;