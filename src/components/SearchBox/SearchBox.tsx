import React from 'react';
import { SearchBoxProps } from "./types";
import {TextField} from "@mui/material";
import {useStyles} from "./styles";

export const SearchBox = ({ value, handleChange, onKeyPress }: SearchBoxProps) => {

    const classes = useStyles();

    return (
        <>
            <TextField
                onKeyPress={onKeyPress}
                id="outlined-basic"
                label="Search"
                variant="outlined"
                className={classes.inputStyle}
                value={value}
                onChange={handleChange}
            />
        </>
    )
}
