import { createContext, useContext, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
    const [cityInfo, setCityInfo] = useState("Hatay Hava Durumu");
    const [city, setCity] = useState("Hatay");
    const [weatherForecast, setWeatherForecast] = useState([]);

    const values = {
        cityInfo,
        setCityInfo,
        city,
        setCity,
        weatherForecast,
        setWeatherForecast,
    }
    return <WeatherContext.Provider value={values}> {children} </WeatherContext.Provider>
}

export const useWeather = () => useContext(WeatherContext);

export default WeatherContext;