import axios from "axios";

export const API_URL = process.env.REACT_APP_WEATHER_API_URL
export const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

export const myApp = axios.create({baseURL: API_URL});
