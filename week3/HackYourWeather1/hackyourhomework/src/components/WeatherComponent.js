import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Cities from './Cities';

function Weather() {
  const [value, setValue] = useState('');
  const [city, setCity] = useState([]);
  const [cityError, setError] = useState(false);

  const [condition, setCondition] = useState(false);

  const handleChange = e => {
    setValue(e.target.value);
  };

  function deleteCity(index) {
    console.log(index);
    console.log(city);

    setCity(city.splice(index, 1));

    console.log(city);
    getData();
  }

  const getData = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=9e129c782000441e49b0896bb5098d02
    `);
      const data = await response.json();

      const newCities = await city.filter(city => city.id !== data.id);

      if (data.cod === '404') {
        console.log(data.cod);
        await setError(true);
      } else {
        setError(false);
        await setCity([data, ...newCities]);
        await setCondition(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async () => {
    await getData();
  };

  return (
    <div>
      <SearchBar change={handleChange} text={value} click={handleClick} />
      {cityError === true ? <h1>City Not Found!</h1> : <p></p>}
      {condition === true && <Cities data={city} handle={deleteCity} />}
    </div>
  );
}

export default Weather;
