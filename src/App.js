import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import LocationRequest from './components/locationRequest';
import Loading from './components/loading';
import './App.css'

function App() {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);

  let getWeather = async (lat, long) => {
    let res = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
      params: {
        lat: lat,
        lon: long,
        appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
        lang: 'pt',
        units: 'metric',
      }
    });
    setWeather(res.data);
  }

  useEffect(() => {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        getWeather(position.coords.latitude, position.coords.longitude);
        setLocation(true)
      },
        err => {
          alert(`ERROR(${err.code}): ${err.message}`)
        }
      )
    }
  }, [])

  if (location === false) {
    return (
      <Fragment>
        <LocationRequest />
      </Fragment>
    )
  }
  else if (weather === false) {
    return (
      <Fragment>
        <Loading />
      </Fragment>
    )
  }
  else {
    let iconCode = weather['weather'][0]['icon']
    return (
      <div className="interface">
        <h3 className="city">{weather['name']}</h3>
        <h1 className="temperature">{weather['main']['temp']}° C</h1>
        <img className="condition-icon" src={`http://openweathermap.org/img/wn/${iconCode}.png`} alt="condition" />
        <p className="condition">{weather['weather'][0]['description']}</p>
      </div>
    );
  }
}
export default App;