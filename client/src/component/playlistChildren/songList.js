import React from "react";
import { Table, TableHead, TableCell ,TableBody, TableContainer, TableRow} from "@mui/material";
function songList({data}){
    return <TableContainer >
    <Table sx={{borderLeft:0}}>
        <TableHead>
            <TableRow>
                <TableCell align="left">
                    #
                </TableCell>
                <TableCell align="left">
                    TITLE
                </TableCell>
                <TableCell align="left">
                    PLAYS
                </TableCell>
                <TableCell align="left">
                    TIME
                </TableCell>
                </TableRow>
        </TableHead>
        <TableBody>
            {data.map((row,index) => (
                <TableRow  key={row.name} >
                    <TableCell>
                        {index}
                    </TableCell>
                    <TableCell>
                        {row.name}
                    </TableCell>
                    <TableCell>
                        {row.nofPlay}
                    </TableCell>
                    <TableCell>
                        {row.time}
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
</TableContainer>
}

export default songList;