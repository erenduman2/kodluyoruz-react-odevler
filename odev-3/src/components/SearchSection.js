import axios from "axios";
import "./style/style.css";
import React from 'react'
import { useWeather } from "../context/WeatherContext";

function SearchSection() {
  
  
  const {setCityInfo, city, setCity, setWeatherForecast} = useWeather();

  const submitHandler = (event) => {
    let endpoint = `http://api.weatherapi.com/v1/forecast.json?key=b78d37550ad04ad1a79142224222208&q=${city}&days=7&aqi=no&alerts=no`;
    axios(endpoint)
    .then(object => setWeatherForecast(object.data.forecast.forecastday))
    .catch(() => {
      setWeatherForecast([]);
      setCityInfo("Girdiğiniz şehir bulunamadı. :(")
    });

    setCityInfo(`${city.charAt(0).toUpperCase()}${city.slice(1)} Hava Durumu`);
    event.preventDefault();
}

  return (
    <div>
      <form onSubmit={submitHandler}>
            <input className='input' placeholder='Sehir Giriniz' name='city' value={city} onChange={(e) => {setCity(e.target.value);}} />
            <button type="submit">Ara</button>
        </form>
    </div>
  )
}

export default SearchSection
