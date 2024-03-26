import React from 'react';
import WeatherData from './WeatherData'; // Import WeatherData component


const WeatherList = ({ weatherData, weatherGraph }) => {
  return (
    <div>
      <h2>Aggie Home Weather Station</h2>
      <hr />
      <h3>Current Weather</h3>
      {weatherData.map(data => (
        <WeatherData
          key={data._id}
          data={data}
        />
      ))}
      <hr />
      <h3>Weather Graphs</h3>
      <div>
    </div>
    </div>
  );
};

export default WeatherList;
