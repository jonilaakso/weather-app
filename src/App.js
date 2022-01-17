//TUTORIAL: https://www.youtube.com/watch?v=rtR4s626ebE

import React, {useState} from 'react'
import './App.css'

function App() {

  //Tila muuttujat / statevariables
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const getWeather = (event) => {
    if (event.key === "Enter"){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`).then(
        response => response.json()
      ).then(
        data => {
          setWeatherData(data)
          console.log(weatherData);
          setCity("");
        }
      )
    }
  }
  return (
    <div className="container">
      <input 
      className="input" 
      placeholder="Enter City"
      onChange={e => setCity(e.target.value)}
      value={city}
      onKeyPress={getWeather}
      />
      
      {typeof weatherData.main === 'undefined' ? (
        <div>
          <p>Welcome to the weather app! Enter a city to get the weather of.</p>
        </div>
      ) : (
        <div>
          <p>{weatherData.name}</p>
          <p>{Math.round(weatherData.main.temp)} °C.</p>
          <p>{weatherData.weather[0].main}</p>
        </div>
      )}
    
    </div>


  )
}

export default App
