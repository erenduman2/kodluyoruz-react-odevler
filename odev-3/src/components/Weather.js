import {useEffect} from 'react'
import axios from "axios";
import "./style/style.css";
import { useWeather } from "../context/WeatherContext";

function Weather() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const {cityInfo, weatherForecast, setWeatherForecast} = useWeather();
    const today = new Date().getDay();

    useEffect(() => {
      let endpoint = `http://api.weatherapi.com/v1/forecast.json?key=b78d37550ad04ad1a79142224222208&q=Hatay&days=7&aqi=no&alerts=no`;
      axios(endpoint).then(object => setWeatherForecast(object.data.forecast.forecastday));
    }, []);

  return (
    <div>
        <h1 style={{paddingTop: 18}}>{cityInfo}</h1>

        <div className='container'>
        {
            weatherForecast.map((forecast, index) => {
            const date = forecast.date; //"07-22-2022" 2022-08-22 
            const formattedDate = date.slice(5,7) + "-" + date.slice(8,10) + "-" + date.slice(0,4);
            const day = new Date(formattedDate).getDay(); // api'den çekilen günün sayisi
            return <div className={day === today ? 'ordering color' : "ordering"} key={index}>
              {days[day]} <br />
              <img src={forecast.day.condition.icon} alt="icon"/> <br />
              {forecast.day.maxtemp_c} &nbsp; {forecast.day.mintemp_c} 
              </div>
          })
        }
      </div>
    </div>
  )
}

export default Weather
