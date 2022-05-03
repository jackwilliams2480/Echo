import React from "react";
import { Typography } from "@mui/material";
import { Card, CardActionArea, CardMedia } from "@mui/material";
import artistimg from "../../assets/artist_spotlight/dojacat.jpg"
import { CardContent } from "@mui/material";
import { Grid } from "@mui/material";
function PlaylistRec() {
    return (
        <div>
            <Typography sx={{ color: "#7A5C61", fontWeight: "bold", m:2 }}>
                Playlist for You
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="baseline"
                spacing={2}
            >
                <Grid item>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="80"
                                image={artistimg}
                                alt="dojacat"
                            />
                            <CardContent>
                                <Typography textAlign="center">
                                    Playlist 1
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="80"
                                image={artistimg}
                                alt="dojacat"
                            />
                            <CardContent>
                                <Typography textAlign="center">
                                    Playlist 2
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="80"
                                image={artistimg}
                                alt="dojacat"
                            />
                            <CardContent>
                                <Typography textAlign="center">
                                    Playlist 3

                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="80"
                                image={artistimg}
                                alt="dojacat"
                            />
                            <CardContent>
                                <Typography textAlign="center">
                                    Playlist 4
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="80"
                                image={artistimg}
                                alt="dojacat"
                            />
                            <CardContent>
                                <Typography textAlign="center">
                                    Playlist 5
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="80"
                                image={artistimg}
                                alt="dojacat"
                            />
                            <CardContent>
                                <Typography textAlign="center">
                                    Playlist 6
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

            </Grid>
        </div>
    );
}

export default PlaylistRec;