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
    console.log(res.data);
  }
 
  async function getLocation() {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        getWeather(position.coords.latitude, position.coords.longitude);
        setLocation(true)
      },
        err => {
          if( err.code === 1){
            alert("Permita que este site utilize localização do seu dispositivo e verifique se a localização está ativada")
          }
          else if( err.code === 1){
            alert("Não foi possível obter a localização. Verifique se a localização do seu dispositivo está ativada")
          }
          else{
            alert(`ERROR(${err.code}): ${err.message}`)
          }
        }
      )
    }
  }

  useEffect(()=> {
    getLocation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  if (location === false) {
    return (
      <Fragment>
        <LocationRequest />
        <button className="btn-obter-localizacao" onClick={getLocation}>Obter Localização</button>
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
      <div className={'interface'}>
          <span className={"city"}>{weather['name']}</span>
          <h1 className={"temperature"}>{(weather['main']['temp']).toFixed(0)}°C</h1>
              <span className={"condition"}>{weather['weather'][0]['description']}</span>
              <img className={"condition-icon"} src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`} alt="condition" />
          <span className="descricao-umidade">Umidade</span>
          <span className={"umidade"}>{weather['main']['humidity']}%</span>
      </div>
    );
  }
}
export default App;