import axios from "axios";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const apiKey = "73fd1b95e7b94f5465f57bf067b8331f";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">{data.name}</div>
          <div className="temp">
            <h1>{data.main ? <h1>{data.main.temp}*F</h1> : null}</h1>
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            {data.main ? <p>{data.main.feels_like}</p> : null }
            <p className="bold">Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p>{data.main.humidity}</p> : null }
            <p className="bold">Humidity</p>
          </div>
          <div className="wind">
             {data.wind ? <p>{data.wind.speed}</p> : null } 
            <p className="bold">Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
