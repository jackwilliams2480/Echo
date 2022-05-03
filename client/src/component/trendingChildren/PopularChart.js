import { TableHead,Table, TableContainer, Paper,TableCell, TableBody ,TableRow, Grid } from "@mui/material";


import React from "react";

function PopularArtist({catagory,data}){

    return (
        <TableContainer component={Paper} sx={{backgroundColor:"#E8ECEF"}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">
                            Top {catagory}
                        </TableCell>
                        </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row,index) => (
                        <TableRow  key={row.name}>
                            <TableCell>
                            <Grid
                                container
                                direction="row"
                                justifyContent="space-between"
                                alignItems="baseline"
                            >
                                <Grid item>
                                    {row.name}
                                </Grid>
                                <Grid item>
                                    {index}
                                </Grid>
                            </Grid>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default PopularArtist;