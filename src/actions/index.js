import axios from "axios";
const API_KEY = "8d71b2d1b288a4e7fb933991ea8e6e42";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);
  request.then(data => console.log(data));
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
