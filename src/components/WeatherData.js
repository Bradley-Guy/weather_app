import React, { useState } from 'react';


const WeatherData = ({ data }) => {
  const [tempUnit, setTempInFahrenheit] = useState('F');
  const [pressureUnit, setPressureUnit] = useState('bar');
  const [windUnit, setWindSpeedMph] = useState('mph');
  const date = new Date(data.time);
  

  const handleConvertToFahrenheit = () => {
    setTempInFahrenheit('F');
  };

  const handleConvertToCelsius = () => {
    setTempInFahrenheit('C');
  };

  const handleConvertToBar = () => {
    setPressureUnit('bar');
  };

  const handleConvertToATM = () => {
    setPressureUnit('atm');
  };

  const handleConvertTommHg = () => {
    setPressureUnit('mmHg');
  };

  const handleConvertToMph = () => {
    setWindSpeedMph('mph');
  };

  const handleConvertToKph = () => {
    setWindSpeedMph('kph');
  };

  let temperature = data.temperature_f;
  let wind_speed = data.wind_speed_mph;
  let pressure = data.pressure_bar;

  if(tempUnit === 'F') {
    temperature = data.temperature_f; // No conversion needed for Fahrenheit
  } else if(tempUnit === 'C'){
    temperature = (data.temperature_f - 32) * (5/9);
  }

  if (pressureUnit === 'bar') {
    pressure = data.pressure_bar; // No conversion needed for bar
  } else if (pressureUnit === 'atm') {
    pressure = (data.pressure_bar * 0.986923); // Conversion to atm
  } else if (pressureUnit === 'mmHg') {
    pressure = (data.pressure_bar * 750.062); // Conversion to mmHg
  }

  if(windUnit === 'mph') {
    wind_speed = data.wind_speed_mph; // No conversion needed for mph
  } else if(windUnit === 'kph'){
    wind_speed = (data.wind_speed_mph * 1.609344);
  }


  return (
    <div className="weather-data">
      <div>Time: {date.toString()}</div>
      <div>Temperature: {temperature.toFixed(1)} {tempUnit}</div>
      <button onClick={handleConvertToFahrenheit}>Convert to Fahrenheit</button>
      <button onClick={handleConvertToCelsius}>Convert to Celsius</button>
      <div>Pressure: {pressure.toFixed(3)} {pressureUnit}</div>
      <button onClick={handleConvertToBar}>Convert to Bar</button>
      <button onClick={handleConvertToATM}>Convert to ATM</button>
      <button onClick={handleConvertTommHg}>Convert to mmHg</button>
      <div>Wind Speed: {wind_speed.toFixed(1)} {windUnit}</div>
      <button onClick={handleConvertToMph}>Convert to Mph</button>
      <button onClick={handleConvertToKph}>Convert to KpH</button>
      <div>Light: {data.light.toFixed(1)} lux</div>
      <div>Soil Moisture: {data.soil_moisture.toFixed(1)} % </div>
      <div>Humidity: {data.humidity.toFixed(1)} %RH</div>
      <div>Wind Direction: {data.wind_direction.toFixed(1)} </div>
      
    </div>
  );
};

export default WeatherData;
