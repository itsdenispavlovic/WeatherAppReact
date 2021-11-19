import {API_KEY, myApp} from "./client";

export const getWeatherData = (query: string): Promise<any | null> => {
    return new Promise((resolve, reject) => {
        myApp.get(`/weather?q=${query}&units=metric&appid=${API_KEY}`).then(response => resolve(response)).catch(error => reject(error));
    });
}
