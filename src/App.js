import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherList from './components/WeatherList'; // Import WeatherList component

function App() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/temperatures'); // API call to /temperatures
      console.log('Received data:', response.data);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <WeatherList
        weatherData={weatherData}
      />
    </div>
  );
}

export default App;
