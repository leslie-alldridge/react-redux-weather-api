import axios from 'axios';
const API_KEY = process.env.API_KEY;
const ROOTURL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather (city) {
    const url = `${ROOTURL}&q=${city},us`;
    const request = axios.get(url)
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}

