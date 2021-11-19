import React, {useState} from 'react';
import { useStyles } from './styles';
import { SearchBox } from "../components/SearchBox";
import {WeatherData} from "../components/WeatherData";
import {getWeatherData} from "../api/weather";

export const WeatherScreen = () => {

    const classes = useStyles();

    const [search, setSearch] = useState('');

    const [temperature, setTemperature] = useState<number | null>(null);
    const [location, setLocation] = useState<string | null>(null);
    const [weatherStatus, setWeatherStatus] = useState<string | null>(null);

    const handleSearchWeather = (event: any) => {
        setSearch(event.target.value);
    }

    const getWeather = (event: any) => {
        if(event.key === "Enter") {
            if(search !== '') {
                getWeatherData(search).then(response => {
                    const data = response.data;

                    if(data.weather[0] !== undefined) {
                        setWeatherStatus(data.weather[0].main)
                    }

                    setTemperature(data.main.temp);

                    setLocation(data.name);

                }).catch(_ => {})
            }
        }
    }

    return (
        <div className={classes.root}>
            <div>
                <SearchBox
                    value={search}
                    handleChange={handleSearchWeather}
                    onKeyPress={getWeather}
                />
            </div>
            {
                temperature !== null
                ?
                    <div>
                        <WeatherData
                            temperature={temperature}
                            location={location}
                            weatherStatus={weatherStatus}
                        />
                    </div>
                :
                    null
            }
        </div>
    )
}
