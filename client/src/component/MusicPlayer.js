import { IconButton, Grid } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';


import React,{useState, useEffect} from "react";
import { Slider } from "@mui/material";


const Player = ({ url }) => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
    const [timeStamp, setTimeStamp] = useState(0);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        if(playing){
            audio.play();
        }else{
            audio.pause();
        }
      },
      [playing]
    );
  
    useEffect(() => {
      audio.addEventListener('ended', () => setPlaying(false));
      const interval = setInterval(() => {
        setTimeStamp(audio.currentTime);
      }, 1000);
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
        clearInterval(interval);
      };
    }, []);
  

    return (
        <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{width:"100%", backgroundColor:"#E8ECEF", p:1}}
      >
        <Grid item>
        <IconButton sx={{border:1}} onClick={toggle}>
           { playing? <PauseIcon/> : <PlayArrowIcon />}
        </IconButton>
        </Grid>
        <Grid item>
            <Slider value={audio.duration> 0 ?(timeStamp/audio.duration)*100 : 0 }  sx={{width:500}}/>
        </Grid>

      </Grid>
    );
  };
  
  export default Player;