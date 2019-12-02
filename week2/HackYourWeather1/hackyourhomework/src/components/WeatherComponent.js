import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Cities from './Cities';

function Weather() {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const getData = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=9e129c782000441e49b0896bb5098d02
    `);
    const resJson = await response.json();
    return resJson;
  };
  const handleClick = () => {
    return (
      <div>
        <Cities name={getData().name} weather={getData().weather} main={getData().main} />
      </div>
    );
  };

  return (
    <div>
      <SearchBar change={handleChange} click={handleClick} />
    </div>
  );
}

export default Weather;
