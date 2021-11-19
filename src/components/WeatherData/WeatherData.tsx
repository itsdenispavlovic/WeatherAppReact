import React from 'react';
import {WeatherDataProps} from "./types";
import {useStyles} from "./styles";

export const WeatherData = ({ temperature, location, weatherStatus }: WeatherDataProps) => {

    const classes = useStyles();

    const dateBuilder = (): string => {

        const d = new Date();

        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        const day = days[d.getDay()];
        const date = d.getDate();
        const month = months[d.getMonth()];
        const year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`;
    }

    return (
        <>
            <div className={classes.content}>
                <span className={classes.location}>{ location }</span>
                <span className={classes.date}>{dateBuilder()}</span>
                <span className={classes.temperature}>{ temperature } &deg;C</span>
                <span className={classes.weather}>{ weatherStatus }</span>
            </div>
        </>
    )
}
